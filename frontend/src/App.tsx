import "./assets/styles/index.css";
import Banner from "./features/Banner";
import Footer from "./features/Footer";
import Header from "./features/Header";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-script flex flex-col h-screen">
      <Header />
      <Banner />
      <div className="grow">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
