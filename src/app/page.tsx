import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/option";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login?callbackUrl=/");
  }
  return (
    <div className={"all-pages"}>
      <h2>Welcome to Home Page</h2>
      <div className="all-links">
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/signup"}>Signup</Link>
      </div>
    </div>
  );
}
