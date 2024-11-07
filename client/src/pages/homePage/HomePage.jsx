import LoginBox from "../../components/loginBox/LoginBox"
import styles from './homepage.module.css'

const HomePage = () => {
  
  return (
    <div className={styles.homeContainer}>
      <h1>This is a sample home page</h1>
      <LoginBox/>
    </div>
  )
}

export default HomePage