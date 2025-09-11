import Image from "next/image";
import Link from "next/link";
import noFace from "../../../public/images/login-banner.gif";
import { loginUser } from "@lib/serverActions";
export default function Login() {
  return (
    <>
      <div className="basis-6/10 h-screen place-content-center">
        <Image className="m-auto" src={noFace} alt="No face No case"></Image>
      </div>

      <div className="basis-4/10 bg-black">
        {/* login sign up nav */}
        <ul className="list-disc text-[58px] my-4 ">
          <li className="inline-block mx-8">
            {" "}
            <Link href="/log-in"> Log in </Link>
          </li>
          <li className="inline-block mx-8">
            <Link href="/sign-up">
              {" "}
              <span className="text-neutral-700 hover:text-neutral-300">   Sign Up </span>
            
            </Link>
          </li>
        </ul>

        <div className="flex flex-col mx-6">
          <form action={loginUser} method="post" className="flex flex-row">
            <div className="basis-1/2">
              <label htmlFor="userName" className="text-[18px]  block m-2">
                Username*
              </label>

              <input
                type="text"
                name="userName"
                className=" text-[24px] border-1 border-solid rounded-md p-2 w-9/10"
                required
                placeholder="Enter User name"
              />
            </div>

            <div className="basis-1/2">
              <label htmlFor="password" className="text-[18px] block m-2">
                Password*
              </label>
              <input
                type="text"
                name="password"
                className=" text-[24px] border-1 border-solid rounded-md p-2 w-9/10"
                required
                placeholder="Enter password"
              />
            </div>
          </form>
          <button
            className="text-[24px] p-4 bg-white hover:bg-neutral-300 text-black rounded-md my-6 w-auto"
            type="submit"
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
