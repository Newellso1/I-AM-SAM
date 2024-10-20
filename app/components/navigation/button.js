export default function NavButton({ navOpen }) {
  const buttonGap = navOpen ? `0.3` : `0.2`;
  return (
    <div className={`flex flex-col gap-[${buttonGap}em] w-fit transition-all`}>
      <div className="w-7 h-1 bg-black rounded-md"></div>
      <div className="w-7 h-1 bg-black rounded-md"></div>
      <div className="w-7 h-1 bg-black rounded-md"></div>
    </div>
  );
}
