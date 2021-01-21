import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Feature = () => (
    <section className="saas2 feature booking" id="feaure">
        <Container id="feature">
            <Row>
                <Col md="10" className="offset-md-1">
                    <div className="title">
                        <div className="main-title">
                            <h2>Our services</h2>
                        </div>
                        <div className="sub-title">
                            <p className="sub-title-para">We provides different types of web applications to run your business</p>
                        </div>
                    </div>
                </Col>
                <Col xl="8" md="7">
                    <div className="center-text justify-content-center">
                        <div className="image-container">
                            <img alt="" className="img-fluid advance-feature-img"
                                src="/assets/images/saas2/advance-feature/02.png" />
                        </div>
                    </div>
                </Col>
                <Col xl="4" md="5">
                    <div>
                        <div className="center-content justify-content-start">
                            <img alt="" className="img-fluid" src="/assets/images/saas2/advance-feature/1.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">Sales dashboard</h5>
                                <p className="feature-para">Lorem Ipsum is simply dummy text
                                of the printing and industry.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="center-content justify-content-start">
                            <img alt="" className="img-fluid" src="/assets/images/saas2/advance-feature/2.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">CRM system</h5>
                                <p className="feature-para">Lorem Ipsum is simply dummy text
                                of the printing and industry.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="center-content justify-content-start">
                            <img alt="" className="img-fluid" src="/assets/images/saas2/advance-feature/3.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">Purchasing and inventory app</h5>
                                <p className="feature-para">Lorem Ipsum is simply dummy text
                                of the printing and industry.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="center-content justify-content-start">
                            <img alt="" className="img-fluid" src="/assets/images/saas2/advance-feature/4.png" />
                            <div className="feature-content">
                                <h5 className="feature-head">Kitchen app</h5>
                                <p className="feature-para">Lorem Ipsum is simply dummy text
                                of the printing and industry.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Feature;