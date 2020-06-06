import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar2/Navbar';
import Links from './Links/Links';
import Donations from './Donations/Donations';
import Pagination from './Pagination/Pagination';
import Footer from '../Layouts/Footer/Footer';
const DonationOrders = () => {
    return (
        <Aux>
            <Navbar />
            <Links />
            <Donations />
            <Pagination />
            <Footer />
        </Aux>
    )
}
export default DonationOrders;