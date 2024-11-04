import { BrowserRouter,Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FileUploadPage from "./pages/FileUploadPage/FileUploadPage";
import FolderUploadPage from "./pages/folderUploadPage/FolderUploadPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fileuploader" element={<FileUploadPage />} />
          <Route path="/folderuploader" element={<FolderUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App