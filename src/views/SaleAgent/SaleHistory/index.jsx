import React, { Fragment, useState, useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('sk_test_51NzDfpBuGdpsayKMf1fdpJdhUH5H5sPEWW7EfyEDUaUrkvA1ICRe0J3MuoISm6tebqlrUapDE35u0xtw1I0Sfoxa00QyjZJIF8');
import axios from 'axios';

import Pagination from '../../Paginations/PropertiesPagination/Index'

const index = () => {
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
          <h2>Sale History </h2>
        </div>

      <Button className='btn-login' type="submit">

        Report Generate
        {/* {PropertyId ? "Update Transaction" : "Add Transaction"} */}
      </Button>
      </Container>
      <Pagination properties={properties} itemsPerPage={5} />
      <ToastContainer />
    </Fragment>
  )
}

export default index