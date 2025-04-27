import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

const header = () => {
  return (
    <header className="flex justify-between items-center aspect-auto">
      <Link className="text-3xl font-semibold tracking-tight" href="/">
        WB
      </Link>
      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-4">
          <Link href="https://blog.wapborhan.com">Blog</Link>
        </nav>
        <div title="Toggle Theme">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default header;
