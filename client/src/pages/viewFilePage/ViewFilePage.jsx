import { UserContext } from "../../contextapi.js/user_context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ViewFilePage = () => {
  const {log_out} = useContext(UserContext);
  const navigate = useNavigate();

  const handle_logout = () => { 
    log_out();
    navigate("/");
  }

  console.log("HELLO")

  return (
    <>
      <h1>This is view page</h1>
      <button onClick={handle_logout} >Logout</button>
    </>

  )
}

export default ViewFilePage