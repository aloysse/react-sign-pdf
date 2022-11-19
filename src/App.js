import "bootstrap/dist/css/bootstrap.min.css";
import "./styleSheet/custom.scss";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadFile from "./pages/UploadFile";
import NameFile from "./pages/NameFile";
import SignFile from "./pages/SignFile";
import DownloadFile from "./pages/DownloadFile";

function App() {
  return (
    <>
      {/* <Flow /> */}
      <Router>
        {/* main section start */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/files" element={<Dashboard />} />
          <Route path="/upload" element={<UploadFile />} />
          <Route path="/name" element={<NameFile />} />
          <Route path="/sign" element={<SignFile />} />
          <Route path="/download" element={<DownloadFile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
