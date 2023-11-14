import React, { Fragment, useState, useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from '../Paginations/PropertiesPagination/Index'
// const stripePromise = loadStripe('sk_test_51NzDfpBuGdpsayKMf1fdpJdhUH5H5sPEWW7EfyEDUaUrkvA1ICRe0J3MuoISm6tebqlrUapDE35u0xtw1I0Sfoxa00QyjZJIF8');
import axios from 'axios';
import Properties from '../explore/propertyhome/Properties';

const Index = () => {
    const [formData, setFormData] = useState({
        email: '',
    });
    const [properties, setProperty] = useState("");
    const [selectedProperties, setSelectedProperties] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };



    const handleSelectedPropertiesChange = (newSelectedProperties) => {
        setSelectedProperties(newSelectedProperties);
    };

    // const handleSubmit = () => {
    //   // Use the selectedProperties in this function to handle the submission
    //   console.log('Selected properties in PropertiesPage:', selectedProperties);
    //   // Replace this with your actual submit logic.
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the user profile data and selected payment method details to your API here
            // Example: await axios.post('/api/profile', { ...formData, paymentMethodData });
            // const dataToSend = {
            //     email: formData.email,
            //     // selectedProperties: selectedProperties,
            // };
            // alert("call")
            await axios.post('http://localhost:3005/api/tasks/addmanageremail', formData).then((res) => {
                setFormData({
                    email: '',
                });
                setSelectedProperties("")
                toast.info("Manager  Email Save successfully", { autoClose: 2000 });
                // alert("Manager profile created  successfully")
            }).catch((err) => {
                // alert(err)
                toast.info(`${err}`, { autoClose: 2000 });
            })


        } catch (error) {
            console.error('Error submitting profile form:', error);
            toast.info(`${error}`, { autoClose: 2000 });
        }
    };
    useEffect(() => {
        // Fetch property details when the component mounts
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`http://localhost:3005/api/tasks/getmanageremails`);
                console.log("data", response.data)
                setProperty(response.data);
            } catch (error) {
                toast.info(`${error}`, { autoClose: 2000 });
                console.error('Error fetching property details:', error);
            }
        };

        fetchProperty();
    }, []);
    return (
        <Fragment>
            <Container>
                <Form onSubmit={handleSubmit} className='manger-form'>

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

                    <Button className='btn-login' type="submit">
                    Submit
                </Button>
                </Form>

                {/* <Pagination className="" properties={properties} itemsPerPage={5} addmanager={"addmanager"} selectedProperties={selectedProperties} onSelectedPropertiesChange={handleSelectedPropertiesChange} /> */}
                <Pagination className="" properties={properties} manageremail="manageremail" />

             </Container>
             <ToastContainer/>
        </Fragment>
    )
}

export default Index