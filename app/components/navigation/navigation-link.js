import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavigationLink({ link = "/", page = "page" }) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      className={`uppercase transition-all ${
        isActive ? "text-blue-600" : "text-slate-700"
      }`}
    >
      <div className="relative overflow-hidden">
        <div className="translate-y-[0.12em] md:hover:-translate-y-[0.12em] transition-all">
          <div className=" tracking-wider">{page}</div>
          <div
            className={` transition-all h-[0.075em] w-full rounded-md ${
              isActive ? "bg-blue-600" : "bg-slate-700"
            }`}
          ></div>
        </div>
      </div>
    </Link>
  );
}
