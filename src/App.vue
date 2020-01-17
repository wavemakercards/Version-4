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
   <Loading v-if="!this.$store.state.AppLoaded"/>
   <WaveMaker v-if="this.$store.state.AppLoaded"/>
  </v-app>
</template>

<script>
import Loading from "./Loading";
import WaveMaker from "./WaveMaker";
export default {
  components: {
    Loading,
    WaveMaker
  }
};
</script>
