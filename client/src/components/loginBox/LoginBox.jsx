import icd_server from "../../url/icd_server"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginBox = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(null);

  const navigate = useNavigate();

  const loginFunc = async (e) => {
    e.preventDefault();

    try{
      const response = await icd_server.post("/api/login/",{
        username,password
        },     
      );
    
      if(response.data.success)
        navigate("/fileuploader");
    }catch (error){
      setError('Login Failed')
      console.error("Error calling the API:", error);
    }
};

  return (
    <div>
      <h4>This is Login Box</h4>
      <div>
      <form onSubmit={loginFunc}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  )
}

export default LoginBox
