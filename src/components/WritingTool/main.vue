<template>
<div>
 
    <!-- mini-variant.sync="mini" -->
    <v-navigation-drawer v-model="drawer" absolute   >
       <v-btn fab small text @click="drawer = !drawer"><v-icon>menu</v-icon></v-btn> Story
     
      <v-list dense>

       <ManuscriptTree />
      </v-list>
    </v-navigation-drawer>

  <v-btn fab small text  @click="drawer = !drawer"><v-icon>menu</v-icon></v-btn>
 <div class="mainc" :class="{ inset: drawer }">
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
 </div>

</div>
</template>

<script>
import ManuscriptTree from "../MenuTools/ManuscriptTree"
import FolderSettings from "./FolderSettings"
import TextSettings from "./TextSettings"
export default {
  components: {
    FolderSettings,
    TextSettings,
    ManuscriptTree
  },
  data: () => ({
    drawer: null,
    dialog : false
  }),
     methods:{
      DeleteItem() {
      this.dialog = false;
      this.$root.DeleteManuscriptItem();
    }
     }
};
</script>
<style scoped>
.consoleFeedback {
  font-family: "Courier New", Courier, monospace;
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
}
.mainc{
  position: absolute;
  top:0px;
  left:50px;
right:0px;
}
.inset{
   top:0px;
  left:260px;
right:0px;
}

</style>