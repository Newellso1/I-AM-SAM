import { rubik } from "./layout";
import { zenTokyoZoo } from "./layout";
import { caveat } from "./layout";

export default function Home() {
  return (
    <div className="fade-in w-dvw h-full flex flex-col gap-6 justify-center items-center">
      <div className=" md:gap-16">
        <div className="hero flex shadow-lg shadow-text flex-col gap-4 p-10 md:px-15 rounded-lg">
          <h1
            className={`${rubik.className} text-9xl md:text-[11em] select-none  text-body drop-shadow-lg   text-wrap`}
          >
            I
          </h1>
          <h1
            className={`${rubik.className} text-9xl md:text-[11em] select-none  text-body drop-shadow-lg    text-wrap`}
          >
            AM
          </h1>
          <h1
            className={`${rubik.className} text-9xl md:text-[11em] select-none  text-body drop-shadow-lg    text-wrap`}
          >
            SAM
          </h1>
        </div>
        <div className="fade-in place-self-center mt-5">
          <p
            className={`${caveat.className} text-4xl md:text-5xl text-text text-left  `}
          >
            Memorial Mason &
          </p>
          <p
            className={`${caveat.className} text-4xl md:text-5xl text-text text-left`}
          >
            Aspiring Web Developer
          </p>
        </div>
      </div>
    </div>
  );
}
