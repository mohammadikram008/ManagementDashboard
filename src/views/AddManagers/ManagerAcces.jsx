import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import Modal from 'react-modal';
// import ReactPaginate from 'react-paginate';
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

  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { BiFilterAlt } from 'react-icons/bi';
import Pagination from '../Paginations/PropertiesPagination/Index'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManagerAcces = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [allManagers, setAllManagers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [viewimg, setViewImage] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [minPrice, setMinPrice] = useState(""); // Change minPrice state to an empty string
  const [maxPrice, setMaxPrice] = useState("");
  const [filterPropertyType, setFilterPropertyType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      display: 'flex',
      flexdireaction: 'column',
      // marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleApproved = async (props) => {
    console.log("id", props)
    //   try {
    //     const response = await axios.get(`http://localhost:3005/api/tasks/deleteapprovedtransaction/${props}`);
    //     alert(response.message);

    //   } catch (error) {
    //     console.error('Error fetching property details:', error);
    //   }
  }
  const renderProperties = () => {
    let filteredProperties = filterProperties();
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    if (!Array.isArray(filteredProperties)) {
      filteredProperties = [];
    }
    return filteredProperties.slice(startIndex, endIndex).map((manager, index) => (
      <tr key={manager._id} onClick={() => handleNavigation(manager)} className='table-row-data'>
        <td>{index}</td>
        <td>{manager.firstname}</td>
        <td>{manager.lastname}</td>
        <td>{manager.address}</td>
        <td>{manager.idorpassport}</td>
        <td>{manager.email}</td>
        <td>{manager.password}</td>
        {/* <button className='btn-transection ' onClick={() => openModal(manager.image)}>View Image</button> */}
        {/* <button className='btn-transection  mx-3' onClick={() => handleApproved(manager._id)}>Edit</button> */}
      </tr>
    ));
  };

  const filterProperties = () => {
    let filtered = allManagers;

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
          property.propertyType.toLowerCase() === filterPropertyType.toLowerCase()
      );
    }

    return filtered;
  };

  const handleNavigation = (prop) => {
    toast.info(`Save  SuccessFully`, { autoClose: 2000 })
    // navigate('/explore/propertydetail', { state: prop });
  };

  const [properties, setProperty] = useState("");
  useEffect(() => {

    const fetchManager = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/api/tasks/properties`);
        console.log("data2", response.data)
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property details:', error);
        toast.info(`${error}`, { autoClose: 2000 })
      }
    };

    fetchManager();
  }, []);

  const openModal = (image) => {
    // setSelectedImage(image);
    setViewImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    // setSelectedImage(null);
    setModalIsOpen(false);
  };
  return (
    <Fragment>

      <Pagination properties={properties} addmanager="addmanager" />
      <Button className='btn-login' onClick={() => handleNavigation()}>
        Submit
      </Button>
      {/*   
        {allManagers.length > 0 ?
  
          <div>
            <div className='table-body'>
  
              <Table hover >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>ID/Passport</th>
                    <th>Email</th>
                    <th>Password</th>
                  </tr>
                </thead>
                <tbody>{allManagers ? renderProperties() : "Loading..."}</tbody>
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
          </div>
          : "Loading..."
  
        } */}
        <ToastContainer/>
    </Fragment>
  )
}

export default ManagerAcces