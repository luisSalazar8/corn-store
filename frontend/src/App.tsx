import "./assets/styles/index.css";
import Banner from "./features/Banner";
import Footer from "./features/Footer";
import Header from "./features/Header";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner";
import { AuthUserProvider } from "./context/authUser/AuthUserProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthUserProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-right" />
        <BrowserRouter>
          <div className="font-script flex flex-col h-screen">
            <Header />
            <Banner />
            <div className="grow">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthUserProvider>
  );
}

export default App;
