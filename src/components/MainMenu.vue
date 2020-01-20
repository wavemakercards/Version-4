<template>
<div >
 <p>
          <v-text-field
            label="Regular"
            v-model="MyTitle"
          ></v-text-field>
     <v-btn class="primary" @click="NewProj">Create a New Project</v-btn>
 </p>
 </div>
</template>

<script>
export default {
    data(){
        return{
            MyTitle : 'New'
        }
    },
    methods:{
        NewProj(){
            let n={}
         n = {}
         n.id = 1
         n.uuid = this.$root.uuid.v1()
         n.title = this.MyTitle
         n.lastupdated = Date.now()
         this.$root.ProjectState.ProjectInfo = n
         this.$root.SaveProjectData()
        }
    }
}
</script>

<style scoped >

</style>