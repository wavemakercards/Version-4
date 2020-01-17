import Dexie from 'dexie';

const db = new Dexie('wm4');
db.version(1).stores({
    AppState: `id,state,lastupdated`,
    FileCards: `uuid,title,hashtags,body,meta,lastupdated`
});

export default db;