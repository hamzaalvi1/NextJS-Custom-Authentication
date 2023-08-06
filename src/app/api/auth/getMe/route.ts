import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { findUnique } from "@/helpers";
import jwt from "jsonwebtoken";
type JwtPayload = {
  email: string;
  id: string;
};
export const GET = () => {
  try {
    const access_token = cookies().get("access_token")?.value || "";
    const decodeToken = jwt.verify(
      access_token,
      process.env.TOKEN_SECRET!
    ) as JwtPayload;
    const user = findUnique({ _id: decodeToken?.id });
    console.log(user, "user");
    return NextResponse.json({
      message: "Success",
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};
