import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar2/Navbar';
import Links from '../ContactUs/Links/Links';
import Contact from '../ContactUs/Contact/Contact';
import Footer from '../Layouts/Footer/Footer';
const Homepage = () => {
    return (
        <Aux>
            <Navbar />
            <Links />
            <Contact />
            <Footer />
        </Aux>
    )
}
export default Homepage;