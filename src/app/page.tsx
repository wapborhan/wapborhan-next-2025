import Header from "./header";
import Footer from "./footer";
import Main from "./main";

export default function Home() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto px-5 pt-20">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
