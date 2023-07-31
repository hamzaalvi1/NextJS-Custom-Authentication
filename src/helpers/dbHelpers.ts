import { User, WhereType } from "@/app/types/user";
import path from "path";
import fs from "fs";

type DB = { users: User[] };
type DatabaseFn = DB | Error;

const currentDir = path.join(process.cwd(), "src/libs");
const dbPath = path.join(currentDir, "db.json");

export const readDatabase = (): DatabaseFn => {
  try {
    const response = fs.readFileSync(dbPath, "utf8");
    const result: DB = JSON.parse(response);
    return result;
  } catch (err) {
    console.log(err);
    return new Error("Error occurred while reading the database.");
  }
};

export const writeDatabase = (updatedData: User): DatabaseFn => {
  try {
    const db = readDatabase();
    if (db instanceof Error) {
      throw db; // Re-throw the error
    }
    const updatedDatabase = JSON.parse(JSON.stringify(db));
    updatedDatabase.users.push(updatedData);
    fs.writeFileSync(dbPath, JSON.stringify(updatedDatabase, null, 2));
    return db;
  } catch (err) {
    console.log(err);
    return new Error("Error occurred while writing to the database.");
  }
};

export const generateUniqueID = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const idLength = 15;
  let randomId: string = "";
  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
};

export const findUnique = (where: WhereType): User | undefined => {
  const db = readDatabase();
  const updatedDatabase = JSON.parse(JSON.stringify(db));
  if (where.email) {
    return updatedDatabase.users.find(
      (user: User) => user.email == where.email
    );
  } else if (where.name) {
    return updatedDatabase.users.find((user: User) => user.name == where.name);
  } else if (where._id) {
    return updatedDatabase.users.find((user: User) => user._id == where._id);
  }
  return undefined;
};
