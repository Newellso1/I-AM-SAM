export default function Symbol({
  symbol = "symbol",
  name = "name",
  color = "red-500",
}) {
  return (
    <div className=" relative flex flex-col items-center gap-2 group">
      <button>
        <h1>{symbol}</h1>
      </button>

      <div className="text-sm text-text opacity-0 invisible absolute -bottom-9 group-hover:visible group-hover:opacity-100  border-2 border-text font-bold p-[0.25em] px-2 rounded-lg transition-all select-none">
        {name}
      </div>
    </div>
  );
}
