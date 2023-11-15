import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'
import './controlPanel.css'
import { Link } from 'react-router-dom'
const Index = () => {

    return (
        <Fragment>
            <Row className='m-0'>
                <Col md='4'>
                    <Link to="/verifytransactions" className='links'>
                        <div className='card-div'>
                            Verifying Transactions
                        </div>
                    </Link>
                </Col>
                {/* <Col md='4'>
                    <Link to="/allmanager" className='links'>
                        <div className='card-div'>
                            Manage User Access
                        </div>
                    </Link>
                </Col> */}
                <Col md='4'>
                    <Link to="/addmanager" className='links'>
                        <div className='card-div'>
                            Add Managers
                        </div>
                    </Link>
                </Col>
                <Col md='4'>
                    <Link to="/addsaleagent" className='links'>
                        <div className='card-div'>
                            Add Sale Agent
                        </div>
                    </Link>
                </Col>
                <Col md='4 ' className='mt-5'>
                    <Link to="/manageraccessportal" className='links'>
                        <div className='card-div'>
                            Managers Access Portal
                        </div>
                    </Link>
                </Col>
                <Col md='4 ' className='mt-5'>
                    <Link to="/managedatabase" className='links'>
                        <div className='card-div'>
                            Manage Database
                        </div>
                    </Link>
                </Col>
                <Col md='4 ' className='mt-5'>
                    <Link to="/others" className='links'>
                        <div className='card-div'>
                            Others
                        </div>
                    </Link>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Index