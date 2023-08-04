import Link from "next/link";
export default function Home() {
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
