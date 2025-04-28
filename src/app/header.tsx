import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

const header = () => {
  return (
    <header className="flex justify-between items-center aspect-auto max-w-6xl mx-auto px-5 lg:pt-10 pt-5 bg-grid-white/[0.1]">
      <Link className="text-3xl font-semibold tracking-tight" href="/">
        WB
      </Link>
      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-4">
          <Link href="/blog">Blog</Link>
        </nav>
        <div title="Toggle Theme">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default header;
