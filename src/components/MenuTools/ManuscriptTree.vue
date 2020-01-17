<style scoped>
.sticky{
position: sticky;
top:0px;
z-index: 999;
}
</style>
<template>
<div>
     <v-row class="sticky">
          <v-col align="right"  >
            <v-btn small text  @click="AddManuscriptTreeItem('folder')">
              <v-icon>create_new_folder</v-icon>
            </v-btn>
            <v-btn small text  @click="AddManuscriptTreeItem('file')">
              <v-icon>note_add</v-icon>
            </v-btn>
          </v-col>
        </v-row>

 <ManuscriptTreeItem v-model="elements" />
</div>
</template>

<script>
import ManuscriptTreeItem from "./ManuscriptTreeItem";

export default {
  components: {
    ManuscriptTreeItem
  },
   data(){
    return{

  }  
},
  computed: {
    elements: {
      get() {
        return this.$store.state.ManuscriptTree.elements;
      },
      set(value) {
        this.$store.dispatch("updateElements", value);
      }
    }
  },
methods : {
  AddManuscriptTreeItem(item){
     this.$store.dispatch("AddManuscriptTreeItem", item);
  },
}
}


</script>

