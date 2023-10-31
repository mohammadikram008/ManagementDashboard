import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import VerifyTransaction from './VerifyTransaction'
import ViewAllTransactions from './ViewAllTransactions'
const Index = () => {
    const [transactionstate, setTransactionState] = useState();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

        const fetchProperty = async () => {
            try {
                const response = await axios.get(`http://localhost:3005/api/tasks/getapprovedtransaction`);
                console.log("approd", response.data)
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching property details:', error);
            }
        };

        fetchProperty();
    }, []);
    console.log("length", transactions.length)
    const handleState = (props) => {
        setTransactionState(props);
    }

    return (
        <Fragment>

            <Row className='m-0'>
                <Col md='4'>
                    {/* <Link to="/verifytransactios" className='links'> */}

                    <Button className='btn-login' onClick={() => handleState("verifytransaction")}>
                        Verify Transaction {transactions.length}
                    </Button>
                    {/* <div className='btn-login' onClick={() => handleState("verifytransaction")}>
                        <span >
                            Verify Transaction     {transactions.length}
                        </span>
                    </div> */}
                    {/* </Link> */}
                </Col>
                <Col md='4'>
                    <Button className='btn-login' onClick={() => handleState("veiwalltransactions")}>
                        Veiw All Transactions
                    </Button>
                    {/* <Link to="/verifytransactios" className='links'> */}
                    {/* <div className='btn-login' onClick={() => handleState("veiwalltransactions")}>
                        <span>
                            Veiw All Transactions
                        </span>
                    </div> */}
                    {/* </Link> */}
                </Col>

            </Row>
            <Row className='m-0 mt-5'>
                <Col>
                    {
                        transactionstate && transactionstate === "verifytransaction" ? <VerifyTransaction /> : transactionstate === "veiwalltransactions" ? <ViewAllTransactions /> : ""

                    }
                </Col>
            </Row>


        </Fragment>
    )
}

export default Index