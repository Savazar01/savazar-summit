import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

const DATA_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DATA_DIR, "savazar_leads.db");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

let _db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH);
    _db.pragma("journal_mode = WAL");
    _db.pragma("foreign_keys = ON");
    initSchema(_db);
  }
  return _db;
}

function initSchema(db: Database.Database) {
  // Existing table
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name  TEXT NOT NULL,
      email      TEXT NOT NULL DEFAULT '',
      whatsapp   TEXT NOT NULL,
      role       TEXT NOT NULL,
      ai_experience INTEGER NOT NULL DEFAULT 1,
      interests  TEXT NOT NULL,
      coupon_code TEXT DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
    );
  `);

  // Migration: Add new columns if they don't exist
  const columns = db.prepare("PRAGMA table_info(leads)").all() as any[];
  const hasColumn = (name: string) => columns.some((c) => c.name === name);

  if (!hasColumn("email")) {
    db.exec("ALTER TABLE leads ADD COLUMN email TEXT DEFAULT ''");
  }
  if (!hasColumn("company_name")) {
    db.exec("ALTER TABLE leads ADD COLUMN company_name TEXT DEFAULT ''");
  }
  if (!hasColumn("proposed_time")) {
    db.exec("ALTER TABLE leads ADD COLUMN proposed_time TEXT DEFAULT ''");
  }
  if (!hasColumn("request_type")) {
    db.exec("ALTER TABLE leads ADD COLUMN request_type TEXT DEFAULT 'workshop'");
  }
  if (!hasColumn("city")) {
    db.exec("ALTER TABLE leads ADD COLUMN city TEXT DEFAULT ''");
  }
  if (!hasColumn("country")) {
    db.exec("ALTER TABLE leads ADD COLUMN country TEXT DEFAULT ''");
  }
  if (!hasColumn("years_experience")) {
    db.exec("ALTER TABLE leads ADD COLUMN years_experience TEXT DEFAULT ''");
  }
  if (!hasColumn("industries")) {
    db.exec("ALTER TABLE leads ADD COLUMN industries TEXT DEFAULT ''");
  }
  if (!hasColumn("tech_skills")) {
    db.exec("ALTER TABLE leads ADD COLUMN tech_skills TEXT DEFAULT ''");
  }
  if (!hasColumn("ai_skills")) {
    db.exec("ALTER TABLE leads ADD COLUMN ai_skills TEXT DEFAULT ''");
  }
  if (!hasColumn("additional_details")) {
    db.exec("ALTER TABLE leads ADD COLUMN additional_details TEXT DEFAULT ''");
  }
  if (!hasColumn("referrer_name")) {
    db.exec("ALTER TABLE leads ADD COLUMN referrer_name TEXT DEFAULT ''");
  }
  if (!hasColumn("referrer_email")) {
    db.exec("ALTER TABLE leads ADD COLUMN referrer_email TEXT DEFAULT ''");
  }
  if (!hasColumn("company_size")) {
    db.exec("ALTER TABLE leads ADD COLUMN company_size TEXT DEFAULT ''");
  }
  if (!hasColumn("turnover")) {
    db.exec("ALTER TABLE leads ADD COLUMN turnover TEXT DEFAULT ''");
  }
  if (!hasColumn("company_location")) {
    db.exec("ALTER TABLE leads ADD COLUMN company_location TEXT DEFAULT ''");
  }
  if (!hasColumn("requirement_description")) {
    db.exec("ALTER TABLE leads ADD COLUMN requirement_description TEXT DEFAULT ''");
  }
  if (!hasColumn("consulting_industry")) {
    db.exec("ALTER TABLE leads ADD COLUMN consulting_industry TEXT DEFAULT ''");
  }
}

export interface Lead {
  id: number;
  full_name: string;
  email: string;
  whatsapp: string;
  role: string;
  ai_experience: number;
  interests: string;
  coupon_code: string;
  company_name?: string;
  proposed_time?: string;
  request_type?: string;
  city?: string;
  country?: string;
  years_experience?: string;
  industries?: string;
  tech_skills?: string;
  ai_skills?: string;
  additional_details?: string;
  referrer_name?: string;
  referrer_email?: string;
  company_size?: string;
  turnover?: string;
  company_location?: string;
  requirement_description?: string;
  consulting_industry?: string;
  created_at: string;
}

export function insertLead(data: Omit<Lead, "id" | "created_at">): Lead {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO leads (
      full_name, 
      email,
      whatsapp, 
      role, 
      ai_experience, 
      interests, 
      coupon_code,
      company_name,
      proposed_time,
      request_type,
      city,
      country,
      years_experience,
      industries,
      tech_skills,
      ai_skills,
      additional_details,
      referrer_name,
      referrer_email,
      company_size,
      turnover,
      company_location,
      requirement_description,
      consulting_industry
    )
    VALUES (
      @full_name, 
      @email,
      @whatsapp, 
      @role, 
      @ai_experience, 
      @interests, 
      @coupon_code,
      @company_name,
      @proposed_time,
      @request_type,
      @city,
      @country,
      @years_experience,
      @industries,
      @tech_skills,
      @ai_skills,
      @additional_details,
      @referrer_name,
      @referrer_email,
      @company_size,
      @turnover,
      @company_location,
      @requirement_description,
      @consulting_industry
    )
  `);
  const result = stmt.run({
    ...data,
    email: data.email || "",
    company_name: data.company_name || "",
    proposed_time: data.proposed_time || "",
    request_type: data.request_type || "workshop",
    city: data.city || "",
    country: data.country || "",
    years_experience: data.years_experience || "",
    industries: data.industries || "",
    tech_skills: data.tech_skills || "",
    ai_skills: data.ai_skills || "",
    additional_details: data.additional_details || "",
    referrer_name: data.referrer_name || "",
    referrer_email: data.referrer_email || "",
    company_size: data.company_size || "",
    turnover: data.turnover || "",
    company_location: data.company_location || "",
    requirement_description: data.requirement_description || "",
    consulting_industry: data.consulting_industry || "",
  });
  const lead = db
    .prepare("SELECT * FROM leads WHERE id = ?")
    .get(result.lastInsertRowid) as Lead;
  return lead;
}

export function getAllLeads(): Lead[] {
  const db = getDb();
  return db
    .prepare("SELECT * FROM leads ORDER BY created_at DESC")
    .all() as Lead[];
}
