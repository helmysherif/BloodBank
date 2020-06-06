import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Links.css';
import {
    Container,
    Row,
    Col,
    Breadcrumb
} from 'react-bootstrap';
const Links = () => {
    return (
        <Aux>
            <div className = "links2">
                <Container>
                    <Row>
                        <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#" active>الرئيسية</Breadcrumb.Item>
                            <Breadcrumb.Item href="#" className = "who">
                                من نحن
                            </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Links;