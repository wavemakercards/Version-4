<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="myEl.name" label="Folder Name" @keyup="trg()"></v-text-field>
        </v-col>
      </v-row>
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



    </v-container>
  </div>
</template>

<script>
export default {
  data (){
    return {
        dialog : false
    }
  },
  computed: {
    myEl() {
      return this.$store.state.ManuscriptTree.ItemSelected;
    }
  },
  methods: {
    DeleteItem() {
this.dialog = false
      // need to get the New_Index and New_Parent of the parent
      this.$store.dispatch("DeleteCurrentItem");
    },
    trg() {
      this.$store.commit("triggersave");
    },
    FindParentAndPositionInElements(id, parentObj) {
      //console.log("ID to find", id)
        if(!parentObj){
             parentObj = this.$store.state.ManuscriptTree
          }
         let el =  null
        let arrtosearch = parentObj.elements
        //console.log("Searcing" ,arrtosearch)
          arrtosearch.forEach((element,index) => {
            if(element.id === id){
              el ={
                parentObj,
                index
              }
              }else{
                 if(element.elements){
                   el = this.FindParentAndPositionInElements(id, element) 
                 }
              }
          });
          return el
    }
  }
};
</script>