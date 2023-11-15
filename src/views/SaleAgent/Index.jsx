import React, { Fragment } from 'react'
import { Col, Row } from 'reactstrap'

import { Link } from 'react-router-dom'
const Index = () => {

    return (
        <Fragment>
            <Row className='m-0'>
                <Col md='4'>
                    <Link to="/agentprofile" className='links'>
                        <div className='card-div'>
                           Agent Profile
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
                {/* <Col md='4'>
                    <Link to="/agentbalancecheck" className='links'>
                        <div className='card-div'>
                            Check Balance
                        </div>
                    </Link>
                </Col> */}
                <Col md='4'>
                    <Link to="/agentsalehistory" className='links'>
                        <div className='card-div'>
                            Sale History
                        </div>
                    </Link>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Index