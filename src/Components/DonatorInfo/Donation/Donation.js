import React from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import './Donation.css';
import {
    Container,
    Row,
    Col,
    InputGroup,
    FormControl
} from 'react-bootstrap';
const Donation = () => {
    return (
        <Aux>
            <div className = "donation2">
                <Container>
                    <Row>
                        <Col lg = {12} sm = {12}>
                        <div className = "donator">
                            <Row>
                                <Col lg = {6} md = {6} sm = {12}>
                                    <InputGroup size="lg">
                                        <InputGroup.Append>
                                        <InputGroup.Text id="inputGroup-sizing-lg"  >الاسم</InputGroup.Text>
                                        </InputGroup.Append>
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" disabled value = "احمد محمد"/>
                                    </InputGroup>
                                </Col>
                                <Col lg = {6} md = {6} sm = {12}>
                                    <InputGroup size="lg">
                                        <InputGroup.Append>
                                        <InputGroup.Text id="inputGroup-sizing-lg">فصيلة الدم</InputGroup.Text>
                                        </InputGroup.Append>
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
                                        disabled value = "+A"/>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg = {6} md = {6} sm = {12}>
                                    <InputGroup size="lg">
                                        <InputGroup.Append>
                                        <InputGroup.Text id="inputGroup-sizing-lg"  >العمر</InputGroup.Text>
                                        </InputGroup.Append>
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" disabled value = "28 عام"/>
                                    </InputGroup>
                                </Col>
                                <Col lg = {6} md = {6} sm = {12}>
                                    <InputGroup size="lg">
                                        <InputGroup.Append>
                                        <InputGroup.Text id="inputGroup-sizing-lg">عدد الاكياس المطلوبة</InputGroup.Text>
                                        </InputGroup.Append>
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
                                        disabled value = "3 أكياس"/>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg = {6} md = {6} sm = {12}>
                                    <InputGroup size="lg">
                                        <InputGroup.Append>
                                        <InputGroup.Text id="inputGroup-sizing-lg"  >المشفي</InputGroup.Text>
                                        </InputGroup.Append>
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" disabled value = "الخير الدولية"/>
                                    </InputGroup>
                                </Col>
                                <Col lg = {6} md = {6} sm = {12}>
                                    <InputGroup size="lg">
                                        <InputGroup.Append>
                                        <InputGroup.Text id="inputGroup-sizing-lg">رقم الجوال</InputGroup.Text>
                                        </InputGroup.Append>
                                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
                                        disabled value = "0245487878"/>
                                    </InputGroup>
                                </Col>
                            </Row>
                            </div>
                            <InputGroup size="lg">
                                <InputGroup.Append>
                                    <InputGroup.Text id="inputGroup-sizing-lg">عنوان المشفي</InputGroup.Text>
                                </InputGroup.Append>
                                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
                                disabled value = "المنصورة-شارع عبد العزيز بجوار المرور المتفرع من الدولي"/>
                            </InputGroup>
                            <div className = "details text-center">
                                <a href = "#">التفاصيل</a>
                            </div>
                            <div className = "text3">
                                <p>لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق ليتراسيت  البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل ألدوس بايج مايكر والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>
                                <p>لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق ليتراسيت  البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل ألدوس بايج مايكر والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13801.862978863091!2d31.66252085!3d30.138097600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1591444012951!5m2!1sar!2seg" width="100%" height="450" frameborder="0" style={{border:'0',marginTop:'30px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Aux>
    )
}
export default Donation;