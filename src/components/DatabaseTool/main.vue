<template>
  <div>
    <h1>{{this.$root.liveData.Section}} Tool</h1>
    <v-container>
      <v-row v-if="database.length >0">
        <v-col md-3 v-for="(item, index) in database" :key="index">
          <v-card height="100%">
            <v-list-item>
                <!--
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              -->
              <v-list-item-content>
                <v-list-item-title class="headline">
                    <span v-if="item.title===''">No Title</span>
                    {{item.title}}
                    </v-list-item-title>
                <v-list-item-subtitle>{{item.meta}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
<!--
            <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>
--><div style="padding:10px">
            <v-card-text v-html="item.body" style="height:200px; overflow-y:scroll;"></v-card-text>
</div>
            <v-card-actions>
              <v-btn  accent>Read</v-btn>
              <v-btn  accent>Bookmark</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      database: []
    };
  },
  methods: {},
  beforeMount() {
    let p = this.$root.db.FileCards.toArray();
    p.then((d)=>{
          console.log(d)
         this.database = d
    })
  
  }
};
</script>