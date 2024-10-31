import Image from "next/image";
import profilePicture from "@/app/images/profile-picture.png";
import { inter } from "../layout";

export default function About() {
  return (
    <div
      className={`${inter.className} w-dvw h-full flex flex-col gap-4 items-center p-6 fade-in`}
    >
      <div className="border-8 border-text  rounded-full p-2">
        <div className=" border-dashed border-8 border-text  rounded-full p-2">
          <div>
            <Image
              src={profilePicture}
              width={100}
              height={100}
              alt="profile picture"
              className="rounded-full size-44"
            />
          </div>
        </div>
      </div>
      <div className="border-2 w-full">
        <h2 className="text-2xl font-bold">From Headstones to HTML</h2>
        <p className="text-lg">
          I have spent 14 years in the memorial masonry industry, where I
          learned to focus on detail and craftsmanship to honor loved ones. My
          passion for technology led me to shift lanes into web development,
          starting with a Coders Guild bootcamp that solidified my basics. Since
          then, I've been diving into React and bringing my love for design and
          tech together in new projects
        </p>
      </div>
    </div>
  );
}
