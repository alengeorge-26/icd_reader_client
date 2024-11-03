import HomePage from '../../pages/HomePage/HomePage';
import FileUploadPage from '../../pages/FileUploadPage/FileUploadPage';

const Protectedroute = () => {

    const x = '';

    return (
        (x!==null? <FileUploadPage/> : <HomePage/>)
    )
}

export default Protectedroute;