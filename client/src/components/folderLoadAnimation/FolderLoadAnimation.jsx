import style from './folderloadanimation.module.css'

const FolderLoadAnimation = () => {
    return (
        <iframe 
            id="loading"
            className={style.loading}
            title="Loading Frame"
            src="https://lottie.host/embed/37f08cd6-645b-4ddf-ad23-8e6c1b3577a7/huIadCvnur.json"
        >
        </iframe>
    )
}

export default FolderLoadAnimation