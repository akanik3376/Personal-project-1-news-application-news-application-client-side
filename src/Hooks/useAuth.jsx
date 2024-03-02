import React, { useContext } from 'react';
import { AuthContext } from '../Provider/authProvider';

const useAuth = () => {
    const userInfo = useContext(AuthContext)
    // console.log(userInfo)
    return userInfo
};

export default useAuth;