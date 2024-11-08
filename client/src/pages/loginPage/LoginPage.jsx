import LoginBox from "../../components/loginBox/LoginBox"
import styles from './loginpage.module.css'
import Navbar from "../../components/navbar/Navbar"

const LoginPage = () => {
  
  return (
    <>
      <Navbar/>
      <div className={styles.loginpageContainer}>
        <h1>Login page</h1>
        <LoginBox/>
      </div>
    </>
  )
}

export default LoginPage