

<template>
      <v-container>
        <v-row>
          <v-col xs="6" >
    <v-layout wrap >
      <textarea-autosize
  placeholder="Type something here..."
  ref="myTextarea"
  v-model="markDown"
  :min-height="30"
  class="manuscript"
/>
    </v-layout>

          </v-col>

         <v-col xs="6" >
           Preview
            <VueMarkdown :source="markDown" />

          </v-col>
        </v-row>
      </v-container>
 
</template>

<script>
import VueMarkdown from 'vue-markdown' // production
export default {
   components: {
    VueMarkdown
  },
props :{
  msg : String
},
data () {
  return {
    markDown : ""
  }
}
};
</script>
<style >
.manuscript {
  text-align: left;
  margin: 2%;
  padding: 2%;
  min-height: 500px;
  width:100%;
  outline: none;
}
</style>