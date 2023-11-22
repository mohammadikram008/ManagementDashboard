
import React, { Fragment, useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { selectAgents } from '../../Selectors';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../Paginations/PropertiesPagination/Index'
import { useEffect } from 'react';
const index = () =>{ 
const [formData, setFormData] = useState({
    name: 'ikram',
    sales:  '3er4',
    date:  '4/2/2023',
    code:  '45666',
    title:  'Mohammadikram ',
    Accoountnumber:  '08160104579012',
    bankname:  'Meezan bank ',

    // To store the selected payment method
});
    const reduxAgents = useSelector(selectAgents);
    
  useEffect(() => {
    if (reduxAgents && reduxAgents.length > 0) {
        setFormData(reduxAgents);
    }

  }, [reduxAgents]);


// const [properties, setProperty] = useState("");
// useEffect(() => {
//   // Fetch property details when the component mounts
//   const fetchProperty = async () => {
//       try {
//           console.log("t2")
//           const response = await axios.get(`http://localhost:3005/api/tasks/properties`);
//           console.log("data2", response.data)
//           setProperty(response.data);
//           // if (props) {
//           //     console.log("t",trans)
//           //     const response = await axios.post(`http://localhost:3005/api/tasks/getallapp`,props.transactions.map((i) => i.id));
//           //     console.log("data1", response.data)
//           //     setProperty(response.data);
//           // } else {
//           //     console.log("t2")
//           //     const response = await axios.get(`http://localhost:3005/api/tasks/properties`);
//           //     console.log("data2", response.data)
//           //     setProperty(response.data);
//           // }
//       } catch (error) {
//           console.error('Error fetching property details:', error);
//       }
//   };

//   fetchProperty();
// }, []);
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
                    <h3 for="balance">Account Details</h3>
                    <FormGroup className='mx-2'>
                    <Label for="balance">Account Title</Label>
                    <Input
                        type="text"
                        name="balance"
                        id="balance"
                        disabled
                        value={formData.title}
                        // onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className='mx-2'>
                    <Label for="balance">Account Number</Label>
                    <Input
                        type="text"
                        name="balance"
                        id="balance"
                        disabled
                        value={formData.Accoountnumber}
                        // onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className='mx-2'>
                    <Label for="balance">Bank Name</Label>
                    <Input
                        type="text"
                        name="balance"
                        id="balance"
                        disabled
                        value={formData.bankname}
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