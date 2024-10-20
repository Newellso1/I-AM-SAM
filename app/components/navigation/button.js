export default function NavButton({ navOpen }) {
  return (
    <div
      className={`flex flex-col ${
        navOpen ? "gap-[0.3em]" : "gap-[0.2em]"
      } w-fit transition-all`}
    >
      <div className="w-7 h-1 bg-black rounded-md"></div>
      <div className="w-7 h-1 bg-black rounded-md"></div>
      <div className="w-7 h-1 bg-black rounded-md"></div>
    </div>
  );
}
