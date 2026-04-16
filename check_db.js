const Database = require('better-sqlite3');
const db = new Database('savazar_leads.db');
const lastLead = db.prepare('SELECT * FROM leads ORDER BY id DESC LIMIT 1').get();
console.log(JSON.stringify(lastLead, null, 2));
db.close();
