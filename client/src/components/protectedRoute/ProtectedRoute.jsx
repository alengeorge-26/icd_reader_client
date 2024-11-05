import HomePage from '../../pages/HomePage/HomePage';
import FileUploadPage from '../../pages/FileUploadPage/FileUploadPage';

const Protectedroute = () => {

    const token = localStorage.getItem("access_token");

    return (
        (token!==null? <FileUploadPage/> : <HomePage/>)
    )
}

export default Protectedroute;