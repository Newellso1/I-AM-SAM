import { Carousel } from "@material-tailwind/react";
import Project from "./project";

export default function CarouselProjects() {
  return (
    <Carousel className="rounded-xl h-[60dvh] overflow-visible">
      <Project />
      <Project />
    </Carousel>
  );
}
