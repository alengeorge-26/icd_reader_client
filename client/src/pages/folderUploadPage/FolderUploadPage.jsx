import FolderUploader from "../../components/folderUploader/FolderUploader"
import styles from "./folderuploadpage.module.css"
import Navbar from "../../components/navbar/Navbar";

const FolderUploadPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.homeContainer}>
          <h1>Page to upload folder</h1>
          <FolderUploader />
      </div>
    </>
  )
}

export default FolderUploadPage;