<template>
    <div>

      

        <div v-if="this.$store.state.ManuscriptTree.ItemSelected">   
        <TextSettings v-if="this.$store.state.ManuscriptTree.ItemSelected.icon === 'file'" />
        <FolderSettings v-if="this.$store.state.ManuscriptTree.ItemSelected.icon === 'folder'" />
        </div>     
        <div v-else>
          Empty Manuscript - may well have a bunch o settings here
        </div>
    
    
    
    </div>
</template>

<script>
import FolderSettings from "./FolderSettings"
import TextSettings from "./TextSettings"
export default {
    components : {
        FolderSettings,
        TextSettings
    }
}
</script>