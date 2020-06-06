import React from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Homepage from '../../Components/Homepage/Homepage';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Articles from '../../Components/Articles/articles';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Register from '../../Components/Register/Register';
import Login from '../../Components/Login/Login';
import DonationOrders from '../../Components/DonationOrders/DonationOrders';
import DonatorInfo from '../../Components/DonatorInfo/Donator';
import {Route} from 'react-router-dom';
const Container = () => {
    return (
        <Aux>
            <Route exact path = "/" component = {Homepage} />
            <Route path = "/About" component = {AboutUs} />
            <Route path = "/Articles" component = {Articles} />
            <Route path = "/Contact" component = {ContactUs} />
            <Route path = "/Register" component = {Register} />
            <Route path = "/Login" component = {Login} />
            <Route path = "/Donations" component = {DonationOrders} />
            <Route path = "/DonatorInfo" component = {DonatorInfo} />
        </Aux>
    )
}
export default Container;