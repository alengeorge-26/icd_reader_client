import styles from './homepage.module.css'
import Navbar from "../../components/navbar/Navbar"

const HomePage = () => {
  
  return (
    <>
      <Navbar/>
      <div className={styles.homeContainer}>
        <h1>Home page</h1>
      </div>
    </>
  )
}

export default HomePage