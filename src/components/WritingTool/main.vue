<template>
    <div>

          <v-container>

        <div v-if="this.$root.ProjectState.SelectedCard"> 
        <v-text-field v-model="MyNodeElementName" label="File Name" ></v-text-field>

            <!-- the prop means it can be used all over the place, the KEY makes it rerender when the element changes --> 
       <TextSettings v-if="this.$root.ProjectState.SelectedCard.icon === 'file'"/>
        <FolderSettings v-if="this.$root.ProjectState.SelectedCard.icon === 'folder'" />
     
     
     
     
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
     
     
       </div>     
        <div v-else>
          Empty Manuscript - may well have a bunch o settings here
        </div>
    
       </v-container>
    
    </div>
</template>

<script>
import FolderSettings from "./FolderSettings"
import TextSettings from "./TextSettings"
export default {
      data (){
    return {
        dialog : false
    }
  },
  computed:{
      MyNodeElementName : {
         // getter
    get: function () {
      return this.$root.ProjectState.SelectedCard.name;
    },
    // setter
    set: function (newValue) {
        console.log("setting")
    this.$root.ProjectState.SelectedCard.name = newValue
     this.$root.SaveProjectData();
    }
      }
  },
    components : {
        FolderSettings,
        TextSettings
    },
    methods:{
      DeleteItem() {
      this.dialog = false;
      this.$root.DeleteManuscriptItem();
    }
    }
}
</script>

