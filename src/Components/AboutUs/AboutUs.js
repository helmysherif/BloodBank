import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar/Navbar';
import Links from '../AboutUs/Links/Links';
import About from '../AboutUs/About/About';
import Footer from '../Layouts/Footer/Footer';
const Homepage = () => {
    return (
        <Aux>
            <Navbar />
            <Links />
            <About />
            <Footer />
        </Aux>
    )
}
export default Homepage;