import React, { Fragment, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('sk_test_51NzDfpBuGdpsayKMf1fdpJdhUH5H5sPEWW7EfyEDUaUrkvA1ICRe0J3MuoISm6tebqlrUapDE35u0xtw1I0Sfoxa00QyjZJIF8');
import axios from 'axios';
import { useEffect } from 'react';


const AgentFormSubmission = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        address: '',
        idorpassport: '',
        email: '',
        password: '',
        salecode: '',
        commission:"4"


    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const generateUniqueCode = (length) => {
        const characters = '23456789abcdefghjkmnpqrstuvwxyz'; // Excluded characters: 0, o, L, l, I, i, 1
        const charLength = characters.length;
        let code = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charLength);
            code += characters[randomIndex];
        }
        setFormData({
            ...formData,
            ["salecode"]: code,
        });
        // return code;
    }
    useEffect(() => {
        generateUniqueCode(5);
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("uniqueCode",uniqueCode)
        // setFormData({
        //     ...formData,
        //     ["salecode"]: uniqueCode,
        // });
        console.log("formdata", formData)
        try {
            // Send the user profile data and selected payment method details to your API here
            // Example: await axios.post('/api/profile', { ...formData, paymentMethodData });
            await axios.post('http://localhost:3005/api/tasks/addagentprofiledetail', formData).then((res) => {
                setFormData({
                    firstname: '',
                    lastname: '',
                    address: '',
                    idorpassport: '',
                    email: '',
                    password: '',
                    salecode: ""

                });

                // alert("Manager profile created  successfully")
                toast.info(`${res.data}`, { autoClose: 2000 });
            }).catch((err) => {
                // alert(err)
                toast.info(`${err}`, { autoClose: 2000 });
            })


        } catch (error) {
            console.error('Error submitting profile form:', error);
            toast.info(`${error}`, { autoClose: 2000 });
        }
    };
    return (
        <Fragment>
            <Container>
                <div className='change-pass-main-div'>
                    <h2>Agent Profile </h2>
                </div>
                <div className='verification-form-div mt-4'>
                    <Form onSubmit={handleSubmit}>
                        <div className='verification-form-div '>


                            <FormGroup>
                                <Label for="firstname">First Name</Label>
                                <Input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup className='mx-2'>
                                <Label for="lastname">Last Name</Label>
                                <Input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                />
                            </FormGroup>


                        </div>
                        <FormGroup>
                            <Label for="address"> Address</Label>
                            <Input
                                type="text"
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="idorpassport">ID/Passport</Label>
                            <Input
                                type="text"
                                name="idorpassport"
                                id="idorpassport"
                                value={formData.idorpassport}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <Button className='btn-login' type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
            <ToastContainer />
        </Fragment>
    )
}

export default AgentFormSubmission;