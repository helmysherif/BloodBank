import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Donation.css';
import {
    Container,
    Row,
    Col,
    Form
} from 'react-bootstrap';
const Donation = () => {
    return (
        <Aux>
            <div className = "content6">
                <Container>
                    <Row>
                        <Col lg = {12} sm = {12}>
                            <h2>طلبات التبرع</h2>
                            <span className = "border2"></span>
                            <Form>
                                <Row>
                                    <Col lg = {6} sm = {12}>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select">
                                        <option selected>اختر فصيلة الدم</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                    </Col>
                                    <Col lg = {6} sm = {12}>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                            <option selected>اختر المدينة</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <a href = "#"><i class="fas fa-search"></i></a>
                                </Row>
                            </Form>
                            <div className = "data">
                                <div className = "blood-type">
                                    <p>+AB</p>
                                </div>
                                <div className = "patient">
                                    <p className = "name">اسم الحالة:محمد محروس</p>
                                    <p className = "hospital">مستشفي:طوارئ المنصورة</p>
                                    <p className = "city">المدينة:المنصورة</p>
                                </div>
                                <div className = "details">
                                    <a href = "#">التفاصيل</a>
                                </div>
                            </div>
                            <div className = "data">
                                <div className = "blood-type">
                                    <p>+AB</p>
                                </div>
                                <div className = "patient">
                                    <p className = "name">اسم الحالة:محمد محروس</p>
                                    <p className = "hospital">مستشفي:طوارئ المنصورة</p>
                                    <p className = "city">المدينة:المنصورة</p>
                                </div>
                                <div className = "details">
                                    <a href = "#">التفاصيل</a>
                                </div>
                            </div>
                            <div className = "data">
                                <div className = "blood-type">
                                    <p>+AB</p>
                                </div>
                                <div className = "patient">
                                    <p className = "name">اسم الحالة:محمد محروس</p>
                                    <p className = "hospital">مستشفي:طوارئ المنصورة</p>
                                    <p className = "city">المدينة:المنصورة</p>
                                </div>
                                <div className = "details">
                                    <a href = "#">التفاصيل</a>
                                </div>
                            </div>
                            <div className = "data">
                                <div className = "blood-type">
                                    <p>+AB</p>
                                </div>
                                <div className = "patient">
                                    <p className = "name">اسم الحالة:محمد محروس</p>
                                    <p className = "hospital">مستشفي:طوارئ المنصورة</p>
                                    <p className = "city">المدينة:المنصورة</p>
                                </div>
                                <div className = "details">
                                    <a href = "#">التفاصيل</a>
                                </div>
                            </div>
                            <div className = "text-center">
                                <a href = "#" className = "more">المزيد</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Donation;