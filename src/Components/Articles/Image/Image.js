import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Image.css';
import Photo from '../../../assets/imgs/p1.jpg';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
const Image = () => {
    return (
        <Aux>
            <div className = "baby">
                <Container>
                    <Row>
                        <Col>
                            <div class = "baby-img">
                                <img src = {Photo} alt = ""/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Image;