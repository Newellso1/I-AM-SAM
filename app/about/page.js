import Image from "next/image";
import profilePicture from "@/app/images/profile-picture.png";
import { inter } from "../layout";
import { ImHtmlFive2, ImCss3 } from "react-icons/im";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import Symbol from "../components/about/Symbol";
export default function About() {
  return (
    <div
      className={`${inter.className} w-dvw h-full flex flex-col gap-8 md:gap-20 items-center justify-center p-6 fade-in`}
    >
      <div className="flex flex-col md:flex-row-reverse items-center md:gap-32 gap-8">
        <div className="border-8 border-text size-fit flex-shrink-0 rounded-full p-2 drop-shadow-xl">
          <div className=" border-dashed border-8  size-fit border-text  rounded-full p-2">
            <div>
              <Image
                src={profilePicture}
                width={100}
                height={100}
                alt="profile picture"
                className="rounded-full size-44 md:size-72  shadow-black shadow-sm"
              />
            </div>
          </div>
        </div>
        {/* <div className="hidden md:flex md:w-4 h-full rounded-md bg-text "></div> */}
        <div className=" w-full">
          <h2 className="text-2xl md:text-3xl font-bold">
            From Headstones to HTML
          </h2>
          <p className="text-lg md:text-2xl md:max-w-[20em] md:mt-4">
            After spending 15 years in the memorial masonry industry I've
            decided it's time to switch lanes. I bring with me a keen eye for
            detail and an unhealthy obsession with perfection which I plan on
            applying to everything Web Development. <br /> I am mainly self
            taught but last year successfully completed a twelve week Web Dev
            bootcamp hosted by The CodersGuild, since then I have mainly focused
            on React
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 md:gap-6">
        <h2 className="text-2xl md:text-3xl font-bold">Tech Stack</h2>
        <div className="flex gap-4 md:gap-10 text-5xl md:text-7xl">
          <div className="hover:text-orange-600">
            <Symbol symbol={<ImHtmlFive2 />} name="HTML" />
          </div>
          <div className="hover:text-blue-600">
            <Symbol symbol={<ImCss3 />} name="CSS" />
          </div>
          <div className="hover:text-yellow-600">
            <Symbol symbol={<RiJavascriptLine />} name="Javascript" />
          </div>
          <div className="hover:text-blue-400">
            <Symbol symbol={<FaReact />} name="React" />
          </div>
          <div className="hover:text-teal-600">
            <Symbol symbol={<RiTailwindCssFill />} name="Tailwind" />
          </div>
        </div>
      </div>
    </div>
  );
}
