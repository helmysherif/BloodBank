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
                            <Breadcrumb.Item href="#">الرئيسية</Breadcrumb.Item>
                            <Breadcrumb.Item href="#" className = "who">
                                المقالات 
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="#" active>الوقاية من الامراض</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Links;