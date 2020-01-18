<template>
  <div>
    <v-container>
     
      <v-row>
        <v-col cols="10">
          <v-text-field v-model="myEl.name" label="File Name" @keyup="trg()"></v-text-field>
        </v-col>
        <v-col  cols="2" class="text-center">
          <v-btn color="primary" @click="showPrefs=!showPrefs" fab  dark><v-icon >settings</v-icon></v-btn>
        </v-col>
         
      </v-row>

 <div v-if="showPrefs" >
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
                  <v-btn color="success darken-1" text small @click="dialog = false">No Thanks</v-btn>
                  <v-btn color="error darken-1" text small @click="DeleteItem()">DELETE IT</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </div>


<div v-if="!showPrefs">

      <v-row>
        <v-col cols="12">
          
           <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <v-icon>format_bold</v-icon>
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
           <v-icon>format_italic</v-icon>
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <v-icon>format_strikethrough</v-icon>
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
        <v-icon>format_underline</v-icon>
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
         <v-icon>code</v-icon>
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
         P
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
       <v-icon>format_list_bulleted</v-icon>
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <v-icon>format_list_numbered</v-icon>
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <v-icon>format_quote</v-icon>
        </v-btn>

        <v-btn
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
         <v-icon>code</v-icon>
        </v-btn>

        <v-btn
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          _
        </v-btn>

        <v-btn
          class="menubar__button"
          @click="commands.undo"
        >
          <v-icon>undo</v-icon>
        </v-btn>

        <v-btn
          class="menubar__button"
          @click="commands.redo"
        >
          <v-icon>redo</v-icon>
        </v-btn>

      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
    </div>
    <!--
          <textarea class="editor" v-model="BodyText" placeholder="Write here" @keyup="SaveMyText"></textarea>
          -->
        </v-col>
      </v-row>
        
    </div>
    </v-container>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
    components: {
    EditorContent,
     EditorMenuBar,
  },
  props:["myEl"],
  data() {
    return {
      dialog: false,
      BodyText: "", 
      showPrefs : false,
 editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `,
      }),

    };
  },
  mounted() {
      console.log("mounting editor", this.myEl.uuid);
      let searchObj = {};
      searchObj.uuid = this.myEl.uuid;
      this.$root.db.FileCards.get(searchObj)
        .then(result => {
          return result;
        })
        .then(data => {
          console.log("Loaded ", data);
          if (data) {
            console.log(data);
            this.BodyText = data.body;
          } else {
            this.BodyText = "";
            console.log("Selected Item not in DB shoule be a No No?");
          }
        });
  },
  methods: {
    SaveMyText() {
      let data = {};
      data.uuid = this.myEl.uuid;
      data.title = this.myEl.name;
      data.hashtags = "LATER";
      data.meta = "LATER";
      data.body = this.BodyText;
      data.lastupdated = Date.now();
      console.log("Saving data ", data);
      this.$root.db.FileCards.put(data).then(function(updated) {
        if (updated) {
          console.log("Cool updated!");
        } else {
          // console.log("Failed Save");
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
  },
    beforeDestroy() {
    // Always destroy your editor instance when it's no longer needed
    this.editor.destroy()
  },
};
</script>

<style scoped>
.editor {
  width: 100%;
  padding: 0%;
  min-height: 500px;
  resize: none;
  outline: none;
}
</style>