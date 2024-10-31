import FileUploader from "../../components/fileUploader/FileUploader"
import { Link } from "react-router-dom"
import styles from "./fileUploadPage.module.css"

const FileUploadPage = () => {
  return (
    <div className={styles.homeContainer}>
        <h1>This a page is to upload files</h1>
        <FileUploader />
        <li style={{listStyleType: "none"}}><Link to="/">Home</Link></li>
    </div>
  )
}

export default FileUploadPage;