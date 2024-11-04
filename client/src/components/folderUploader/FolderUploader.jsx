import { useState } from 'react'
import styles from './folderuploader.module.css'
import icd_server from '../../url/icd_server';
import JSZip from 'jszip';
const FolderUploader = () => {
  const [folderFiles, setFolderFiles] = useState([]);
  const [msg, setMsg] = useState('');
  const [pdf_url, setPdf_url] = useState([]);
 
  const handleFolderSelect = (e) => {
    const files = Array.from(e.target.files);
    setFolderFiles(files);
  };

  const handleFolderUpload = async(e) => {
    e.preventDefault();

    const zip = new JSZip();
    folderFiles.forEach((file) => {
      zip.file(file.name, file);
    })

    const blob = await zip.generateAsync({ type: "blob" });

    const formData = new FormData();
    formData.append("folder", blob, "folder.zip");

    try{
      const res = await icd_server.post('/file_api/upload_folder/',formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
      });

      setMsg(res.data.message);
      setPdf_url(res.data.pdf_url);
      console.log(res.data.pdf_url);
    }catch{
      console.error("Error calling the API");
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

      {pdf_url?.map((url,index) => (
        <button key={url} onClick={() => window.open(url)}>{index+1}</button>
      ))}
    </div>
  )
}

export default FolderUploader