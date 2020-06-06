import React ,{Component}from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Articles.css';
import Photo from '../../../assets/imgs/p1.jpg';
import {
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap';
class Articles extends Component {
    render(){
        return (
            <Aux>
                <div className = "content5">
                    <Container>
                        <Row>
                            <Col lg = {12} sm = {12}>
                                <h3>المقالات</h3>
                                <span className = "border2"></span>
                                <Row>
                                    <Col lg = {4} md = {6} sm = {12}>
                                        <Card style = {{width:"100%"}}>
                                            <Card.Img variant="top" src={Photo} />
                                            <Card.Body>
                                                <Card.Title>طريقة الوقاية من الامراض</Card.Title>
                                                <Card.Text>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تر
                                                </Card.Text>
                                                <div className = "text-center">
                                                    <Button variant="primary">التفاصيل</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg = {4} md = {6} sm = {12}>
                                    <Card style = {{width:"100%"}}>
                                        <Card.Img variant="top" src={Photo} />
                                        <Card.Body>
                                            <Card.Title>طريقة الوقاية من الامراض</Card.Title>
                                            <Card.Text>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تر
                                            </Card.Text>
                                            <div className = "text-center">
                                                <Button variant="primary">التفاصيل</Button>
                                            </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg = {4} md = {6} sm = {12}>
                                    <Card style = {{width:"100%"}}>
                                        <Card.Img variant="top" src={Photo} />
                                        <Card.Body>
                                            <Card.Title>طريقة الوقاية من الامراض</Card.Title>
                                            <Card.Text>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تر
                                            </Card.Text>
                                            <div className = "text-center">
                                                <Button variant="primary">التفاصيل</Button>
                                            </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Aux>
        )
    }
}
export default Articles;