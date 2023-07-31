export type User = {
  readonly _id: string;
  name: string;
  email: string;
  password: string;
};

export type WhereType = { name?: string; email?: string; _id?: string };
