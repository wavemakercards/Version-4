<style scoped>
.sticky {
  position: sticky;
  top: 0px;
  z-index: 999;
}
</style>
<template>
  <div>
    <v-row class="sticky">
      <v-col align="right">
        <v-btn small text @click="AddManuscriptTreeItem('folder')">
          <v-icon>create_new_folder</v-icon>
        </v-btn>
        <v-btn small text @click="AddManuscriptTreeItem('file')">
          <v-icon>note_add</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <ManuscriptTreeItem
      v-model="this.$root.ProjectState.Manuscript"
      @input="ChangeDetected"
      @SelectedNode="SelectedNode"
    />
  </div>
</template>

<script>
import ManuscriptTreeItem from "./ManuscriptTreeItem";

export default {
  components: {
    ManuscriptTreeItem
  },
  methods: {
    ChangeDetected(payload) {
      //console.log(payload)
      this.$root.ProjectState.Manuscript = payload;
      this.saveData();
    },
    SelectedNode(payload) {
      console.log("BING",payload)
      // set it in the root variable - not using vuex I think!
      this.$root.ProjectState.SelectedCard = payload;
      this.saveData();
    },
    saveData() {
      //console.log(payload)
      this.$root.ProjectState.ProjectInfo.lastupdated = Date.now();
      this.$root.SaveProjectData();
    },
    AddManuscriptTreeItem(payload) {
      let id = this.$root.uuid.v1();
      let newObj = {
        id: id,
        icon: payload,
        name: "New " + payload
      };
      if (payload === "folder") {
        newObj.open = true;
        newObj.elements = [];
      }

      if (this.$root.ProjectState.SelectedCard) {
        if (this.$root.ProjectState.SelectedCard.icon === "folder") {
          this.$root.ProjectState.SelectedCard.open = true;
          this.$root.ProjectState.SelectedCard.elements.push(newObj);
        } else {
          let pos = this.$root.FindNodeByID(
            this.$root.ProjectState.SelectedCard.id,
            this.$root.ProjectState.Manuscript
          );
          pos.parentObj.elements.splice(pos.index + 1, 0, newObj);
        }
      } else {
        // console.log("DEFAULTING!")
        this.$root.ProjectState.Manuscript.push(newObj);
      }
      // item Added so SAVE the project Info
      this.saveData();
    }
  },
  beforeMount() {}
};
</script>

