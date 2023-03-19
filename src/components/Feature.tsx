import React from 'react';
import { Container, Row, Col } from "reactstrap";
import FeatureBox from './FeatureBox';

const Feature = () => {

    const features = [
        { id: 1, img: "/images/9814.jpg", imgWidth: 500, imgHeight: 363, title: "LOREM IPSUM", desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", url: "/" },
        { id: 2, img: "/images/54950.jpg", imgWidth: 500, imgHeight: 500, title: "LOREM IPSUM", desc: "Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.", url: "/" },
        { id: 3, img: "/images/8292849.jpg", imgWidth: 500, imgHeight: 333, title: "LOREM IPSUM", desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", url: "/" },
        { id: 4, img: "/images/2474613.jpg", imgWidth: 500, imgHeight: 333, title: "LOREM IPSUM", desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", url: "/" },
    ];

    return (
        <section className="section" id="feature">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark"><span className="text-warning">Features</span></h3>
                            <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </Col>
                </Row>
                <FeatureBox features={features} />
            </Container>
        </section>
    );
}

export default Feature;