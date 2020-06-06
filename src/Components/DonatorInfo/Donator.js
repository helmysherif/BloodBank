import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar/Navbar';
import Links from './Links/Links';
import Donation from './Donation/Donation';
import Footer from '../Layouts/Footer/Footer';
const DonatorInfo = () => {
    return (
        <Aux>
            <Navbar />
            <Links />
            <Donation />
            <Footer />
        </Aux>
    )
}
export default DonatorInfo;