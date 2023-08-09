import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { findUnique } from "@/helpers";
import jwt from "jsonwebtoken";
type JwtPayload = {
  email: string;
  id: string;
};
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("access_token")?.value || "";
    console.log(token);
    const decodedToken = jwt.verify(
      token,
      process.env.TOKEN_SECRET!
    ) as JwtPayload;
    const user = findUnique({ _id: decodedToken?.id });
    return NextResponse.json(
      {
        message: "Success",
        data: user,
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
