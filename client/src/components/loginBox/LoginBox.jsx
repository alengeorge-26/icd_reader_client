import icd_server from "../../url/icd_server"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './loginbox.module.css'
import { UserContext } from "../../contextapi.js/user_context";
import { useContext } from "react";

const LoginBox = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(null);

  const {setUser} = useContext(UserContext);

  const navigate = useNavigate();

  const loginFunc = async (e) => {
    e.preventDefault();

    try{
      const response = await icd_server.post("/user_api/login/",{
        username,password
        },     
      );
    
      if(response.data.success)
      {
        setUser(username);
        navigate("/folderuploader");
      }
    }catch (error){
      setError(error.response.data.error);
      console.error("Error calling the API:", error);
    }
};

  return (
     
    <div className={styles.loginContainer}>
      <form onSubmit={loginFunc} className={styles.loginForm}>
        <div>
          <label>Username : </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p style={{ color: '#C70039 ' }}>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginBox
