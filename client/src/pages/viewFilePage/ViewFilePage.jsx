import Navbar from "../../components/navbar/Navbar"
import styles from './viewfilepage.module.css'

const ViewFilePage = () => {
  
  return (
    <>
      <Navbar />
      <div className={styles.viewfileContainer}>
        <h1>View files</h1>
      </div>
    </>

  )
}

export default ViewFilePage