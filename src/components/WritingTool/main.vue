<template>
    <div>

      

        <div v-if="this.$root.ProjectState.SelectedCard"> 
            <!-- the prop means it can be used all over the place, the KEY makes it rerender when the element changes --> 
       <TextSettings v-if="this.$root.ProjectState.SelectedCard.icon === 'file'"/>
        <FolderSettings v-if="this.$root.ProjectState.SelectedCard.icon === 'folder'" />
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

