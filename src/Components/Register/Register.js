import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar2/Navbar';
import Links from './Links/Links';
import NewAccount from './NewAccount/NewAccount'
import Footer from '../Layouts/Footer/Footer';
const Register = () => {
    return (
        <Aux>
            <Navbar />
            <Links />
            <NewAccount />
            <Footer />
        </Aux>
    )
}
export default Register;