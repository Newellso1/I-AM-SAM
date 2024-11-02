export default function Loading() {
  return (
    <div className="fade-in w-dvw h-dvh bg-background flex justify-center items-center">
      <div className="flex justify-center items-center size-10 border-4 border-text rounded-full">
        <div className="size-5 border-4 animate-spin border-dashed border-text rounded-full"></div>
      </div>
    </div>
  );
}
