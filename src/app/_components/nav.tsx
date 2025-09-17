import Link from "next/link";
import { isLoggedIn } from "@lib/serverActions";
export default async function Nav() {
  let isUserLogged = await isLoggedIn();

  if (isUserLogged) {
    return (
      <div className="grid grid-cols-2 mx-14  bg-black w-full">
        <nav className="cols-span-8">
          <Link href="/sign-out">Sign out</Link>
          {/* <Link href="/[profile]/edit">Profile</Link> //   current logged in user add conditional rendering */}
        </nav>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2 mx-14  bg-black w-full">
        <nav className="cols-span-8">
          <Link href="/log-in">Log In</Link>
          <Link href="/sign-up">Sign Up</Link>
        </nav>
      </div>
    );
  }
}
