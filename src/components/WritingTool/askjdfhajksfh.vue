<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="myEl.name" label="File Name" @blur="trg()"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-right">
          <v-btn color="error">Delete</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
//import db from "@/DexieDB";
export default {
  computed: {
    myEl() {
      return this.$store.state.ManuscriptTree.ItemSelected.el;
    }
  },
  methods: {
    trg() {
      this.$store.commit("triggersave");
    }
  }
};
</script>






<script>
