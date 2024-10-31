import { BrowserRouter,Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FileUploadPage from "./pages/FileUploadPage/FileUploadPage";
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