import { BrowserRouter,Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FileUploadPage from "./pages/fileUploadPage/FileUploadPage";
import FolderUploadPage from "./pages/folderUploadPage/FolderUploadPage";
import { UserContextProvider } from "./contextapi.js/user_context.jsx";
import ProtectedRoute from "./components/utils/protectedRoute/ProtectedRoute.jsx";

function App() {
  return (
    <UserContextProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route element={<ProtectedRoute />}>
              <Route exact path="/fileuploader" element={<FileUploadPage />} />
              <Route exact path="/folderuploader" element={<FolderUploadPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </UserContextProvider>
  )
}

export default App