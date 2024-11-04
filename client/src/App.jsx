import { BrowserRouter,Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FileUploadPage from "./pages/FileUploadPage/FileUploadPage";
import FolderUploadPage from "./pages/folderUploadPage/FolderUploadPage";
import { UserContextProvider } from "./contextapi.js/user_context.jsx";
function App() {
  return (
    <UserContextProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fileuploader" element={<FileUploadPage />} />
            <Route path="/folderuploader" element={<FolderUploadPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </UserContextProvider>
  )
}

export default App