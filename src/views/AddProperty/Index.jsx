import React, { Fragment, useState } from 'react'
import axios from 'axios';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Index = () => {
  const [propertyData, setPropertyData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    propertytype: '',
    price: '',
  });
  
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDatas = new FormData();
    formDatas.append('name', propertyData.name);
    formDatas.append('address', propertyData.address);
    formDatas.append('city', propertyData.city);
    formDatas.append('country', propertyData.country);
    formDatas.append('propertytype', propertyData.propertytype);
    formDatas.append('price', propertyData.price);
    formDatas.append('image', selectedFile);
    console.log("formdatas", formDatas)
    try {
      const response = await axios.post('http://localhost:3005/api/tasks/properties', formDatas);
      if (response) {
        // alert("Property save SuccessFully")
        toast.info(`Property save SuccessFully`, { autoClose: 2000 })
        setPropertyData({
          name: '',
          address: '',
          city: '',
          country: '',
          propertytype: '',
          price: '',
        });
        setSelectedFile("")
      } else {
        // alert("Error")
        toast.info(`Error`, { autoClose: 2000 })
      }
      // Clear the form or provide feedback to the user
    } catch (error) {
      console.error('Error adding property:', error);
      toast.info(`${error}`, { autoClose: 2000 });
    }
  }
  return (
    <Fragment>
      <Container>
        <div className='change-pass-main-div'>
          <h2>Add Property </h2>
        </div>
        <div className='verification-form-div mt-4'>
          <Form onSubmit={handleSubmit}>
            <div className='verification-form-div '>
              <FormGroup>
                <Label for="name">Property Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={propertyData.name}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup className='mx-2'>
                <Label for="address"> Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  value={propertyData.address}
                  onChange={handleChange}
                />
              </FormGroup>
            </div>
            <FormGroup >
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                id="city"
                value={propertyData.city}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup >
              <Label for="country">Country</Label>
              <Input
                type="text"
                name="country"
                id="country"
                value={propertyData.country}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="propertytype">Property Type</Label>
              <Input
                type="text"
                name="propertytype"
                id="propertytype"
                value={propertyData.propertytype}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                type="text"
                name="price"
                id="price"
                value={propertyData.price}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="balance">Property Image</Label>
              <Input
                type="file" accept="image/*" onChange={handleFileChange}
              />
            </FormGroup>
            <Button className='btn-login' type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <ToastContainer/>
    </Fragment>

  )
}

export default Index