import Link from "next/link";
export default function Nav() {
  return (
    <div className="grid grid-cols-2 mx-14  bg-black w-full">

      <nav className="cols-span-8">
        <Link href="/log-in">Log In</Link>
        <Link href="/sign-out">Sign out</Link>
        {/* <Link href="/[profile]/edit">Profile</Link> //   current logged in user add conditional rendering */}
      </nav>
    </div>
  );
}
