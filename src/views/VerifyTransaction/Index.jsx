import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import VerifyTransaction from './VerifyTransaction'
import ViewAllTransactions from './ViewAllTransactions'
import Properties from '../explore/propertyhome/Properties';
import Pagination from '../Paginations/PropertiesPagination/Index'
const Index = () => {
    const [transactionstate, setTransactionState] = useState();
    const [transactions, setTransactions] = useState([]);


    const handleState = (props) => {
        setTransactionState(props);
    }
    useEffect(() => {

        const fetchProperty = async () => {
            try {
                const response = await axios.get(`http://localhost:3005/api/tasks/getapprovedtransaction`);
                console.log("approd", response.data)
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching property details:', error);
                // toast.info(`${error}`, { autoClose: 2000 });
            }
        };

        fetchProperty();
    }, []);
    console.log("tra", transactions)

    return (
        <Fragment>
            {/* 
            <div className='change-pass-main-div mb-3'>
                <h2>Verification Transactions </h2>
            </div> */}
            {/* <Properties transactions={transactions} /> */}
            {transactions.length > 0 ?
                <>
                    <Pagination properties={transactions} verify="verify" />
                </>

                : "No Transaction for Approval Yet!"}
            {/* <VerifyTransaction /> */}
            {/* <Col md='4'>
                
                    <Button className='btn-login' onClick={() => handleState("verifytransaction")}>
                        Verify Transaction {transactions.length}
                    </Button>
                    
                </Col> */}
            {/* <Col md='4'>
                    <Button className='btn-login' onClick={() => handleState("veiwalltransactions")}>
                        Veiw All Transactions
                    </Button>
                   
                </Col> */}

        </Fragment>
    )
}

export default Index