<template>
  <div class="editorFrame">
    <v-container>
      <v-btn color="primary" @click="showPrefs=!showPrefs" fab fixed bottom right dark small>
        <v-icon>settings</v-icon>
      </v-btn>
      <div v-if="showPrefs">
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="myEl.name" label="File Name" @keyup="trg()"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-right">
            <v-dialog v-model="dialog" persistent max-width="290">
              <template v-slot:activator="{ on }">
                <v-btn color="error" small dark v-on="on">
                  <v-icon left small dense>delete</v-icon>Delete
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                  <v-icon left error>warning</v-icon>Delete this
                </v-card-title>
                <v-card-text>Are you sure</v-card-text>
                <v-card-actions class="justify-space-between">
                  <v-btn color="success darken-1" text @click="dialog = false">No Thanks</v-btn>
                  <v-btn color="error darken-1" text @click="DeleteItem()">DELETE IT</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </div>

      <div v-if="!showPrefs">
        <v-row>
          <button @click="nlp">NLP</button>
          <v-col cols="12" class="manuscriptCSS">
          <tiptap-vuetify v-model="content" :extensions="extensions" :toolbar-attributes="toolbarAttrs"  placeholder="Write something …" @change="SaveMyText"/>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import stopword from 'stopword'
// converts the html to plain text (html cleanup)
import html2text from 'html-to-text'
// stop word clean up (multi Language)
// natural language support
//import nlp from 'compromise'


import {
  // component
  TiptapVuetify,
  // extensions
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image
} from "tiptap-vuetify";

export default {
  components: { TiptapVuetify },
  computed: {
  toolbarAttrs () {
    return this.$vuetify.theme.isDark
      ? { color: 'purple', dark: true }
      : { color: 'primary' ,dark: true  }
  }
},
  props: ["myEl"],
  data() {
    return {
      dialog: false,
      BodyText: "",
      showPrefs: false,
extensions: [
     History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem, // if you need to use a list (BulletList, OrderedList)
      BulletList,
      OrderedList,
      Image,
      [
        Heading,
        {
          // Options that fall into the tiptap's extension
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak // line break on Shift + Ctrl + Enter
    ],
    content: ""
    };
    
  },
   watch: {
    // Watch the content variable for changes
    //      content: function (n, o) { will get n=new and o=old values
     content: function () {
     this.SaveMyText();
    }
    },
mounted(){
   // editor is initialized
          let searchObj = {};
          searchObj.uuid = this.myEl.uuid;
          this.$root.db.FileCards.get(searchObj)
            .then(result => {
              return result;
            })
            .then(data => {
              if (data) {
                this.content = data.body;
              } else {
               //Selected Item not in DB shoule be a No No?");
              }
            });
},
  methods: {
    showImagePrompt(command) {
      const src = prompt("Enter the url of your image here");
      if (src !== null) {
        command({ src });
      }
    },
    nlp(){
            let cleantext = html2text.fromString(this.content)
  

// remove all punctuation
cleantext = cleantext.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");

let arr= stopword.removeStopwords(cleantext.split(' '))
let x = {}
arr.forEach(element => {
  let count = 1;
  if(x[element]){
  x[element] = x[element]+1
  }else{
x[element] = count
  }
});

    },

    SaveMyText() {
      let data = {};
      data.uuid = this.myEl.uuid;
      data.title = this.myEl.name;
      data.hashtags = "LATER";
      data.meta = "LATER";
      data.body = this.content;
      data.lastupdated = Date.now();

      this.$root.db.FileCards.put(data).then(function(updated) {
        if (updated) {
          //Cool updated!");
        } else {
          //Failed Save");
        }
      });
    },
    DeleteItem() {
      this.dialog = false;
      this.$root.DeleteManuscriptItem();
    },
    trg() {
      this.$root.ProjectState.SelectedCard.name = this.myEl.name;
      this.$root.SaveProjectData();
    }
  }
};
</script>

<style >
.tiptap-vuetify-editor__toolbar{
  position:sticky;
  left:0px; right:0px;
  text-align: center;
  top:60px;
  z-index: 1;
}
.tiptap-vuetify-editor__content{
  min-height: 700px;
}


.tiptap-vuetify-editor__content pre{
  width:100%;
  margin:0 auto;
}




.editorFrame{
  max-width: 754px;
  margin-left:2%;
}
</style>