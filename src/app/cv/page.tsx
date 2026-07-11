import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-3 flex-col justify-center items-center h-screen w-screen">
      <h1>Under Development...</h1>
      <Link
        href={"/"}
        className="py-1 px-4 bg-amber-500 text-white dark:text-black rounded-3xl"
      >
        Homepage
      </Link>
    </div>
  );
}
