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
      <div className="text-sm opacity-0 invisible bottom-0 group-hover:visible group-hover:opacity-100  bg-highlight p-1 px-2 rounded-lg transition-all">
        {name}
      </div>
    </div>
  );
}
