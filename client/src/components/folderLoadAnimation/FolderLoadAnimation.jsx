import style from './folderloadanimation.module.css'

const FolderLoadAnimation = () => {
    return (
        <iframe 
            id="loading"
            className={style.loading}
            title="Loading Frame"
            src="https://lottie.host/embed/a9046820-0733-440a-9bd1-9e290eca8719/XNmqO8L1rV.json"
        >
        </iframe>
    )
}

export default FolderLoadAnimation