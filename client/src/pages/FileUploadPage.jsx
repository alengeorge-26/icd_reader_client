import FileUploader from "../components/FileUploader/fileUploader"
import { Link } from "react-router-dom"

const FileUploadPage = () => {
  return (
    <>
        <h2>This page is to upload files</h2>
        <FileUploader />
        <li style={{listStyleType: "none"}}><Link to="/">Home</Link></li>
    </>
  )
}

export default FileUploadPage;