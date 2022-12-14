import "bootstrap/dist/css/bootstrap.min.css";
import "./styleSheet/custom.scss";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadFile from "./pages/UploadFile";
import NameFile from "./pages/NameFile";
import SignFile from "./pages/SignFile";
import DownloadFile from "./pages/DownloadFile";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./untils/ProtectedRoutes";
import { PdfContextProvider } from "./context/PdfContext";

function App() {
  return (
    <>
      {/* <Flow /> */}
      <Router>
        {/* main section start */}
        <AuthContextProvider>
          <PdfContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/files" element={<Dashboard />} />
                <Route path="/upload" element={<UploadFile />} />
                <Route path="/name" element={<NameFile />} />
                <Route path="/sign" element={<SignFile />} />
                <Route path="/download" element={<DownloadFile />} />
              </Route>
            </Routes>
          </PdfContextProvider>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
