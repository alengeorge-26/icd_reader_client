import { useState } from 'react'
import './fileUploader.module.css'
import icd_server from '../../url/icd_server';
const FileUploader = () => {
  const [filename, setFilename] = useState('Please select a file');
  const [file,setFile]=useState();
 
  const handleFileChange = (e) => {
    e.preventDefault();

    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  }

  const uploadFile = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file',file);

    try{
      const res = await icd_server.post('/file_api/upload_file/',formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
      });

      console.log(res.data);
    }catch{
      console.error("Error calling the API");
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