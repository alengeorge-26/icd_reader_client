import { useState,useContext } from 'react'
import styles from './folderuploader.module.css'
import icd_server from '../../url/icd_server';
import JSZip from 'jszip';
import { UserContext } from '../../contextapi.js/user_context';
import FolderLoadAnimation from '../folderLoadAnimation/FolderLoadAnimation';

const FolderUploader = () => {
  const [folderFiles, setFolderFiles] = useState([]);
  const [folderName, setFolderName] = useState('');
  const [msg, setMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [upload, setUpload] = useState(false);
  const [pdf, setPdf] = useState([]);

  const {user_id} = useContext(UserContext);
 
  const handleFolderSelect = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    setFolderFiles(files);

    if (files.length > 0) {
      const firstFilePath = files[0].webkitRelativePath; 
      const folderPath = firstFilePath.split('/')[0];
      setFolderName(folderPath);
    }
  };

  const handleFolderUpload = async(e) => {
    e.preventDefault();

    setPdf([])
    setUpload(true)
    setSuccess(false)
    setMsg('')

    const zip = new JSZip();
    folderFiles.forEach((file) => {
      zip.file(file.name, file);
    })

    const blob = await zip.generateAsync({ type: "blob" });

    const formData = new FormData();
    formData.append('user',user_id);
    formData.append('folder', blob, folderName);

    try{
      const res = await icd_server.post('/file_api/upload_folder/',formData,{
        headers:{
            'Content-Type':'multipart/form-data',
            'Authorization':'Bearer '+localStorage.getItem('access_token')
        }
      });

      setMsg(res.data.message);
      setPdf(res.data.pdf);
      setSuccess(res.data.success);
      setUpload(false);
    }catch(err){
      setUpload(false);
      alert(err.response.data.messages[0].message);
    }
  }

  return (
    <div className={styles.folderUploaderForm}>

      <div className={styles.folderInput}>
        <label htmlFor="file">Select a folder : </label>
        <input id="file" webkitdirectory="true" multiple type="file" onChange={handleFolderSelect}/>
      </div>

      <button onClick={handleFolderUpload}>Upload</button>

      <span>{msg}</span>

      {upload && !success && <span><FolderLoadAnimation/></span>}

      {pdf?.length > 0 &&  <table className={styles.table}>
          <tr className={styles.tableHeader}>
            <th>File Name</th>
            <th>File Status</th>
          </tr>
          {pdf?.map((file,index) => (
            <tr key={index}>
              <td onClick={() => window.open(file.url)}>{file.name}</td>
              <td>{file.status}</td>
            </tr>
          ))}
        </table>}
    </div>
  )
}

export default FolderUploader