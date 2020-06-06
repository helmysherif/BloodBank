import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Navbar from '../Layouts/Navbar/Navbar';
import Links from '../Articles/Links/Links';
import Image from '../Articles/Image/Image';
import DiseasePrevention from '../Articles/DiseasePrevention/DiseasePrevention';
import Articles from '../Homepage/Articles/Articles';
import Footer from '../Layouts/Footer/Footer';
const Homepage = () => {
    return (
        <Aux>
            <Navbar />
            <Links />
            <Image />
            <DiseasePrevention />
            <Articles />
            <Footer />
        </Aux>
    )
}
export default Homepage;