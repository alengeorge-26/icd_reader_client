import { useState } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from './user_context';

export const UserContextProvider = (props) => {
    const [user_id, setUserId] = useState(null);

    const contextValues = {user_id, setUserId};

    return(
        <UserContext.Provider value={contextValues}>
        {props.children}
        </UserContext.Provider>
    );
}

UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};