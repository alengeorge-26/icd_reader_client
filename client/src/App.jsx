import { BrowserRouter,Routes, Route} from "react-router-dom";
import FileUploadPage from "./pages/FileUploadPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fileuploader" element={<FileUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App