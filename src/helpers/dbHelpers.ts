import path from "path";
import fs from "fs";

type DB = { users: any[] };
type DatabaseFn = DB | Error;

const currentDir = path.join(process.cwd(), "src/libs");
const dbPath = path.join(currentDir, "db.json");

export const readDatabase = (): DatabaseFn => {
  try {
    const response = fs.readFileSync(dbPath, "utf8");
    const result = JSON.parse(response);
    return result;
  } catch (err) {
    console.log(err);
    return new Error("Error occurred while reading the database.");
  }
};

export const writeDatabase = (updatedData?: any): DatabaseFn => {
  try {
    const db = readDatabase();
    return db;
  } catch (err) {
    console.log(err);
    return new Error("Error occurred while writing to the database.");
  }
};
