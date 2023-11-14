import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import Modal from 'react-modal';
import ReactPaginate from 'react-paginate';
import Select from "react-select";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash, FaSync } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { IoMdDoneAll } from 'react-icons/io';
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
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BiFilterAlt } from 'react-icons/bi';
const VerifyTransaction = () => {
  const navigation = useNavigate();
  const location =useLocation();
  console.log("locationsss",location)
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [transactions, setTransactions] = useState([]);
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

  useEffect(() => {
    // if (Array.isArray(properties) && properties.length > 0) {
    //   const allTransactions = properties.reduce((all, property) => {
    //     return all.concat(property.transactions);
    //   }, []);
    // setTransactions(allTransactions);
    // setFilteredTransactions(allTransactions);
    setTransactions(location.state.transactions);
    // setFilteredTransactions(location.state.transactions);
    // }
  }, []);

  // useEffect(() => {

  //   const fetchProperty = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:3005/api/tasks/getapprovedtransaction`);
  //       console.log("approd", response.data.map((i) => i.id))
  //       setTransactions(response.data.map((i) => i.id));
  //     } catch (error) {
  //       console.error('Error fetching property details:', error);
  //       toast.info(`${error}`, { autoClose: 2000 });
  //     }
  //   };

  //   fetchProperty();
  // }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: '1px',
      display: 'flex',
      flexdireaction: 'column',
      // marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleDeleteTransaction = async (props) => {
    console.log("delid", props)
    try {
      const response = await axios.delete(`http://localhost:3005/api/tasks/deleteunapprovedtransaction/${props._id}`);
      // alert(response.message);
      toast.info(`Deteled`, { autoClose: 2000 });

    } catch (error) {
      console.error('Error fetching property details:', error);
      toast.info(`${error}`, { autoClose: 2000 });
    }
  };
  const handleApproved = async (props) => {

    try {
      const response = await axios.post(`http://localhost:3005/api/tasks/deleteapprovedtransaction/${props.id}`, props);
      // alert(response.message);
      toast.info(`Approved`, { autoClose: 2000 });

    } catch (error) {
      console.error('Error fetching property details:', error);
      toast.info(`${error}`, { autoClose: 2000 });
    }
  }
  const handleIconClick = (action, property) => {
    // Implement your logic here based on the action (edit, delete, update)
    // You can navigate to different pages, make API requests, etc.
    console.log("action", action)
    switch (action) {
      case 'edit':
        navigation('/TransactionForm', { state: property })
        // Handle edit action
        break;
      case 'delete':
        handleDeleteTransaction(property)
        break;
      case 'approved':
        handleApproved(property);
        // Handle update action
        break;
      default:
        break;
    }

  }
  const filterProperties = () => {

    // let filtered = transactions.map((i)=>(i));
    // let filtered = transactions.map((item)=>(item.transactions))
    // console.log("transactions", transactions.map((i) => i.map((e) => e)))
    let filtered = transactions;


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
  const renderProperties = () => {
    let filteredProperties = filterProperties();
    console.log("new", filteredProperties)
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    if (!Array.isArray(filteredProperties)) {
      filteredProperties = [];
    }
    // return filteredProperties.slice(startIndex, endIndex).map((property, index) => (
    //   <tr key={property._id} onClick={() => handleNavigation(property)} className='table-row-data'>
    //     <td>{property}</td>
    //     <td>{index}</td>
    //     <td>{property.date}</td>
    //     <td>{property.account}</td>
    //     <td>{property.amount}</td>
    //     <td>{property.comments}</td>
    //     <td> <BiLinkExternal
    //       className="icon"
    //       data-tip="View image"
    //       onClick={() => openModal(property.image)}
    //     // onClick={() => this.handleIconClick('edit')}
    //     /></td>
    //     <td>
    //       <FaEdit
    //         className="icon "
    //         onClick={() => handleIconClick('edit',property)}
    //         // onMouseEnter={() => handleIconHover('edit')}
    //         data-tip="Edit"
    //       />
    //       <FaTrash
    //         className="icon mx-2"
    //         onClick={() => handleIconClick('delete',property)}
    //         data-tip="Delete"
    //       // onMouseEnter={() => handleIconHover('delete')}
    //       />
    //       <IoMdDoneAll
    //         className="icon mx-2"
    //         onClick={() => handleIconClick('approved',property)}
    //         data-tip="Update"
    //       // onMouseEnter={() => handleIconHover('update')}
    //       />
    //     </td>
    //     {/* <button className='btn-transection ' onClick={() => openModal(property.image)}>View Image</button>
    //     <button className='btn-transection  mx-3' onClick={() => handleApproved(property._id)}>Approved</button> */}
    //   </tr>
    // ));
    return filteredProperties.slice(startIndex, endIndex).map((property, index) =>  (

      <tr key={index} onClick={() => handleNavigation(property)} className='table-row-data'>
        <td>{index}</td>
        <td>{property.date}</td>
        <td>{property.account}</td>
        <td>{property.amount}</td>
        <td>{property.comments}</td>
        <td> <BiLinkExternal
          className="icon"
          data-tip="View image"
          onClick={() => openModal(property.image)}
        // onClick={() => this.handleIconClick('edit')}
        /></td>
        <td>
          <FaEdit
            className="icon "
            onClick={() => handleIconClick('edit', property)}
            // onMouseEnter={() => handleIconHover('edit')}
            data-tip="Edit"
          />
          <FaTrash
            className="icon mx-2"
            onClick={() => handleIconClick('delete', property)}
            data-tip="Delete"
          // onMouseEnter={() => handleIconHover('delete')}
          />
          <IoMdDoneAll
            className="icon mx-2"
            onClick={() => handleIconClick('approved', property)}
            data-tip="Update"
          // onMouseEnter={() => handleIconHover('update')}
          />
        </td>
        {/* <button className='btn-transection ' onClick={() => openModal(property.image)}>View Image</button>
        <button className='btn-transection  mx-3' onClick={() => handleApproved(property._id)}>Approved</button> */}
      </tr>
    
    ));
  };



  const handleNavigation = (prop) => {

    // navigate('/explore/propertydetail', { state: prop });
  };




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
      {modalIsOpen ?
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          // className="modal-viewimage"
          overlayClassName="modal-overlay"
          style={customStyles}
        >
          <img
            src={`http://localhost:3005/${viewimg}`}
            alt="Not Uploaded"
            // style={{ maxWidth: '100%' }}
          />
          <button onClick={closeModal} className="btn-closedmodel" >Close</button>
        </Modal> : ""
      }

      <div>
        <div className='table-body'>

          <Table  >
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Account</th>
                <th>Amount</th>
                <th>Comments</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{transactions ? renderProperties() : "Loading..."}</tbody>
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
      {/* {transactions.length > 0 ?

        <div>
          <div className='table-body'>

            <Table  >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Account</th>
                  <th>Amount</th>
                  <th>Comments</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{transactions ? renderProperties() : "Loading..."}</tbody>
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
        : "No Transaction yet!"

      } */}
      <ToastContainer />
    </Fragment>
  )
}

export default VerifyTransaction