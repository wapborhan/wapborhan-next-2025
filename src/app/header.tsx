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
        <button title="Toggle Theme">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-moon"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default header;
