import Dexie from 'dexie';

const db = new Dexie('wm4');
db.version(1).stores({
    AppState: `id,state,lastupdated`,
    ProjectInfo: `id,uuid,title,manuscript,lastupdated`,
    FileCards: `uuid,title,hashtags,body,meta,lastupdated`,
    PlanningBoards: `uuid,title,data,lastupdated`,
    Snowflakes: `uuid,title,data,lastupdated`,
    Timelines: `uuid,title,data,lastupdated`,
    Mindmaps: `uuid,title,data,lastupdated`,
});

export default db;