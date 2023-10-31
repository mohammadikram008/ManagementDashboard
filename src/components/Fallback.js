import React, { Fragment } from 'react'
import { FaSpinner } from 'react-icons/fa';
import { Col, Row } from 'reactstrap';
import '../CSS/Style.css'
const Fallback = () => {
    return (
        <Fragment>
            <Row className='m-0'>
                <Col md='4'></Col>
                <Col md="4" className='fallback'>
                    {/* <FaSpinner  /> */}
                    <div className="loader"></div>
                    <h1>Management Dashboard</h1>
                </Col>
                <Col md='4'></Col>
            </Row>
        </Fragment>
    )
}

export default Fallback