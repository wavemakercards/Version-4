<style >
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap");

html{
  overflow: auto !important;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar {
  width: 6px;
  background-color: var(--wm-editor-scrollbar-bg);
}

::-webkit-scrollbar-thumb {
  background-color: var(--wm-editor-scrollbar-fg);
}
</style>

<template>
  <v-app>
   <Loading v-if="ShowSection ==='Loading' || !this.$store.state.AppLoaded"/>
   <MainMenu v-if="ShowSection ==='Create'"/>
   <WaveMaker v-if="ShowSection ==='Project'"/>
  </v-app>
</template>

<script>
import Loading from "./components/Loading";
import WaveMaker from "./components/WaveMaker";
import MainMenu from "./components/MainMenu";

export default {
  components: {
    Loading,
    WaveMaker,
    MainMenu
  },
  computed :{
    ShowSection(){
      let action = "Loading"
      console.log("Current Project Info" ,this.$root.ProjectState.ProjectInfo)
      if(this.$root.ProjectState.ProjectInfo){
        if(this.$root.ProjectState.ProjectInfo.id){
          action = "Project"
        }else{
          action = "Create"
        }
      }
      console.log("Chosen Action By APP " ,action)
      return action
    }
  },
  methods:{
  },
  mounted(){
    this.$vuetify.theme.dark = this.$store.state.Interface.darkmode;
  }
};

</script>
