<template>
  <div>
    <h1>{{this.$root.ProjectState.Section}} Tool</h1>

<div v-if="!SelectedTimeline">
    <v-container>
      <v-row v-if="tooldata.length >0">
        <v-col md-3 v-for="(item, index) in tooldata" :key="index">
          <v-card height="100%">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">
                    <span v-if="item.title===''">No Title</span>
                    {{item.title}}
                    </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn  primary @click="ChooseTimeline(item)">Select</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
         
      </v-row>
       <v-btn
              fixed
              fab
              bottom
              right
            class="accent"
            @click.native="AddNewTool"
            >
              <v-icon>add</v-icon>
            </v-btn>
    </v-container>
</div>

<div v-if="SelectedTimeline">
  <v-container>
      <v-btn color="primary" @click="ClearSelectedTimeline()" fab fixed right dark small>
        <v-icon>cancel</v-icon>
      </v-btn>



<v-btn  @click="AddCard(-1)">Add New Card</v-btn>
      
      
      </v-container>
</div>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
        tooldata: [],
        SelectedTimeline : null,
        timelineEvents : []
    };
  },
  methods: {
      AddNewTool(){
        let id = this.$root.uuid.v1()
        let newObj = {}
        newObj.uuid= id
        newObj.title = "Title Here"
         newObj.lastupdated =  Date.now();
         this.tooldata.push(newObj)
        this.SaveToolData(newObj)
      },
      SaveToolData(newObj){
      this.$root.db.Timelines.put(newObj).then(function(updated) {
        if (updated) {
          //Cool updated!");
        } else {
         // Failed Save");
        }
      });
      },
      ClearSelectedTimeline() {
        this.SelectedTimeline=null
this.$root.ProjectState.tools.timeline.selectedtimeline =null
this.$root.SaveProjectData()
      },
      ChooseTimeline(ChosenRecord){
        // get the data from the DB
        console.log(ChosenRecord)
        this.$root.ProjectState.tools.timeline.selectedtimeline = ChosenRecord
        this.SelectedTimeline = ChosenRecord
        
        if(!this.SelectedTimeline.data){
          this.timelineEvents = []
        }else{
          this.timelineEvents =JSON.parse(this.SelectedTimeline.data)
        }
        this.$root.SaveProjectData()
      },
      AddCard(i){
         console.log(i)
        // if i is passed as -1 then it bottome  else the index to splice
        let newObj ={}
        newObj.id = this.$root.uuid.v1()
        
        if(i <0){
        
        }
      }
  },
  beforeMount() {

if(this.$root.ProjectState.tools.timeline.selectedtimeline){
  console.log("Exists",this.$root.ProjectState.tools.timeline.selectedtimeline)
  this.SelectedTimeline = this.$root.ProjectState.tools.timeline.selectedtimeline
  }
    let p = this.$root.db.Timelines.toArray();
    p.then((d)=>{
         this.tooldata = d
    })
  }
};
</script>
