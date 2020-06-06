import React , {Component}from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './NewAccount.css';
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    FormControl
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
                                    <Form>
                                        <Form.Group>
                                            <Form.Control size="lg" type="text" placeholder="الاسم" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control size="lg" type="email" placeholder="البريد الالكتروني" />
                                        </Form.Group>
                                        <Form.Group>
                                            <DatePicker 
                                                placeholderText = 'تاريخ الميلاد'
                                                customInput = {<FormControl />}
                                                //selected={this.state.startDate}
                                                onChange={this.handleChange} 
                                            />
                                            <a href = "#"><i className="far fa-calendar-alt"></i></a>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control size="lg" type="text" placeholder="فصيلة الدم" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                            <option selected>المحافظة</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                            <option selected>المدينة</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control size="lg" type="text" placeholder="رقم الهاتف" />
                                        </Form.Group>
                                        <Form.Group>
                                            <DatePicker 
                                                placeholderText = 'اخر تاريخ تبرع'
                                                customInput = {<FormControl />}
                                                //selected={this.state.startDate}
                                                onChange={this.handleChange} 
                                            />
                                            <a href = "#"><i className="far fa-calendar-alt"></i></a>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control size="lg" type="password" placeholder="رقم المرور" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control size="lg" type="password" placeholder="تأكيد رقم المرور" />
                                        </Form.Group>
                                        <Button variant="success" className = "login2">انشاء</Button>
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