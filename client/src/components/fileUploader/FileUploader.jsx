import { useState } from 'react'
import './fileUploader.module.css'
const FileUploader = () => {
  const [filename, setFilename] = useState('Please select a file');
  const [file,setFile]=useState();
 
  const handleFileChange = (e) => {
    e.preventDefault();

    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  }

  const uploadFile = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file',file);

    try{
      //API to be called
    }catch{
      //Exception to be handled
    }
  }

  return (
    <div>
      <h4>This is File Uploader component</h4>
      <div>
        <label htmlFor="file">Select a file : </label>
        <input id="file" type="file" onChange={handleFileChange} placeholder={filename}/>
      </div>
      <button onClick={uploadFile}>Upload</button>
    </div>
  )
}

export default FileUploader