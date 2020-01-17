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

 <ManuscriptTreeItem v-model="this.$root.liveData.Manuscript" @input="ChangeDetected" @SelectedNode="SelectedNode"/>
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
      MyData : {},
      MyElements : [],
  }  
},
methods : {
  ChangeDetected(payload){
    //console.log(payload)
    this.$root.liveData.Manuscript = payload
   this.saveData();
  },
  SelectedNode(payload){
    // set it in the root variable - not using vuex I think!
     this.$root.liveData.SelectedCard=payload;
     this.saveData();
  },
  saveData(){
        //console.log(payload)
      this.$root.liveData.ProjectInfo.manuscript = JSON.stringify(this.MyElements);
      this.$root.liveData.ProjectInfo.lastupdated = Date.now()

      this.$root.db.ProjectInfo.put(this.$root.liveData.ProjectInfo).then(function(updated) {
        if (updated) {
       // console.log("Save done");
        } else {
         // console.log("Failed Save");
        }
      });
      },
  AddManuscriptTreeItem(payload){   
            let id = this.$root.uuid.v1()
            let newObj = {
                id: id,
                icon: payload,
                name: "New " + payload,
            }
            if (payload === "folder") {
                newObj.open = true
                newObj.elements = []
            }

            if (this.$root.liveData.SelectedCard) {
                if (this.$root.liveData.SelectedCard.icon === "folder") {
                    this.$root.liveData.SelectedCard.open = true
                    this.$root.liveData.SelectedCard.elements.push(newObj)
                } else {
                    let pos = this.$root.FindNodeByID(this.$root.liveData.SelectedCard.id, this.$root.liveData.Manuscript)
                    pos.parentObj.elements.splice(pos.index + 1, 0, newObj);
                }
            } else {
               // console.log("DEFAULTING!")
               this.$root.liveData.Manuscript.push(newObj)
            }
        // item Added so SAVE the project Info
        this.saveData();
  }
  },
 beforeMount() {
  
  }
}


</script>

