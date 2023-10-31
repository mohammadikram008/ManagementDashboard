import React, { Fragment, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { Link, useNavigate,useLocation } from 'react-router-dom';
// import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('sk_test_51NzDfpBuGdpsayKMf1fdpJdhUH5H5sPEWW7EfyEDUaUrkvA1ICRe0J3MuoISm6tebqlrUapDE35u0xtw1I0Sfoxa00QyjZJIF8');
import axios from 'axios';

const Index = () => {
   const location=useLocation()
   console.log("newlocation",location.state._id)
   const id=location.state._id;
    const [formData, setFormData] = useState({
        amount: '',
        account: '',
        comments: '',
        balance: '',

        // To store the selected payment method
    });

    const [startDate, setStartDate] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDatas = new FormData();
            formDatas.append('amount', formData.amount);
            formDatas.append('account', formData.account);
            formDatas.append('comments', formData.comments);
            formDatas.append('date', startDate);
            formDatas.append('balance', formData.balance);
            formDatas.append('image', selectedFile);
            console.log("formdatas", selectedFile)
            

            // Send the user profile data and selected payment method details to your API here
            // Example: await axios.post('/api/profile', { ...formData, paymentMethodData });
            await axios.post(`http://localhost:3005/api/tasks/addtransaction/${id}/transactions`, formDatas).then((response) => {
                // Handle the API response here

                // Clear the form fields
                setFormData({
                    amount: '',
                    account: '',
                    comments: '',
                    balance: '',
                });

                alert("Tansaction Added Successfully")
            })
                .catch((error) => {
                    // Handle any errors
                    console.error('Error uploading image:', error);
                });

        } catch (error) {
            console.error('Error submitting  form:', error);
        }
    };
    return (
        <Fragment>
            <Container>
                <div className='change-pass-main-div'>
                    <h2>Add Transaction </h2>
                </div>
                <div className='verification-form-div mt-4'>
                    <Form onSubmit={handleSubmit}>
                        <div className='verification-form-div '>


                            <FormGroup>
                                <Label for="amount">Amount</Label>
                                <Input
                                    type="text"
                                    name="amount"
                                    id="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                />
                            </FormGroup>

                            <FormGroup className='mx-2'>
                                <Label for="account"> Account</Label>
                                <Input
                                    type="text"
                                    name="account"
                                    id="account"
                                    value={formData.account}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </div>
                        <FormGroup >
                            <Label for="startDate">Date</Label>
                            <Input
                                type="date"
                                id="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            // onBlur={() => filterTransactions()}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="comments">Comments</Label>
                            <Input
                                type="text"
                                name="comments"
                                id="comments"
                                value={formData.comments}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="balance">Balance</Label>
                            <Input
                                type="text"
                                name="balance"
                                id="balance"
                                value={formData.balance}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="balance">Add slip</Label>
                            <Input
                                type="file" accept="image/*" onChange={handleFileChange}
                            />
                        </FormGroup>

                        <Button className='btn-login' type="submit">
                            Add Transaction
                        </Button>
                    </Form>
                </div>
            </Container>
        </Fragment>
    )
}

export default Index