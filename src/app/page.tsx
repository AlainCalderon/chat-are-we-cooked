import Image from "next/image";
import homeImg from "../../public/images/1751415713829607.jpg";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-cols-10 mx-14 gap-x-8">
      <div className="col-span-10">
        <span className="text-[170px] font-noto text-left tracking-tight"> CHAT, AM I COOKED?</span>
      </div>

      <div className="col-span-3">
        <Image src={homeImg}  alt="you probly are" />
      </div>

      <div className="col-span-2">
        <span className="font-robot text-[24px]">
          <p className="tracking-tight">
            This place is where you can ask if your cooked or nah breh, Go ahead
            and write that journal entry and we'll see if your fine or have gone
            insane
          </p>
        </span>
        <span className="font-robot text-[24px]">
          <p className="tracking-tight">
            <br />
            Go ahead and sign up below, I promise I won't pry. Talking to
            someone is the first step
          </p>
        </span>
      </div>

      <div className="col-span-2 col-start-4 col-end-5 mt-20">
        <span>
          <nav>
            <ul className="list-none">
              <li className="mb-4">
                {" "}
                <span className="text-[58px] uppercase "><p className="dark:text-gray-500">Navigation</p></span>{" "}
              </li>
              <li>
                {" "}
                <Link href="/log-in">
                  {" "}
                  <span className="text-[28px] lowercase"> Log in</span>
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/sign-up">
                  <span className="text-[28px] lowercase">Sign up </span>
                </Link>{" "}
              </li>
            </ul>
          </nav>
        </span>
      </div>

      {/* closing div */}
    </div>
  );
}
