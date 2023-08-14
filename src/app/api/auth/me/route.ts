import { NextResponse, NextRequest } from "next/server";
import { findUnique } from "@/helpers";
import jwt from "jsonwebtoken";

type JwtPayload = {
  email: string;
  id: string;
};
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value as string;
    const decodedToken = jwt.verify(
      token,
      process.env.TOKEN_SECRET!
    ) as JwtPayload;
    const user = findUnique({ _id: decodedToken?.id });
    return NextResponse.json(
      {
        message: "Success",
        user,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Some thing went wrong",
      },
      { status: 500 }
    );
  }
}
