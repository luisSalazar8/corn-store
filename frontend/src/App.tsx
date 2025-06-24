import "./assets/styles/index.css";
import Banner from "./features/Banner";
import Footer from "./features/Footer";
import Header from "./features/Header";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <div className="font-script flex flex-col h-screen">
      <Header />
      <Banner />
      <div className="grow">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
