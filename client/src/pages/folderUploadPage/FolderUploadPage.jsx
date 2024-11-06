import FolderUploader from "../../components/folderUploader/FolderUploader"
import { Link } from "react-router-dom"
import styles from "./folderuploadpage.module.css"
import { UserContext } from "../../contextapi.js/user_context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const FolderUploadPage = () => {
  const {log_out} = useContext(UserContext);
  const navigate = useNavigate();

  const handle_logout = () => { 
    log_out();
    navigate("/");
  }

  return (
    <div className={styles.homeContainer}>
        <h1>This a page is to upload folder</h1>
        <FolderUploader />
        <li style={{listStyleType: "none"}}><Link to="/">Home</Link></li>
        <button onClick={handle_logout} className={styles.logout}>Logout</button>
    </div>
  )
}

export default FolderUploadPage;