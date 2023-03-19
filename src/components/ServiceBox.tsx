import React from 'react';
import { Row, Col } from "reactstrap";
import Image from 'next/image';
import Link from 'next/link';

interface ServiceBoxTypes {
    title: string,
    desc: string,
    icon?: string,
}

interface ServiceBoxProps {
    services: ServiceBoxTypes[]
}

const ServiceBox = ({ services }: ServiceBoxProps) => {
    return (
        <>
            {
                services.map((service, key) =>
                    <Col key={key} lg={4} md={6}>
                        <div>
                            <div className="mb-5">
                                <i className={service.icon}></i>
                            </div>
                            <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                            <p className="text-muted mb-4">{service.desc}</p>
                        </div>
                    </Col>
                )
            }
        </>
    );
}

export default ServiceBox;