<template>
  <draggable
    v-bind="dragOptions"
    tag="div"
    :list="list"
    :value="value"
    @input="emitter"
  >
    <div :key="el.id" v-for="(el, index) in realValue" >
      <v-list-item link  :class="TagMe(el)" >
        <v-list-item-action v-if="el.icon==='folder' && !el.open" @click="el.open= !el.open">
            <v-icon>folder</v-icon>
          </v-list-item-action>

           <v-list-item-action v-if="el.icon==='folder' && el.open" @click="el.open= !el.open">
            <v-icon>folder_open</v-icon>
          </v-list-item-action>

          <v-list-item-action v-if="el.icon==='file'" >
            <v-icon>notes</v-icon>
          </v-list-item-action>


          <v-list-item-content @click="ItemClick(el, index)">
            <v-list-item-title> {{ el.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <div v-if="el.open" >
          <ManuscriptTreeItem  :list="el.elements" class="subfolder" />
      </div>
    </div>
  </draggable>
</template>

<style scoped>
.subfolder{
  padding-left:10px;
}
.subfolder:empty{
    padding:5px;
    text-align: left;
    font-size: 0.5rem;
    margin-left:20px;

}
.subfolder:empty::after{
      padding-left:10%;
     content: "empty .... ";
}
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
}
</style>

<script>
import draggable from "vuedraggable";
export default {
  name: "ManuscriptTreeItem",
  methods: {
    emitter(value) {
      // console.log("input", value);
      this.$emit("input", value);
    },
    ItemClick(el, index) {
      console.log("click" , el)
     el.index = index
     this.$emit("SelectedNode", el);
    },
    TagMe(el){
      let response =''
      if(this.$root.ProjectState.SelectedCard){
        if(el.id === this.$root.ProjectState.SelectedCard.id){
        response ='primary'
        }
      }
    return response
    }
  },
  components: {
    draggable
  },
  data() {
    return {
      drag: null
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    isSelected() {
      return this.$root.ProjectState.SelectedCard
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue() {
      return this.value ? this.value : this.list;
    }
  },
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    list: {
      required: false,
      type: Array,
      default: null
    }
  }
};
</script>