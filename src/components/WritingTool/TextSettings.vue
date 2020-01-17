<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="myEl.name" label="file Name" @keyup="trg()"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <textarea class="editor" v-model="BodyText" placeholder="Write here" @keyup="SaveMyText"></textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-row>
          <v-col cols="12" class="text-right">








 <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn color="error" small dark v-on="on"><v-icon left small dense >delete</v-icon> Delete</v-btn>
      </template>
      <v-card >
        <v-card-title class="headline" ><v-icon left error >warning</v-icon> Delete this </v-card-title>
        <v-card-text>Are you sure</v-card-text>
        <v-card-actions class="justify-space-between" >
          <v-btn color="success darken-1" text small @click="dialog = false">No Thanks</v-btn>
          <v-btn color="error darken-1" text small  @click="DeleteItem()">DELETE IT</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


          </v-col>
        </v-row>
      </v-row>
      <div>
        {{JSON.stringify(WriterTool)}}
      </div>











    </v-container>
  </div>
</template>

<script>
import db from "@/DexieDB";
export default {
  data(){
    return{ dialog: false}
  },
  computed: {
    BodyText: {
       // getter
    get: function () {
         return this.$store.state.WriterTool.body;
    },
    // setter
    set: function (newValue) {
      this.$store.commit("SaveCardBody", newValue);
    }
    },
    WriterTool(){
      return this.$store.state.WriterTool
    },
    myEl() {
      return this.$store.state.ManuscriptTree.ItemSelected;
    }
  },
  methods: {
    trg() {
      this.SaveMyText();
      this.$store.commit("triggersave");
    },
    SaveMyText() {
      let data = {};
      data.uuid = this.myEl.id;
      data.title = this.myEl.name;
      data.hashtags = "LATER";
      data.meta = "LATER";
      data.body = this.BodyText;
      data.lastupdated =  Date.now();
      console.log("Saving data ", data);

      db.FileCards.put(data).then(function(updated) {
        if (updated) {
          //console.log("Cool updated!");
        } else {
         // console.log("Failed Save");
        }
      });
    },
    DeleteItem() {
         // need to get the New_Index and New_Parent of the parent
      this.$store.dispatch("DeleteCurrentItem");
      this.dialog = false
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