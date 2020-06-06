import React , {Component}from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import "react-datepicker/dist/react-datepicker.css";
import './login.css';
import Photo from '../../../assets/imgs/logo.png';
import Photo2 from '../../../assets/imgs/complain.png';
import {
    Container,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
class Register  extends Component {
    state = {
        startDate: new Date()
    };
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render(){
        return (
            <Aux>
                <div className = "register">
                    <Container>
                        <Row>
                            <Col lg = {12} sm = {12}>
                                <div className = "account">
                                    <div className = "logo text-center" style = {{margin:'0 0 40px'}}>
                                        <img src = {Photo} alt = ""/>
                                    </div>
                                    <Form>
                                        <Form.Group>
                                            <Form.Control size="lg" type="text" placeholder="الجوال" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control size="lg" type="password" placeholder="رقم المرور" />
                                        </Form.Group>
                                        <div className = "inputs">
                                            <div className="form-group form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label" for="exampleCheck1">تذكرني</label>
                                            </div>
                                            <div className = "forgot">
                                                <img src = {Photo2} alt = "" />
                                                <a href = "#">هل نسيت كلمة المرور</a>
                                            </div>
                                        </div>
                                        <div className = "buttons2">
                                            <Button variant="success" className = "login2">دخول</Button>
                                            <Button variant="success" className = "login3">انشاء حساب جديد</Button>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Aux>
        )
    }
}
export default Register;