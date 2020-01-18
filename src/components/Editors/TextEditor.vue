<template>
  <div>
    <v-container>
     
      <v-row>
        <v-col cols="10">
          <v-text-field v-model="myEl.name" label="File Name" @keyup="trg()"></v-text-field>
        </v-col>
        <v-col  cols="2" class="text-center">
          <v-btn color="primary" @click="showPrefs=!showPrefs" fab  dark><v-icon >settings</v-icon></v-btn>
        </v-col>
         
      </v-row>

 <div v-if="showPrefs" >
<v-row>
          <v-col cols="12" class="text-right">
            <v-dialog v-model="dialog" persistent max-width="290">
              <template v-slot:activator="{ on }">
                <v-btn color="error" small dark v-on="on">
                  <v-icon left small dense>delete</v-icon>Delete
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                  <v-icon left error>warning</v-icon>Delete this
                </v-card-title>
                <v-card-text>Are you sure</v-card-text>
                <v-card-actions class="justify-space-between">
                  <v-btn color="success darken-1" text small @click="dialog = false">No Thanks</v-btn>
                  <v-btn color="error darken-1" text small @click="DeleteItem()">DELETE IT</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </div>


<div v-if="!showPrefs">

      <v-row>
        <v-col cols="12">
          <textarea class="editor" v-model="BodyText" placeholder="Write here" @keyup="SaveMyText"></textarea>
        </v-col>
      </v-row>
        
    </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props:["myEl"],
  data() {
    return {
      dialog: false,
      BodyText: "",
showPrefs : false,

    };
  },
  mounted() {

      console.log("mounting editor", this.myEl.uuid);
      let searchObj = {};
      searchObj.uuid = this.myEl.uuid;
      this.$root.db.FileCards.get(searchObj)
        .then(result => {
          return result;
        })
        .then(data => {
          console.log("Loaded ", data);
          if (data) {
            console.log(data);
            this.BodyText = data.body;
          } else {
            this.BodyText = "";
            console.log("Selected Item not in DB shoule be a No No?");
          }
        });
  },
  methods: {
    SaveMyText() {
      let data = {};
      data.uuid = this.myEl.uuid;
      data.title = this.myEl.name;
      data.hashtags = "LATER";
      data.meta = "LATER";
      data.body = this.BodyText;
      data.lastupdated = Date.now();
      console.log("Saving data ", data);
      this.$root.db.FileCards.put(data).then(function(updated) {
        if (updated) {
          console.log("Cool updated!");
        } else {
          // console.log("Failed Save");
        }
      });
    },
    DeleteItem() {
      this.dialog = false;
      this.$root.DeleteManuscriptItem();
    },
    trg() {
      this.$root.ProjectState.SelectedCard.name = this.myEl.name;
      this.$root.SaveProjectData();
    }
  }
};
</script>

<style scoped>
.editor {
  width: 100%;
  padding: 0%;
  min-height: 500px;
  resize: none;
  outline: none;
}
</style>