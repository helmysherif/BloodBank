import React , {Component}from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Pagination.css';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
class Paginations extends Component {
    render(){
        return (
            <Aux>
                <div className = "pagination">
                    <Container>
                        <Row>
                            <Col>
                                <div className = "page text-center">
                                    <a href = "#"><i class="fas fa-angle-right"></i></a>
                                    <a href = "#" className = "active">1</a>
                                    <a href = "#">2</a>
                                    <a href = "#">3</a>
                                    <a href = "#">4</a>
                                    <a href = "#">5</a>
                                    <a href = "#">6</a>
                                    <a href = "#"><i class="fas fa-angle-left"></i></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Aux>
        )
    }
}
export default Paginations;