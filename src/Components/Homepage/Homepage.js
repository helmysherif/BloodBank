import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar/Navbar';
import Introduction from './Introduction/Introduction';
import BloodBank from './Bloodbank/Bloodbank';
import Articles from './Articles/Articles';
import Donations from './Donations/Donation';
import Contact from './Contact/Contact';
import Available from './Available/Available';
import Footer from '../Layouts/Footer/Footer';
const Homepage = () => {
    return (
        <Aux>
            <Navbar />
            <Introduction />
            <BloodBank />
            <Articles />
            <Donations />
            <Contact />
            <Available />
            <Footer />
        </Aux>
    )
}
export default Homepage;