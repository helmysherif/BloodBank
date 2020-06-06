import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar2/Navbar';
import Links from './Links/Links';
import LoginForm from './login/login';
import Footer from '../Layouts/Footer/Footer';
const Login = () => {
    return (
        <Aux>
            <Navbar />
            <Links />
            <LoginForm />
            <Footer />
        </Aux>
    )
}
export default Login;