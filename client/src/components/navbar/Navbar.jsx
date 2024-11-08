import styles from './navbar.module.css'
import { UserContext } from "../../contextapi.js/user_context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const { auth,user_role,log_out} = useContext(UserContext);

    const handle_logout = () => { 
        log_out();
        navigate("/");
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.items}>
                <button onClick={() => navigate('/')} className={styles.navbut}>Home</button>
                {auth && <>
                    {(user_role==='ADM' || user_role==='UPL') && 
                        (<button onClick={() => navigate('/folderuploader')} className={styles.navbut}>Upload Folder</button>)}

                    {(user_role==='ADM' || user_role==='VWR') &&
                        (<button onClick={() => navigate('/viewfiles')} className={styles.navbut}>View Files</button>)}
                </>}
            </div>

            <div className={styles.items}>
                {!auth ? (<button onClick={() => navigate('/login')} className={styles.navbut}>Login</button>) :

                (<>
                    <button className={styles.navbut}>Profile</button>
                    <button className={styles.navbut} onClick={handle_logout}>Logout</button>
                </>)}
            </div>
        </div>
    )
}

export default Navbar