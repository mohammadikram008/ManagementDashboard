import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import Modal from 'react-modal';
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
const VerifyTransaction = () => {
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
    try {
      const response = await axios.get(`http://localhost:3005/api/tasks/deleteapprovedtransaction/${props}`);
      alert(response.message);

    } catch (error) {
      console.error('Error fetching property details:', error);
    }
  }
  const renderProperties = () => {
    let filteredProperties = filterProperties();
    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    if (!Array.isArray(filteredProperties)) {
      filteredProperties = [];
    }
    return filteredProperties.slice(startIndex, endIndex).map((property, index) => (
      <tr key={property._id} onClick={() => handleNavigation(property)} className='table-row-data'>
        <td>{index}</td>
        <td>{property.account}</td>
        <td>{property.amount}</td>
        <td>{property.balance}</td>
        <td>{property.comments}</td>
        <button className='btn-transection ' onClick={() => openModal(property.image)}>View Image</button>
        <button className='btn-transection  mx-3' onClick={() => handleApproved(property._id)}>Approved</button>
      </tr>
    ));
  };

  const filterProperties = () => {
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

  const handleNavigation = (prop) => {

    // navigate('/explore/propertydetail', { state: prop });
  };


  useEffect(() => {

    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/api/tasks/getapprovedtransaction`);
        console.log("approd", response.data)
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchProperty();
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
            style={{ maxWidth: '100%' }}
          />
          <button onClick={closeModal} className="btn-closedmodel" >Close</button>
        </Modal> : ""
      }

      {transactions.length > 0 ?

        <div>
          <div className='table-body'>

            <Table hover >
              <thead>
                <tr>
                  <th>#</th>
                  <th>account</th>
                  <th>amount</th>
                  <th>balance</th>
                  <th>comments</th>
                  <th>image</th>
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

      }
    </Fragment>
  )
}

export default VerifyTransaction