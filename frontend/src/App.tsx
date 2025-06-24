import "./assets/styles/index.css";
import Banner from "./features/Banner";
import Footer from "./features/Footer";
import Header from "./features/Header";

function App() {
  return (
    <div className="font-script flex flex-col h-screen">
      <Header />
      <Banner />
      <div className="grow">content</div>
      <Footer />
    </div>
  );
}

export default App;
