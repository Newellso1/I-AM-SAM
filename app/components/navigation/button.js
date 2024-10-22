export default function NavButton({ navOpen }) {
  return (
    <div
      className={`flex flex-col group ${
        navOpen ? "gap-[0.3em]" : "gap-[0.2em]"
      } w-fit transition-all`}
    >
      <div className="w-7 h-1 bg-slate-700 group-hover:bg-slate-800 transition-all rounded-md"></div>
      <div className="w-7 h-1 bg-slate-700 group-hover:bg-slate-800 transition-all rounded-md"></div>
      <div className="w-7 h-1 bg-slate-700 group-hover:bg-slate-800 transition-all rounded-md"></div>
    </div>
  );
}
