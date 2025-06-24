import "./assets/styles/index.css";
import Banner from "./features/Banner";
import Footer from "./features/Footer";
import Header from "./features/Header";
import Login from "./pages/Login";

function App() {
  return (
    <div className="font-script flex flex-col h-screen">
      <Header />
      <Banner />
      <div className="grow">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;
