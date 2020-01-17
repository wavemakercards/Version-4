<template>
   <div>

       <DefaultWelcome v-if="myStore.MenuOptions.section===''"/>

     <WritingTool v-if="myStore.MenuOptions.section==='manuscript'"/>
    <SettingsTool v-if="myStore.MenuOptions.section==='settings'" />
    <TimelineTool v-if="myStore.MenuOptions.section==='timeline'"  />
    <MindmapTool v-if="myStore.MenuOptions.section==='mindmap'"  />
    <PlanningBoardTool v-if="myStore.MenuOptions.section==='planningboard'"  />
    <ExportTool v-if="myStore.MenuOptions.section==='export'"  />
    <DatabaseTool v-if="myStore.MenuOptions.section==='database'"  />
    <SnowflakeTool v-if="myStore.MenuOptions.section==='snowflake'"  />

 
      
    </div>
</template>

<script>
import DefaultWelcome from './DefaultWelcome/main'
import SettingsTool from './SettingsTool/main'
import WritingTool from './WritingTool/main'
import TimelineTool from './TimelineTool/main'
import SnowflakeTool from './SnowflakeTool/main'
import MindmapTool from './MindmapTool/main'
import PlanningBoardTool from './PlanningBoardTool/main'
import ExportTool from './ExportTool/main'
import DatabaseTool from './DatabaseTool/main'
export default {
  computed : {
    myStore(){
      return this.$store.state;
    }
  },
  components:{
    WritingTool,
    SettingsTool,
    TimelineTool,
    SnowflakeTool,
    MindmapTool,
    PlanningBoardTool,
    ExportTool,
    DatabaseTool,
    DefaultWelcome
  }
}
</script>