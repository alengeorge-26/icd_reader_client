import FolderUploader from "../../components/folderUploader/FolderUploader"
import { Link } from "react-router-dom"
import styles from "./folderuploadpage.module.css"

const FolderUploadPage = () => {
  return (
    <div className={styles.homeContainer}>
        <h1>This a page is to upload folder</h1>
        <FolderUploader />
        <li style={{listStyleType: "none"}}><Link to="/">Home</Link></li>
    </div>
  )
}

export default FolderUploadPage;