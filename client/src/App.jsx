import { BrowserRouter,Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FileUploadPage from "./pages/fileUploadPage/FileUploadPage";
import FolderUploadPage from "./pages/folderUploadPage/FolderUploadPage";
import ViewFilePage from "./pages/viewFilePage/ViewFilePage.jsx";
import { UserContextProvider } from "./contextapi.js/user_context.jsx";
import ProtectedRoute_1 from "./components/utils/protectedRoute/ProtectedRoute_1.jsx";
import ProtectedRoute_2 from "./components/utils/protectedRoute/ProtectedRoute_2.jsx";

function App() {
  return (
    <UserContextProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />}/>

            <Route element={<ProtectedRoute_2 />}>
              <Route exact path="/fileuploader" element={<FileUploadPage />} />
              <Route exact path="/folderuploader" element={<FolderUploadPage />} />
            </Route>

            <Route element={<ProtectedRoute_1 />}>
              <Route exact path="/viewfiles" element={<ViewFilePage />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </>
    </UserContextProvider>
  )
}

export default App