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

 <ManuscriptTreeItem v-model="MyElements" @input="ChangeDetected" @SelectedNode="SelectedNode"/>
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
  this.MyElements = payload
     this.saveData();
  },
  SelectedNode(payload){
    // set it in the root variable - not using vuex I think!
     this.$root.liveData.SelectedCard=payload;
     this.saveData();
  },
  saveData(){
        //console.log(payload)

      this.MyData.manuscript = JSON.stringify(this.MyElements);
      this.MyData.lastupdated = Date.now()

      this.$root.db.ProjectInfo.put(this.MyData).then(function(updated) {
        if (updated) {
        console.log("Save done");
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
                    let pos = this.$root.FindNodeByID(this.$root.liveData.SelectedCard.id, this.$store.state.ManuscriptTree)
                    console.log(pos)
                    pos.parentObj.elements.splice(pos.index + 1, 0, newObj);
                }
            } else {
               // console.log("DEFAULTING!")
               this.MyElements.push(newObj)
            }
        // item Added so SAVE the project Info
        this.saveData();
  }
  },
 beforeMount() {
   console.log("getting the data from the database")
   this.$root.db.ProjectInfo.get({ id : 1 }).then((result) => {
                return result;
            }).then(data => {
              console.log(data)
                if (data) {
                   this.MyData = data
                   console.log("MyData", this.MyData)
                   this.MyElements = JSON.parse(this.MyData.manuscript)
                    if(!this.MyElements){
                      this.MyElements = [];
                    }
                }else{
                  console.warn("NO PROJECT!")
                  this.MyData = {}
                  this.MyData.id=1
                  this.MyData.uuid = this.$root.uuid.v1()
                  this.MyData.title = "Created by accident"
                }
            });
  
  }
}


</script>

