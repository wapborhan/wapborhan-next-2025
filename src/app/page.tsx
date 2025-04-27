import Header from "./header";
import Footer from "./footer";
import Main from "./main";

export default function Home() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-5 lg:pt-20 pt-5 bg-grid-white/[0.1]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
