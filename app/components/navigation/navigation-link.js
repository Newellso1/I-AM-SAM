import Link from "next/link";
import { usePathname } from "next/navigation";
import { inter } from "@/app/layout";

export default function NavigationLink({ link = "/", page = "page" }) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      className={`uppercase transition-all ${
        isActive ? "text-highlight" : "text-text"
      }`}
    >
      <div className="relative overflow-hidden">
        <div className="translate-y-[0.12em] md:hover:-translate-y-[0.12em] transition-all">
          <div className={`tracking-wider ${inter.className}  font-bold`}>
            {page}
          </div>
          <div
            className={` transition-all h-[0.075em] w-full rounded-md ${
              isActive ? "bg-highlight" : "bg-text"
            }`}
          ></div>
        </div>
      </div>
    </Link>
  );
}
