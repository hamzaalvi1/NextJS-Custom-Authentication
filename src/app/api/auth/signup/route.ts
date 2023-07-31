import { NextResponse, NextRequest } from "next/server";
import { generateUniqueID, writeDatabase, findUnique } from "@/helpers";
import { User } from "@/app/types/user";
import bcryptjs from "bcryptjs";

export const GET = () => {
  return NextResponse.json({ message: "success" }, { status: 200 });
};

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password } = await req.json();
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    if (findUnique(email)) {
      return NextResponse.json(
        { message: "email must be unique" },
        { status: 400 }
      );
    }
    const newUser: User = {
      _id: generateUniqueID(),
      name: name,
      email: email,
      password: hashedPassword,
    };
    writeDatabase(newUser);

    return NextResponse.json(
      { message: "user successfully created" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
};
