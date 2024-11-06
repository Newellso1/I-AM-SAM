import { inter } from "@/app/layout";

export default function Project() {
  return (
    <div
      className={`${inter.className} border-4 h-full border-text rounded-lg flex flex-col m-4 p-2 gap-4 `}
    >
      <h2>Project title</h2>
      <p>Product description</p>
    </div>
  );
}
