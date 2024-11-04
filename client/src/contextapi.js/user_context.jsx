import { useState } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './user_context';

export const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);

    const contextValues = {user, setUser};

    return(
        <UserContext.Provider value={contextValues}>
        {props.children}
        </UserContext.Provider>
    );
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};