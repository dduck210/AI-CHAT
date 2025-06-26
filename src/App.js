import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import TestToast from "./components/TestToast";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import UnauthRoute from "./components/UnauthRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Loading>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 p-4 mt-0 bg-gray-500">
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <UnauthRoute>
                    <Login />
                  </UnauthRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <UnauthRoute>
                    <Register />
                  </UnauthRoute>
                }
              />
              <Route path="/test-toast" element={<TestToast />} />
            </Routes>
          </main>
          <Footer />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </Loading>
  );
}
export default App;
