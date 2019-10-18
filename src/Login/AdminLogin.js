import React from 'react';
import LoginForm from './LoginForm';

const AdminLogin = () => {
    return (
        <LoginForm link={'/admin/dashboard'} />
    )
}


export default AdminLogin