import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/option";
import { redirect } from "next/navigation";
import Link from "next/link";

async function ProfilePage() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login?callbackUrl=/profile");
  }
  return (
    <div className="all-pages">
      <h2>Welcome {session?.user?.name}</h2>
      <div className="all-links">
        <Link href={"/"}>home</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/signup"}>Signup</Link>
      </div>
    </div>
  );
}

export default ProfilePage;
