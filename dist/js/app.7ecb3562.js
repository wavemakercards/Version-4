(function(t){function e(e){for(var i,r,c=e[0],l=e[1],s=e[2],u=0,v=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(v.length)v.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("8a23"),o=n.n(i);o.a},1:function(t,e){},1107:function(t,e,n){"use strict";var i=n("190e"),o=n.n(i);o.a},"17ff":function(t,e,n){},"190e":function(t,e,n){},"2fa3":function(t,e,n){},"3f81":function(t,e,n){"use strict";var i=n("17ff"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("45fc"),n("a434"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",["Loading"!==t.ShowSection&&this.$store.state.AppLoaded?t._e():n("Loading"),"Create"===t.ShowSection?n("MainMenu"):t._e(),"Project"===t.ShowSection?n("WaveMaker"):t._e()],1)},a=[],r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"loader"}},[n("p",[t._v("Loading")])])}],l=(n("1107"),n("2877")),s={},d=Object(l["a"])(s,r,c,!1,null,"0d818da0",null),u=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{app:"","clipped-left":""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}},[n("svg",{attrs:{id:"svg6",version:"1.1",viewBox:"0 0 24 24",height:"24",width:"24"}},[n("defs",{attrs:{id:"defs10"}}),n("path",{attrs:{id:"path2",d:"M0 0h24v24H0V0z",fill:"none"}}),n("g",{attrs:{transform:"matrix(0.046875,0,0,0.04604639,-1.951887,-3.0598516)",id:"Layer_x0020_1"}},[n("g",{attrs:{id:"_921457168"}},[n("path",{staticStyle:{fill:"#e0e0e0"},attrs:{id:"path2-8",d:"M 464.632,212.901 337.566,83.292 c -22.014,-22.454 -57.758,-22.454 -79.771,0 l -126.63,129.386 c -7.411,7.559 -7.411,19.563 0,27.122 l 38.359,39.127 25.5,24.232 c 7.628,7.114 19.18,7.114 26.808,0 l 51.219,-48.242 c 14.167,-13.338 35.744,-13.338 49.693,0 l 51.219,48.242 c 7.629,7.114 19.18,7.114 26.809,0 l 25.501,-24.232 38.359,-38.904 c 7.193,-7.337 7.193,-19.563 0,-27.122 z"}}),n("path",{staticStyle:{fill:"#616161"},attrs:{id:"path4",d:"m 58.804,367.853 198.991,202.973 c 22.013,22.452 57.757,22.452 79.771,0 L 536.557,367.853 c 34.437,-35.125 10.244,-45.574 -15.039,-70.029 L 490.35,267.59 c -7.409,-7.336 -19.18,-7.113 -26.808,0 l -51.218,48.242 c -14.169,13.339 -35.744,13.339 -49.694,0 L 311.411,267.59 c -7.575,-7.113 -19.233,-7.113 -26.809,0 l -51.219,48.242 c -14.167,13.339 -35.744,13.339 -49.693,0 L 132.471,267.59 c -7.576,-7.113 -19.233,-7.113 -26.809,0 l -28.77,27.123 c -26.37,24.899 -54.05,36.236 -18.088,73.14 z"}})])])])]),n("span",{staticClass:"title ml-3 mr-5"})],1),n("v-navigation-drawer",{attrs:{app:"",clipped:"","mini-variant":!0,"mini-variant-width":"50"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("MenuComponent")],1)],1),n("v-content",[n("MainComponent")],1)],1)},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list-item",{class:{accent:""===t.MySection},attrs:{link:""},on:{click:function(e){return t.SetSection("")}}},[n("v-list-item-action",[n("v-icon",[t._v("home")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Home")])],1)],1),n("v-divider"),n("v-list-item",{class:{accent:"manuscript"===t.MySection},attrs:{link:""},on:{click:function(e){return t.SetSection("manuscript")}}},[n("v-list-item-action",[n("v-icon",[t._v("import_contacts")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Manuscript")])],1)],1),n("v-divider"),n("v-list-item",{class:{accent:"timeline"===t.MySection},attrs:{link:""},on:{click:function(e){return t.SetSection("timeline")}}},[n("v-list-item-action",[n("v-icon",[t._v("access_time")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Timeline")])],1)],1),n("v-divider"),n("v-list-item",{class:{accent:"snowflake"===t.MySection},attrs:{link:""},on:{click:function(e){return t.SetSection("snowflake")}}},[n("v-list-item-action",[n("v-icon",[t._v("ac_unit")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Snowflake")])],1)],1),n("v-divider"),n("v-list-item",{class:{accent:"database"===t.MySection},attrs:{link:""},on:{click:function(e){return t.SetSection("database")}}},[n("v-list-item-action",[n("v-icon",[t._v("layers")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Database")])],1)],1),n("v-divider"),n("v-list-item",{class:{accent:"mindmap"===t.MySection},attrs:{link:""},on:{click:function(e){return t.SetSection("mindmap")}}},[n("v-list-item-action",[n("v-icon",[t._v("account_tree")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Mind Map")])],1)],1),n("v-divider"),n("v-list-item",{class:{accent:"planningboard"===t.MySection},attrs:{link:""},on:{click:function(e){return t.SetSection("planningboard")}}},[n("v-list-item-action",[n("v-icon",[t._v("view_comfy")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Planning Board")])],1)],1),n("v-divider"),n("v-list-item",{class:{accent:"export"===t.MySection},attrs:{link:""},on:{click:function(e){return t.SetSection("export")}}},[n("v-list-item-action",[n("v-icon",[t._v("access_time")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Export Options")])],1)],1),n("v-divider"),n("v-list-item",{class:{accent:"settings"===t.MySection},attrs:{link:""},on:{click:function(e){return t.SetSection("settings")}}},[n("v-list-item-action",[n("v-icon",[t._v("settings")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("settings")])],1)],1),n("v-divider"),n("v-expand-transition",["settings"===t.MySection?n("div",{attrs:{color:"primary"}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("build")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Tool Settings")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("backup")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Cloud Sync Settings")])],1)],1),n("v-divider")],1):t._e()])],1)},h=[],p={components:{},computed:{MySection:function(){return this.$root.ProjectState.Section}},methods:{SetSection:function(t){this.$root.ProjectState.SelectedCard=null,this.$root.ProjectState.Section===t?this.$root.ProjectState.Section="":this.$root.ProjectState.Section=t,this.$root.SaveProjectData()}}},_=p,S=n("6544"),b=n.n(S),g=n("ce7e"),y=n("0789"),w=n("132d"),k=n("da13"),T=n("1800"),C=n("5d23"),V=Object(l["a"])(_,m,h,!1,null,null,null),j=V.exports;b()(V,{VDivider:g["a"],VExpandTransition:y["a"],VIcon:w["a"],VListItem:k["a"],VListItemAction:T["a"],VListItemContent:C["a"],VListItemTitle:C["c"]});var $=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[""===t.MySection?n("DefaultWelcome"):t._e(),"manuscript"===t.MySection?n("WritingTool"):t._e(),"settings"===t.MySection?n("SettingsTool"):t._e(),"timeline"===t.MySection?n("TimelineTool"):t._e(),"mindmap"===t.MySection?n("MindmapTool"):t._e(),"planningboard"===t.MySection?n("PlanningBoardTool"):t._e(),"export"===t.MySection?n("ExportTool"):t._e(),"database"===t.MySection?n("DatabaseTool"):t._e(),"snowflake"===t.MySection?n("SnowflakeTool"):t._e()],1)},x=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-row",[n("v-col",[n("h1",[t._v("Hello and Welcome ")])])],1)],1)],1)},M=[],I={methods:{}},D=I,E=n("62ad"),O=n("a523"),L=n("0fd9"),A=Object(l["a"])(D,P,M,!1,null,null,null),N=A.exports;b()(A,{VCol:E["a"],VContainer:O["a"],VRow:L["a"]});var B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Settings Tool Selected ")]),n("v-switch",{attrs:{label:"Dark Mode"},on:{change:function(e){return t.darktoggle()}},model:{value:t.toggle,callback:function(e){t.toggle=e},expression:"toggle"}})],1)},F=[],R={data:function(){return{toggle:null}},methods:{darktoggle:function(){var t=!this.$store.state.Interface.darkmode,e={path:["Interface","darkmode"]};e.value=t,this.$store.dispatch("StateChanger",e),this.$vuetify.theme.dark=!this.$vuetify.theme.dark}},beforeMount:function(){this.toggle=this.$store.state.Interface.darkmode}},H=R,W=n("b73d"),J=Object(l["a"])(H,B,F,!1,null,null,null),q=J.exports;b()(J,{VSwitch:W["a"]});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{absolute:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-btn",{attrs:{fab:"",small:"",text:""},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-icon",[t._v("menu")])],1),t._v(" Story "),n("v-list",{attrs:{dense:""}},[n("ManuscriptTree")],1)],1),n("v-btn",{attrs:{fab:"",small:"",text:""},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-icon",[t._v("menu")])],1),n("div",{staticClass:"mainc",class:{inset:t.drawer}},[this.$root.ProjectState.SelectedCard?n("div",[n("v-text-field",{attrs:{label:"File Name"},model:{value:t.MyNodeElementName,callback:function(e){t.MyNodeElementName=e},expression:"MyNodeElementName"}}),"file"===this.$root.ProjectState.SelectedCard.icon?n("TextSettings"):t._e(),"folder"===this.$root.ProjectState.SelectedCard.icon?n("FolderSettings"):t._e(),n("v-row",[n("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[n("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({attrs:{color:"error",small:"",dark:""}},i),[n("v-icon",{attrs:{left:"",small:"",dense:""}},[t._v("delete")]),t._v(" Delete")],1)]}}],null,!1,1808945682),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[n("v-icon",{attrs:{left:"",error:""}},[t._v("warning")]),t._v(" Delete this ")],1),n("v-card-text",[t._v("Are you sure")]),n("v-card-actions",{staticClass:"justify-space-between"},[n("v-btn",{attrs:{color:"success darken-1",text:"",small:""},on:{click:function(e){t.dialog=!1}}},[t._v("No Thanks")]),n("v-btn",{attrs:{color:"error darken-1",text:"",small:""},on:{click:function(e){return t.DeleteItem()}}},[t._v("DELETE IT")])],1)],1)],1)],1)],1)],1):n("div",[t._v(" Empty Manuscript - may well have a bunch o settings here ")])])],1)},U=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"sticky"},[n("v-col",{attrs:{align:"right"}},[n("v-btn",{attrs:{small:"",text:""},on:{click:function(e){return t.AddManuscriptTreeItem("folder")}}},[n("v-icon",[t._v("create_new_folder")])],1),n("v-btn",{attrs:{small:"",text:""},on:{click:function(e){return t.AddManuscriptTreeItem("file")}}},[n("v-icon",[t._v("note_add")])],1)],1)],1),n("ManuscriptTreeItem",{on:{input:t.ChangeDetected},model:{value:t.TreeContents,callback:function(e){t.TreeContents=e},expression:"TreeContents"}})],1)},K=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("draggable",t._b({attrs:{tag:"div",list:t.list,value:t.value},on:{input:t.emitter}},"draggable",t.dragOptions,!1),t._l(t.realValue,(function(e,i){return n("div",{key:e.uuid},[n("v-list-item",{class:t.TagMe(e),attrs:{link:""}},["folder"!==e.icon||e.open?t._e():n("v-list-item-action",{on:{click:function(t){e.open=!e.open}}},[n("v-icon",[t._v("folder")])],1),"folder"===e.icon&&e.open?n("v-list-item-action",{on:{click:function(t){e.open=!e.open}}},[n("v-icon",[t._v("folder_open")])],1):t._e(),"file"===e.icon?n("v-list-item-action",[n("v-icon",[t._v("notes")])],1):t._e(),n("v-list-item-content",{on:{click:function(n){return t.itemclick(e,i)}}},[n("v-list-item-title",[t._v(" "+t._s(e.name))])],1),e.hidden?n("v-list-item-action",[n("v-icon",[t._v("check_box")])],1):t._e()],1),e.open?n("div",[n("ManuscriptTreeItem",{staticClass:"subfolder",attrs:{list:e.elements}})],1):t._e()],1)})),0)},X=[],Y=n("310e"),Z=n.n(Y),tt={name:"ManuscriptTreeItem",methods:{emitter:function(t){console.log("Emitting",t),this.$emit("input",t)},itemclick:function(t,e){t.index=e,this.$root.ProjectState.SelectedCard=t,this.$root.SaveProjectData()},TagMe:function(t){var e="";return this.$root.ProjectState.SelectedCard&&t.uuid===this.$root.ProjectState.SelectedCard.uuid&&(e="primary"),e}},components:{draggable:Z.a},data:function(){return{drag:null}},computed:{dragOptions:function(){return{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}},isSelected:function(){return this.$root.ProjectState.SelectedCard},realValue:function(){return this.value?this.value:this.list}},props:{value:{required:!1,type:Array,default:null},list:{required:!1,type:Array,default:null}}},et=tt,nt=(n("d3f4"),Object(l["a"])(et,Q,X,!1,null,"74e43798",null)),it=nt.exports;b()(nt,{VIcon:w["a"],VListItem:k["a"],VListItemAction:T["a"],VListItemContent:C["a"],VListItemTitle:C["c"]});var ot={components:{ManuscriptTreeItem:it},computed:{TreeContents:{get:function(){return this.$root.ProjectState.Manuscript.elements},set:function(t){this.$root.ProjectState.Manuscript.elements=t,this.$root.SaveProjectData()}}},methods:{ChangeDetected:function(t){console.log("payload",t),this.TreeContents=t},AddManuscriptTreeItem:function(t){var e=this.$root.uuid.v1(),n={uuid:e,icon:t,name:"New "+t};if("folder"===t&&(n.open=!0,n.elements=[]),this.$root.ProjectState.SelectedCard)if("folder"===this.$root.ProjectState.SelectedCard.icon)this.$root.ProjectState.SelectedCard.open=!0,this.$root.ProjectState.SelectedCard.elements.push(n);else{var i=this.$root.FindNodeByID(this.$root.ProjectState.SelectedCard.uuid,this.$root.ProjectState.Manuscript);i.parentObj.elements.splice(i.index+1,0,n)}else this.$root.ProjectState.Manuscript.elements.push(n);this.$root.SaveProjectData()}},beforeMount:function(){}},at=ot,rt=(n("f682"),n("8336")),ct=Object(l["a"])(at,G,K,!1,null,"1637b3b0",null),lt=ct.exports;b()(ct,{VBtn:rt["a"],VCol:E["a"],VIcon:w["a"],VRow:L["a"]});var st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[t._v(" folder stuff ")])],1)],1)},dt=[],ut={},vt=ut,ft=Object(l["a"])(vt,st,dt,!1,null,null,null),mt=ft.exports;b()(ft,{VCol:E["a"],VRow:L["a"]});var ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TextEditor",{key:this.$root.ProjectState.SelectedCard.uuid,attrs:{myEl:this.$root.ProjectState.SelectedCard}}),n("v-container",[n("v-row",[n("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[n("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-btn",t._g({attrs:{color:"error",small:"",dark:""}},i),[n("v-icon",{attrs:{left:"",small:"",dense:""}},[t._v("delete")]),t._v(" Delete")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[n("v-icon",{attrs:{left:"",error:""}},[t._v("warning")]),t._v(" Delete this ")],1),n("v-card-text",[t._v("Are you sure")]),n("v-card-actions",{staticClass:"justify-space-between"},[n("v-btn",{attrs:{color:"success darken-1",text:"",small:""},on:{click:function(e){t.dialog=!1}}},[t._v("No Thanks")]),n("v-btn",{attrs:{color:"error darken-1",text:"",small:""},on:{click:function(e){return t.DeleteItem()}}},[t._v("DELETE IT")])],1)],1)],1)],1)],1)],1)],1)},pt=[],_t=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editorFrame"},[n("v-container",[n("v-btn",{attrs:{color:"primary",fab:"",fixed:"",right:"",dark:"",small:""},on:{click:function(e){t.showPrefs=!t.showPrefs}}},[n("v-icon",[t._v("settings")])],1),t.showPrefs?n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h1",[t._v("Settings")]),n("p",[t._v("Plans here are for a couple of options such as")]),n("ol",[n("li",[t._v("Hide from 'render'")]),n("li",[t._v("Apply specific styles (css inline for this block?)")]),n("li",[t._v("Delete the node")])])])],1)],1):t._e(),t.showPrefs?t._e():n("div",[n("v-row",[n("v-col",{staticClass:"manuscriptCSS",attrs:{cols:"12"}},[n("tiptap-vuetify",{attrs:{extensions:t.extensions2,"toolbar-attributes":t.toolbarAttrs,placeholder:"Write something …"},on:{change:t.SaveMyText},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)],1)],1)],1)}),St=[],bt=(n("4160"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("06a1")),gt=n.n(bt),yt=n("c2d5"),wt=n.n(yt),kt=n("3f38"),Tt={components:{TiptapVuetify:kt["q"]},computed:{toolbarAttrs:function(){return this.$vuetify.theme.isDark?{color:"purple",dark:!0}:{color:"primary",dark:!0}}},props:["myEl"],data:function(){return{dialog:!1,BodyText:"",showPrefs:!1,extensions:[kt["h"],kt["a"],kt["l"],kt["s"],kt["p"],kt["k"],kt["m"],kt["c"],kt["n"],kt["j"],[kt["g"],{options:{levels:[1,2,3]}}],kt["b"],kt["l"],kt["d"],kt["e"],kt["i"],kt["o"],kt["f"]],content:"",extensions2:[kt["b"],kt["k"],kt["o"],[kt["g"],{options:{levels:[1,2]}}],kt["j"]]}},watch:{content:function(){this.SaveMyText()}},mounted:function(){var t=this,e={};e.uuid=this.myEl.uuid,this.$root.db.FileCards.get(e).then((function(t){return t})).then((function(e){e&&(t.content=e.body)}))},methods:{showImagePrompt:function(t){var e=prompt("Enter the url of your image here");null!==e&&t({src:e})},nlp:function(){var t=wt.a.fromString(this.content);t=t.replace(/[^\w\s]|_/g,"").replace(/\s+/g," ");var e=gt.a.removeStopwords(t.split(" ")),n={};e.forEach((function(t){var e=1;n[t]?n[t]=n[t]+1:n[t]=e}))},SaveMyText:function(){var t={};t.uuid=this.myEl.uuid,t.title=this.myEl.name,t.hashtags="LATER",t.meta="LATER",t.body=this.content,t.lastupdated=Date.now(),this.$root.db.FileCards.put(t).then((function(t){}))}}},Ct=Tt,Vt=(n("e695"),Object(l["a"])(Ct,_t,St,!1,null,null,null)),jt=Vt.exports;b()(Vt,{VBtn:rt["a"],VCol:E["a"],VContainer:O["a"],VIcon:w["a"],VRow:L["a"]});var $t={components:{TextEditor:jt},data:function(){return{dialog:!1}},computed:{myEl:function(){return this.$root.ProjectState.SelectedCard}},methods:{DeleteItem:function(){this.dialog=!1,this.$root.DeleteManuscriptItem()},trg:function(){this.$root.ProjectState.SelectedCard.name=this.myEl.name,this.$root.SaveProjectData()}}},xt=$t,Pt=n("b0af"),Mt=n("99d9"),It=n("169a"),Dt=Object(l["a"])(xt,ht,pt,!1,null,null,null),Et=Dt.exports;b()(Dt,{VBtn:rt["a"],VCard:Pt["a"],VCardActions:Mt["a"],VCardText:Mt["b"],VCardTitle:Mt["c"],VCol:E["a"],VContainer:O["a"],VDialog:It["a"],VIcon:w["a"],VRow:L["a"]});var Ot={components:{FolderSettings:mt,TextSettings:Et,ManuscriptTree:lt},data:function(){return{drawer:null,dialog:!1}},methods:{DeleteItem:function(){this.dialog=!1,this.$root.DeleteManuscriptItem()}}},Lt=Ot,At=(n("3f81"),n("8860")),Nt=n("f774"),Bt=n("8654"),Ft=Object(l["a"])(Lt,z,U,!1,null,"59500d32",null),Rt=Ft.exports;b()(Ft,{VBtn:rt["a"],VCard:Pt["a"],VCardActions:Mt["a"],VCardText:Mt["b"],VCardTitle:Mt["c"],VCol:E["a"],VDialog:It["a"],VIcon:w["a"],VList:At["a"],VNavigationDrawer:Nt["a"],VRow:L["a"],VTextField:Bt["a"]});var Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(this.$root.ProjectState.Section)+" Tool")]),t.SelectedTimeline?t._e():n("div",[n("v-container",[t.tooldata.length>0?n("v-row",t._l(t.tooldata,(function(e,i){return n("v-col",{key:i,attrs:{"md-3":""}},[n("v-card",{attrs:{height:"100%"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[""===e.title?n("span",[t._v("No Title")]):t._e(),t._v(" "+t._s(e.title)+" ")])],1)],1),n("v-card-actions",[n("v-btn",{attrs:{primary:""},on:{click:function(n){return t.ChooseTimeline(e)}}},[t._v("Select")])],1)],1)],1)})),1):t._e(),n("v-btn",{staticClass:"accent",attrs:{fixed:"",fab:"",bottom:"",right:""},nativeOn:{click:function(e){return t.AddNewTool(e)}}},[n("v-icon",[t._v("add")])],1)],1)],1),t.SelectedTimeline?n("div",[n("v-container",[n("v-btn",{attrs:{color:"primary",fab:"",fixed:"",right:"",dark:"",small:""},on:{click:function(e){t.SelectedTimeline=null}}},[n("v-icon",[t._v("cancel")])],1)],1)],1):t._e()])},Wt=[],Jt={data:function(){return{tooldata:[],SelectedTimeline:null,timelineEvents:[]}},methods:{AddNewTool:function(){var t=this.$root.uuid.v1(),e={};e.uuid=t,e.title="Title Here",e.lastupdated=Date.now(),this.tooldata.push(e),this.SaveToolData(e)},SaveToolData:function(t){this.$root.db.Timelines.put(t).then((function(t){}))},ChooseTimeline:function(t){this.SelectedTimeline=t,this.timelineEvents=JSON.parse(this.SelectedTimeline.data),this.SelectedTimeline.data||(this.timelineEvents=[])}},beforeMount:function(){var t=this;this.$root.ProjectState.timeline||(this.$root.ProjectState.timeline={});var e=this.$root.db.Timelines.toArray();e.then((function(e){t.tooldata=e}))}},qt=Jt,zt=Object(l["a"])(qt,Ht,Wt,!1,null,null,null),Ut=zt.exports;b()(zt,{VBtn:rt["a"],VCard:Pt["a"],VCardActions:Mt["a"],VCol:E["a"],VContainer:O["a"],VIcon:w["a"],VListItem:k["a"],VListItemContent:C["a"],VListItemTitle:C["c"],VRow:L["a"]});var Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(this.$root.ProjectState.Section)+" Tool")]),n("v-container",[t.tooldata.length>0?n("v-row",t._l(t.tooldata,(function(e,i){return n("v-col",{key:i,attrs:{"md-3":""}},[n("v-card",{attrs:{height:"100%"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[""===e.title?n("span",[t._v("No Title")]):t._e(),t._v(" "+t._s(e.title)+" ")])],1)],1),n("v-card-actions",[n("v-btn",{attrs:{accent:""}},[t._v("Read")]),n("v-btn",{attrs:{accent:""}},[t._v("Bookmark")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("favorite")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("face")])],1)],1)],1)],1)})),1):t._e(),n("v-btn",{staticClass:"accent",attrs:{fixed:"",fab:"",bottom:"",right:""},nativeOn:{click:function(e){return t.AddNewTool(e)}}},[n("v-icon",[t._v("add")])],1)],1)],1)},Kt=[],Qt={data:function(){return{tooldata:[]}},methods:{AddNewTool:function(){var t=this.$root.uuid.v1(),e={};e.uuid=t,e.title="Title Here",e.lastupdated=Date.now(),this.tooldata.push(e),this.SaveToolData(e)},SaveToolData:function(t){this.$root.db.Snowflakes.put(t).then((function(t){}))}},beforeMount:function(){var t=this,e=this.$root.db.Snowflakes.toArray();e.then((function(e){t.tooldata=e}))}},Xt=Qt,Yt=n("2fa4"),Zt=Object(l["a"])(Xt,Gt,Kt,!1,null,null,null),te=Zt.exports;b()(Zt,{VBtn:rt["a"],VCard:Pt["a"],VCardActions:Mt["a"],VCol:E["a"],VContainer:O["a"],VIcon:w["a"],VListItem:k["a"],VListItemContent:C["a"],VListItemTitle:C["c"],VRow:L["a"],VSpacer:Yt["a"]});var ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(this.$root.ProjectState.Section)+" Tool")]),n("v-container",[t.tooldata.length>0?n("v-row",t._l(t.tooldata,(function(e,i){return n("v-col",{key:i,attrs:{"md-3":""}},[n("v-card",{attrs:{height:"100%"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[""===e.title?n("span",[t._v("No Title")]):t._e(),t._v(" "+t._s(e.title)+" ")])],1)],1),n("v-card-actions",[n("v-btn",{attrs:{accent:""}},[t._v("Read")]),n("v-btn",{attrs:{accent:""}},[t._v("Bookmark")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("favorite")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("face")])],1)],1)],1)],1)})),1):t._e(),n("v-btn",{staticClass:"accent",attrs:{fixed:"",fab:"",bottom:"",right:""},nativeOn:{click:function(e){return t.AddNewTool(e)}}},[n("v-icon",[t._v("add")])],1)],1)],1)},ne=[],ie={data:function(){return{tooldata:[]}},methods:{AddNewTool:function(){var t=this.$root.uuid.v1(),e={};e.uuid=t,e.title="Title Here",e.lastupdated=Date.now(),this.tooldata.push(e),this.SaveToolData(e)},SaveToolData:function(t){this.$root.db.Mindmaps.put(t).then((function(t){}))}},beforeMount:function(){var t=this,e=this.$root.db.Mindmaps.toArray();e.then((function(e){t.tooldata=e}))}},oe=ie,ae=Object(l["a"])(oe,ee,ne,!1,null,null,null),re=ae.exports;b()(ae,{VBtn:rt["a"],VCard:Pt["a"],VCardActions:Mt["a"],VCol:E["a"],VContainer:O["a"],VIcon:w["a"],VListItem:k["a"],VListItemContent:C["a"],VListItemTitle:C["c"],VRow:L["a"],VSpacer:Yt["a"]});var ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(this.$root.ProjectState.Section)+" Tool")]),n("v-container",[t.tooldata.length>0?n("v-row",t._l(t.tooldata,(function(e,i){return n("v-col",{key:i,attrs:{"md-3":""}},[n("v-card",{attrs:{height:"100%"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[""===e.title?n("span",[t._v("No Title")]):t._e(),t._v(" "+t._s(e.title)+" ")])],1)],1),n("v-card-actions",[n("v-btn",{attrs:{accent:""}},[t._v("Read")]),n("v-btn",{attrs:{accent:""}},[t._v("Bookmark")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("favorite")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("face")])],1)],1)],1)],1)})),1):t._e(),n("v-btn",{staticClass:"accent",attrs:{fixed:"",fab:"",bottom:"",right:""},nativeOn:{click:function(e){return t.AddNewTool(e)}}},[n("v-icon",[t._v("add")])],1)],1)],1)},le=[],se={data:function(){return{tooldata:[]}},methods:{AddNewTool:function(){var t=this.$root.uuid.v1(),e={};e.uuid=t,e.title="Title Here",e.lastupdated=Date.now(),this.tooldata.push(e),this.SaveToolData(e)},SaveToolData:function(t){this.$root.db.PlanningBoards.put(t).then((function(t){}))}},beforeMount:function(){var t=this,e=this.$root.db.PlanningBoards.toArray();e.then((function(e){t.tooldata=e}))}},de=se,ue=Object(l["a"])(de,ce,le,!1,null,null,null),ve=ue.exports;b()(ue,{VBtn:rt["a"],VCard:Pt["a"],VCardActions:Mt["a"],VCol:E["a"],VContainer:O["a"],VIcon:w["a"],VListItem:k["a"],VListItemContent:C["a"],VListItemTitle:C["c"],VRow:L["a"],VSpacer:Yt["a"]});var fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(this.$root.ProjectState.Section)+" Tool")])])},me=[],he={data:function(){return{}},methods:{}},pe=he,_e=Object(l["a"])(pe,fe,me,!1,null,null,null),Se=_e.exports,be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{flat:"","hide-details":"",label:"Search","prepend-inner-icon":"search"}})],1)],1),t.goal===t.items?n("div",t._l(t.ItemList,(function(e,i){return n("div",{key:i},[""===e.title?n("span",[t._v("NO TiTLE")]):t._e(),t._v(" > "+t._s(e.title)+" ")])})),0):n("div",{staticStyle:{width:"100px"}},[n("v-progress-linear",{attrs:{indeterminate:"",color:"yellow darken-2"}})],1),t.database.length>0?n("v-row",t._l(t.database,(function(e,i){return n("v-col",{key:i,staticClass:"col-12 col-sm-6 col-md-4 col-xl-3 "},[n("v-card",{staticClass:"manuscriptCSS",attrs:{height:"100%"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[""===e.title?n("span",[t._v("No Title")]):t._e(),t._v(" "+t._s(e.title)+" ")]),n("v-list-item-subtitle",[t._v(t._s(e.meta))])],1)],1),n("div",{staticStyle:{padding:"10px"}},[n("v-card-text",{staticStyle:{height:"200px","overflow-y":"scroll"},domProps:{innerHTML:t._s(e.body)}})],1),n("v-card-actions",[n("v-btn",{attrs:{accent:""}},[t._v("Read")]),n("v-btn",{attrs:{accent:""}},[t._v("Bookmark")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)})),1):t._e()],1)],1)},ge=[],ye={data:function(){return{database:[],ItemList:[],uuids:[],goal:0,items:0}},methods:{makeBing:function(t){var e=this;t.forEach((function(t){e.goal=e.goal+1;var n={};n.uuid=t.uuid,e.$root.db.FileCards.get(n).then((function(t){return t})).then((function(n){n&&e.ItemList.push(n),t.elements&&e.makeBing(t.elements),e.items=e.items+1}))}))}},beforeMount:function(){var t=this;this.makeBing(this.$root.ProjectState.Manuscript.elements);var e=this.$root.db.FileCards.toArray();e.then((function(e){t.database=e}))}},we=ye,ke=n("8e36"),Te=Object(l["a"])(we,be,ge,!1,null,null,null),Ce=Te.exports;b()(Te,{VBtn:rt["a"],VCard:Pt["a"],VCardActions:Mt["a"],VCardText:Mt["b"],VCol:E["a"],VContainer:O["a"],VIcon:w["a"],VListItem:k["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VProgressLinear:ke["a"],VRow:L["a"],VSpacer:Yt["a"],VTextField:Bt["a"]});var Ve={computed:{MySection:function(){return this.$root.ProjectState.Section}},components:{WritingTool:Rt,SettingsTool:q,TimelineTool:Ut,SnowflakeTool:te,MindmapTool:re,PlanningBoardTool:ve,ExportTool:Se,DatabaseTool:Ce,DefaultWelcome:N}},je=Ve,$e=Object(l["a"])(je,$,x,!1,null,null,null),xe=$e.exports,Pe={components:{MenuComponent:j,MainComponent:xe},data:function(){return{drawer:null,mini:!0}}},Me=Pe,Ie=(n("fc12"),n("40dc")),De=n("5bc1"),Ee=n("a75b"),Oe=Object(l["a"])(Me,v,f,!1,null,"0e5c4245",null),Le=Oe.exports;b()(Oe,{VAppBar:Ie["a"],VAppBarNavIcon:De["a"],VContent:Ee["a"],VList:At["a"],VNavigationDrawer:Nt["a"]});var Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[n("v-text-field",{attrs:{label:"Regular"},model:{value:t.MyTitle,callback:function(e){t.MyTitle=e},expression:"MyTitle"}}),n("v-btn",{staticClass:"primary",on:{click:t.NewProj}},[t._v("Create a New Project")])],1)])},Ne=[],Be={data:function(){return{MyTitle:"New"}},methods:{NewProj:function(){var t={};t={},t.id=1,t.uuid=this.$root.uuid.v1(),t.title=this.MyTitle,t.lastupdated=Date.now(),this.$root.ProjectState.ProjectInfo=t,this.$root.SaveProjectData()}}},Fe=Be,Re=Object(l["a"])(Fe,Ae,Ne,!1,null,"9d5d9f20",null),He=Re.exports;b()(Re,{VBtn:rt["a"],VTextField:Bt["a"]});var We={components:{Loading:u,WaveMaker:Le,MainMenu:He},computed:{ShowSection:function(){var t="Loading";return this.$root.ProjectState.ProjectInfo&&(t=this.$root.ProjectState.ProjectInfo.id?"Project":"Create"),t}},methods:{},mounted:function(){this.$vuetify.theme.dark=this.$store.state.Interface.darkmode}},Je=We,qe=(n("034f"),n("7496")),ze=Object(l["a"])(Je,o,a,!1,null,null,null),Ue=ze.exports;b()(ze,{VApp:qe["a"]});var Ge=n("2f62"),Ke=n("74ce"),Qe=new Ke["a"]("wm4");Qe.version(1).stores({AppState:"id,state,lastupdated",ProjectState:"id,state,lastupdated",FileCards:"uuid,title,hashtags,body,meta,lastupdated",PlanningBoards:"uuid,title,data,lastupdated",Snowflakes:"uuid,title,data,lastupdated",Timelines:"uuid,title,data,lastupdated",Mindmaps:"uuid,title,data,lastupdated"});var Xe=Qe;i["a"].use(Ge["a"]);var Ye=new Ge["a"].Store({state:{lastUpdate:null,AppLoaded:!1,Interface:{darkmode:!0}},mutations:{initialiseStore:function(t){var e=this;Xe.AppState.get({id:1}).then((function(t){return t})).then((function(n){n&&e.replaceState(Object.assign(t,JSON.parse(n.state))),t.AppLoaded=!0}))},StateChanger:function(t,e){if(e.path.length<1)return!1;var n=t,i=e.path;i.forEach((function(t,o){o===i.length-1?n[t]=e.value:n=n[t]}))}},actions:{initialiseStore:function(t){var e=t.commit;e("initialiseStore")},StateChanger:function(t,e){var n=t.commit;n("StateChanger",e)}}});Ye.subscribe((function(t,e){e.AppLoaded&&Xe.AppState.put({id:1,state:JSON.stringify(e)}).then((function(t){}))}));var Ze=Ye,tn=n("9483");Object(tn["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var en=n("f309");i["a"].use(en["a"]);var nn=new en["a"]({lang:{current:"en"}}),on=(n("d1e78"),n("f029"));n("b404");i["a"].config.productionTip=!1,i["a"].use(kt["r"],{vuetify:nn}),new i["a"]({store:Ze,vuetify:nn,data:function(){return{db:Xe,uuid:on["a"],ProjectState:{ProjectInfo:null,Manuscript:{elements:[]},SelectedCard:"",Section:""}}},methods:{FindNodeByID:function(t,e){var n=this,i=!1,o=e.elements;return o.some((function(o,a){if(o.uuid===t)return i={},i.parentObj=e,i.index=a,!0;o.elements&&!i&&(i=n.$root.FindNodeByID(t,o))})),i},DeleteManuscriptItem:function(){var t=this.$root.FindNodeByID(this.$root.ProjectState.SelectedCard.uuid,this.$root.ProjectState.Manuscript);t.parentObj===this.$root.ProjectState.Manuscript?(this.$root.ProjectState.SelectedCard=null,t.parentObj.splice(t.index,1)):(this.$root.ProjectState.SelectedCard=t.parentObj,t.parentObj.elements.splice(t.index,1)),this.$root.SaveProjectData()},SaveProjectData:function(){console.log("SaveProjectData");var t={id:1,state:JSON.stringify(this.$root.ProjectState),lastupdated:Date.now()};this.$root.db.ProjectState.put(t).then((function(t){}))}},beforeMount:function(){var t=this;this.$store.commit("initialiseStore"),this.$root.db.ProjectState.get({id:1}).then((function(t){return t})).then((function(e){e?t.$root.ProjectState=JSON.parse(e.state):t.$root.ProjectState.ProjectInfo={}}))},render:function(t){return t(Ue)}}).$mount("#app")},"8a23":function(t,e,n){},"94bd":function(t,e,n){},9983:function(t,e,n){},bdd2:function(t,e,n){},d3f4:function(t,e,n){"use strict";var i=n("9983"),o=n.n(i);o.a},e695:function(t,e,n){"use strict";var i=n("2fa3"),o=n.n(i);o.a},f682:function(t,e,n){"use strict";var i=n("94bd"),o=n.n(i);o.a},fc12:function(t,e,n){"use strict";var i=n("bdd2"),o=n.n(i);o.a}});
//# sourceMappingURL=app.7ecb3562.js.map