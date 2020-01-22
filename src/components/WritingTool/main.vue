<template>
<div>
     <v-navigation-drawer v-model="drawer" class="ManuscriptBar"   >
      <v-list dense>
       <ManuscriptTree  />
      </v-list>
    </v-navigation-drawer>

  <v-btn fab small text @click="drawer = !drawer"  class="folderButton"><v-icon>folder_special</v-icon></v-btn>


 <div class="mainc" :class="{ inset: drawer }">
    <div v-if="this.$root.ProjectState.SelectedCard"> 
       </div>     
        <div v-else>
          Empty Manuscript - may well have a bunch o settings here
        </div>
 </div>

</div>
</template>

<script>
import ManuscriptTree from "./ManuscriptTree"
export default {

   components :{
       ManuscriptTree
   },
   data: () => ({
    drawer: null,
    dialog : false,
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
  left:70px;
right:0px;
}
.inset{
   top:0px;
  left:300px;
right:0px;
}

.ManuscriptBar{
    position:fixed;
     top:0px; 
     left:0px;
     bottom:0px;
     padding-top:90px;
}

.folderButton{
    margin:5px;
}
@media only screen and (min-width: 1264px) {
.ManuscriptBar{
      left:50px;
  }
  .folderButton{
    margin:10px;
}
}
</style>