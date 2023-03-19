import React from 'react';
import { Container, Row, Col } from "reactstrap";
import ServiceBox from './ServiceBox';

const Service = () => {
    const services = [
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Lorem Ipsum", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    ]

    return (
        <section className="section" id="service">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark"><span className="text-warning">Services</span></h3>
                            <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <ServiceBox services={services} />
                </Row>
            </Container>
        </section>
    );
}

export default Service;