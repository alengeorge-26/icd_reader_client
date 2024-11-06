import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './user_context';
import icd_server from '../url/icd_server'

export const UserContextProvider = (props) => {
    const five_minutes = 2000;

    const [token, setToken] = useState(()=>localStorage.getItem("access_token"));
    const [refresh, setRefresh] = useState(()=>localStorage.getItem("refresh_token"));
    const [user_id, setUserId] = useState(null);

    const log_out = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setToken(null);
        setRefresh(null);
        setUserId(null);
    }

    const updateToken = async () => {
        console.log("Updating Token "+Date.now());

        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        
        try{
          const response = await icd_server.post("/user_api/api/token/refresh/", {
            refresh: refresh,
          })
    
          if(response.status === 200){
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);
            setToken(response.data.access);
            setRefresh(response.data.refresh);
          }
          else
            log_out();
        }catch{
          alert("There was an error updating the token")
        }
      }

    const contextValues = {
        user_id, setUserId, 
        token, setToken,
        refresh, setRefresh,
        log_out,
        updateToken
    };
    
    useEffect(() => {
        let interval = setInterval(() => {
            if(token !== null && refresh !== null)
                updateToken();
        },five_minutes);
        
        return () => clearInterval(interval);

    }, [token, refresh]);

    return(
        <UserContext.Provider value={contextValues}>
        {props.children}
        </UserContext.Provider>
    );
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};