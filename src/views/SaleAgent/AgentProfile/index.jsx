
import React, { Fragment, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('sk_test_51NzDfpBuGdpsayKMf1fdpJdhUH5H5sPEWW7EfyEDUaUrkvA1ICRe0J3MuoISm6tebqlrUapDE35u0xtw1I0Sfoxa00QyjZJIF8');
import axios from 'axios';

import Pagination from '../../Paginations/PropertiesPagination/Index'
import { useEffect } from 'react';
const index = () => {

  const [formData, setFormData] = useState({
    name: 'ikram',
    sales:  '344',
    date:  '4/2/2023',
    code:  '45666',
    balance:  '9973997 Meezan bank ',

    // To store the selected payment method
});

const [properties, setProperty] = useState("");
useEffect(() => {
  // Fetch property details when the component mounts
  const fetchProperty = async () => {
      try {
          console.log("t2")
          const response = await axios.get(`http://localhost:3005/api/tasks/properties`);
          console.log("data2", response.data)
          setProperty(response.data);
          // if (props) {
          //     console.log("t",trans)
          //     const response = await axios.post(`http://localhost:3005/api/tasks/getallapp`,props.transactions.map((i) => i.id));
          //     console.log("data1", response.data)
          //     setProperty(response.data);
          // } else {
          //     console.log("t2")
          //     const response = await axios.get(`http://localhost:3005/api/tasks/properties`);
          //     console.log("data2", response.data)
          //     setProperty(response.data);
          // }
      } catch (error) {
          console.error('Error fetching property details:', error);
      }
  };

  fetchProperty();
}, []);
  return (
    <Fragment>
    <Container>
        <div className='change-pass-main-div'>
            <h2>Agent Profile </h2>
        </div>
        <div className='verification-form-div mt-4'>
            <Form >
                <div className='verification-form-div '>
                    <FormGroup>
                        <Label for="amount">Full Name</Label>
                        <Input
                            type="text"
                            name="amount"
                            id="amount"
                            disabled
                            
                            value={formData.name}
                            // onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className='mx-2'>
                        <Label for="account"> Sales#</Label>
                        <Input
                            type="text"
                            name="account"
                            id="account"
                            disabled
                            value={formData.sales}
                            // onChange={handleChange}
                        />
                    </FormGroup>
          
          </div>
                <FormGroup className='mx-2' >
                    <Label for="startDate"> Join Date</Label>
                    <Input
                        type="text"
                        id="startDate"
                        disabled
                        value={formData.date}
                        // onChange={(e) => setStartDate(e.target.value)}
                    // onBlur={() => filterTransactions()}
                    />
                </FormGroup>
                <FormGroup className='mx-2'>
                    <Label for="comments">Code:</Label>
                    <Input
                        type="text"
                        name="comments"
                        id="comments"
                        disabled
                        value={formData.code}
                        // onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className='mx-2'>
                    <Label for="balance">Account Details</Label>
                    <Input
                        type="text"
                        name="balance"
                        id="balance"
                        disabled
                        value={formData.balance}
                        // onChange={handleChange}
                    />
                </FormGroup>
               
             
                {/* <Button className='btn-login' type="submit">
                Withdraw
                    {PropertyId ? "Update Transaction" : "Add Transaction"}
                </Button> */}
            </Form>
        </div>
    </Container>
    {/* <Pagination properties={properties} itemsPerPage={5} /> */}
    <ToastContainer />
</Fragment>

  )
}

export default index