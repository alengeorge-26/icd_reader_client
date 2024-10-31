import LoginBox from "../components/loginBox/LoginBox"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <LoginBox/>
      <li style={{listStyleType: "none"}}><Link to="/fileuploader">File Upload Page</Link></li>
    </div>
  )
}

export default HomePage