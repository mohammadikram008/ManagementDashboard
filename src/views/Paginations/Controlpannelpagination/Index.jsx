import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PropertyPagination.css';
import ReactPaginate from 'react-paginate';
import Select from "react-select";
import {
  Table,
  Button,
  Collapse,
  Input,
  FormGroup,
  Label,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { BiFilterAlt } from 'react-icons/bi';
import axios from 'axios';
const Index = ({ properties, agent, salehistory, manageracces }) => {
  console.log("agent", agent)
  console.log("properties", properties);
  const navigate = useNavigate();
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [filterCity, setFilterCity] = useState("");
  const [minPrice, setMinPrice] = useState(""); // Change minPrice state to an empty string
  const [maxPrice, setMaxPrice] = useState("");
  const [filterPropertyType, setFilterPropertyType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleCheckboxChange = (propertyId) => {
    const updatedSelectedProperties = [...selectedProperties];
    if (updatedSelectedProperties.includes(propertyId)) {
      updatedSelectedProperties.splice(updatedSelectedProperties.indexOf(propertyId), 1);
    } else {
      updatedSelectedProperties.push(propertyId);
    }

    // Call the parent component's callback function to update the selected properties
    onSelectedPropertiesChange(updatedSelectedProperties);
  };

  const handleNavigation = async (prop, action) => {
    console.log("action", action, "pro", prop)
    //   await axios.post('http://localhost:3005/api/tasks/addmanager', formData).then((res) => {
    //     setFormData({
    //         email: '',
    //     });
    //     setSelectedProperties("")
    //     toast.info("Manager  Email Save successfully", { autoClose: 2000 });
    //     // alert("Manager profile created successfully")
    // }).catch((err) => {
    //     // alert(err)
    //     toast.info(`${err}`, { autoClose: 2000 });
    // })
    if (action === "access") {
      if (!agent) {
        navigate('/allmanager', { state: prop });
      } else {

        alert(action)
        // navigate('/VerifySingleTransactions', { state: prop });

      }
    }else if(action === "manageraccess"){
      navigate('/manageraccessproperties', { state: prop });
    }
  };

  const renderProperties = () => {
    let filteredProperties = filterProperties();
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    if (!Array.isArray(filteredProperties)) {
      filteredProperties = [];
    }

    return filteredProperties.slice(startIndex, endIndex).map((property, index) => (


      <tr key={property.id}
        // onClick={() => handleNavigation(property)}
        className='table-row-data'>
        {salehistory ?
          <>
            <td>{index}</td>
            <td>ikram</td>
            <td>Farm House</td>
            <td>3%</td>
            <td>456</td>
            <td>3/11/2023</td>

          </>
          :
          <>

            <td>{index}</td>
            <td>{property.email}</td>
            {manageracces ? "" : <td>Invited</td>}
            {agent ? "" :
              <td>
                {/* <Button className='btn-login' onClick={() => handleNavigation(property.email, "invit")}>
            Invite
          </Button> */}
                <Button className='btn-login mx-2' onClick={() => handleNavigation(manageracces?property.selectedProperties:property.email, manageracces ? "manageraccess" : "access")}>
                  {manageracces ? "Show " : 'Access'}
                </Button>
              </td>
            }
          </>}
      </tr>
    ));
  };

  const filterProperties = () => {
    let filtered = properties;

    if (filterCity) {
      filtered = filtered.filter((property) =>
        property.city.toLowerCase() === filterCity.toLowerCase()
      );
    }

    if (minPrice && maxPrice) {
      filtered = filtered.filter(
        (property) => {
          const propertyPrice = parseFloat(property.price.replace(/[^0-9.]/g, ""));
          return propertyPrice >= parseFloat(minPrice) && propertyPrice <= parseFloat(maxPrice);
        }
      );
    }

    if (filterPropertyType) {
      filtered = filtered.filter(
        (property) =>
          // console.log("1",property)
          property.propertytype.toLowerCase() === filterPropertyType.toLowerCase()
      );
    }

    return filtered;
  };

  return (
    <Fragment>


      {/* <div className='filter-div'>
        <div onClick={toggle}>
          Filter   <BiFilterAlt size={24} style={{ cursor: "pointer" }} />
        </div>
      </div> */}


      <Collapse isOpen={isOpen} className='collapse-div'>
        <FormGroup className='collapse-div-groupform'>
          <Label for="filterCity">City:</Label>
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>
              {filterCity || "Select City"}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => setFilterCity("")}>
                All
              </DropdownItem>
              <DropdownItem onClick={() => setFilterCity("Karachi")}>
                Karachi
              </DropdownItem>
              <DropdownItem onClick={() => setFilterCity("Lahore")}>
                Lahore
              </DropdownItem>
              <DropdownItem onClick={() => setFilterCity("Islamabad")}>
                Islamabad
              </DropdownItem>
              <DropdownItem onClick={() => setFilterCity("Peshawar")}>
                Peshawar
              </DropdownItem>
              {/* Add more cities as needed */}
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup className='collapse-div-groupform'>
          <Label for="minPrice">Minimum Price:</Label>
          <Input
            type="select" // Change input type to select
            id="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          >
            <option value="">Select Minimum Price</option>
            <option value="100">100 PKR</option>
            <option value="1000">1,000 PKR</option>
            <option value="10000">10,000 PKR</option>
            {/* Add more options as needed */}
          </Input>
        </FormGroup>
        <FormGroup className='collapse-div-groupform'>
          <Label for="maxPrice">Maximum Price:</Label>
          <Input
            type="select" // Change input type to select
            id="maxPrice"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          >
            <option value="">Select Maximum Price</option>
            <option value="5000000">5,000,000 PKR</option>
            <option value="10000000">10,000,000 PKR</option>
            <option value="100000000">100,000,000 PKR</option>
            {/* Add more options as needed */}
          </Input>
        </FormGroup>
        <FormGroup className='collapse-div-groupform'>
          <Label for="filterPropertyType">Property Type:</Label>
          <Input
            type="select"
            id="filterPropertyType"
            value={filterPropertyType}
            onChange={(e) => setFilterPropertyType(e.target.value)}
          >
            <option value="">Select Property Type</option>
            <option value="Flat">Flat</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            {/* Add more property types as needed */}
          </Input>
        </FormGroup>
      </Collapse>

      <div className='table-body'>
        <Table hover >
          <thead>{

            salehistory && salehistory ?
              <tr>
                <th>#</th>
                <th>Client</th>
                <th>PropertyName</th>
                <th>Commision</th>
                <th>Sale Price</th>
                <th>Sale Date</th>
              </tr> :

              <tr>
                <th>#</th>
                <th>Email</th>
                {manageracces ? "" : <th>Status</th>}
                {agent ? "" :
                  <th>Action</th>

                }
              </tr>
          }
          </thead>
          <tbody>{properties ? renderProperties() : "Loading...."}</tbody>
        </Table>
      </div>
      <div className='pagination-main-div'>
        <Pagination className='Pagination-main'>
          <PaginationItem disabled={currentPage === 0}>
            <PaginationLink previous onClick={() => handlePageClick(currentPage - 1)} />
          </PaginationItem>
          {Array.from({ length: Math.ceil(filterProperties().length / pageSize) }).map((_, index) => (
            <PaginationItem key={index} active={index === currentPage}>
              <PaginationLink onClick={() => handlePageClick(index)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={currentPage === Math.ceil(filterProperties().length / pageSize) - 1}>
            <PaginationLink next onClick={() => handlePageClick(currentPage + 1)} />
          </PaginationItem>
        </Pagination>
      </div>
    </Fragment>
  );
};

export default Index;
