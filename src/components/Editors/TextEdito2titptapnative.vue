<template>
  <div>
       <v-container>
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
  <v-btn color="primary" @click="showPrefs=!showPrefs" fab  fixed bottom right dark small>
            <v-icon>settings</v-icon>
          </v-btn>
      <div v-if="!showPrefs">
        <v-row>
          <v-col cols="12">
            <div class="editor manuscriptCSS">
              <editor-menu-bar  :editor="editor" v-slot="{ commands, isActive }">
                <div class="menubar text-center">
                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bold() }"
                    @click="commands.bold"
                  >
                    <v-icon>format_bold</v-icon>
                  </v-btn>

                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.italic() }"
                    @click="commands.italic"
                  >
                    <v-icon>format_italic</v-icon>
                  </v-btn>
<!--
                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.strike() }"
                    @click="commands.strike"
                  >
                    <v-icon>format_strikethrough</v-icon>
                  </v-btn>

                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.underline() }"
                    @click="commands.underline"
                  >
                    <v-icon>format_underline</v-icon>
                  </v-btn>
-->
                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.code() }"
                    @click="commands.code"
                  >
                    <v-icon>code</v-icon>
                  </v-btn>

                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.paragraph() }"
                    @click="commands.paragraph"
                  >P</v-btn>

                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                    @click="commands.heading({ level: 1 })"
                  >H1</v-btn>

                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                    @click="commands.heading({ level: 2 })"
                  >H2</v-btn>

                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                    @click="commands.heading({ level: 3 })"
                  >H3</v-btn>

                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.bullet_list() }"
                    @click="commands.bullet_list"
                  >
                    <v-icon>format_list_bulleted</v-icon>
                  </v-btn>

                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.ordered_list() }"
                    @click="commands.ordered_list"
                  >
                    <v-icon>format_list_numbered</v-icon>
                  </v-btn>

                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.blockquote() }"
                    @click="commands.blockquote"
                  >
                    <v-icon>format_quote</v-icon>
                  </v-btn>

                  <v-btn text x-small
                    class="menubar__button"
                    :class="{ 'is-active': isActive.code_block() }"
                    @click="commands.code_block"
                  >
                    <v-icon>code</v-icon>
                  </v-btn>

                    <v-btn text x-small class="menubar__button" @click="commands.horizontal_rule">_</v-btn>

                   <v-btn text x-small class="menubar__button" @click="commands.undo">
                    <v-icon>undo</v-icon>
                  </v-btn>

                    <v-btn text x-small  class="menubar__button" @click="commands.redo">
                    <v-icon>redo</v-icon>
                  </v-btn>

                    <v-btn text x-small class="menubar__button" @click="showImagePrompt(commands.image)">
                    <v-icon>add_photo_alternate</v-icon>
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
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
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
  TrailingNode,
  Placeholder,
  Image
} from "tiptap-extensions";

export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  props: ["myEl"],
  data() {
    return {
      dialog: false,
      BodyText: "",
      showPrefs: false,
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
          new TrailingNode({
            node: "paragraph",
            notAfter: ["paragraph"]
          }),
          new Placeholder({
            emptyEditorClass: "is-editor-empty",
            emptyNodeClass: "is-empty",
            emptyNodeText: "Write something …",
            showOnlyWhenEditable: true,
            showOnlyCurrent: true
          }),
          new Image()
        ],
        content: "",
         onInit: () => {
    // editor is initialized
 let searchObj = {};
    searchObj.uuid = this.myEl.uuid;
    this.$root.db.FileCards.get(searchObj)
      .then(result => {
        return result;
      })
      .then(data => {
        if (data) {
          this.editor.setContent(data.body);
        } else {
        // not in DB??
        }
      });

  },
        onUpdate: ({ getHTML }) => {
    // get new content on update
         const newContent = getHTML()
         this.SaveMyText(newContent)
         },
      })
    };
  },

  methods: {
    showImagePrompt(command) {
      const src = prompt("Enter the url of your image here");
      if (src !== null) {
        command({ src });
      }
    },
    SaveMyText(myHtml) {
      let data = {};
      data.uuid = this.myEl.uuid;
      data.title = this.myEl.name;
      data.hashtags = "LATER";
      data.meta = "LATER";
      data.body = myHtml;
      data.lastupdated = Date.now();

      this.$root.db.FileCards.put(data).then(function(updated) {
        if (updated) {
          // Cool updated!");
        } else {
          // Failed Save");
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
    this.editor.destroy();
  }
};
</script>

<style >
.editor > .menubar{
  position:fixed;
  top:20px;
  z-index: 10;
}
@media only screen and (max-width: 1260px) {
.editor > .menubar{
 position:sticky;
   top:60px;
}
.nomobile{
  display: none;
}
}

.editor img{
  max-width: 100%;
  margin:10px;
}
.editor__content {
  width: 100%;
  min-height: 500px;
  resize: none;
  outline: none;
}
.editor__content:focus {
  outline: none;
}
.editor{
    margin:0 auto;
}

.editor p.is-editor-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}
.ProseMirror {
  outline: none;
  padding: 3%;
}


</style>