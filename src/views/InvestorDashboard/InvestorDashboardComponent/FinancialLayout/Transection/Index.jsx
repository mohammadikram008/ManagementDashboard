import React, { Fragment, useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Table,
  Input,
  FormGroup,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
} from "reactstrap";
import Modal from 'react-modal';
import ReactPaginate from "react-js-pagination";
import { Column } from 'jspdf-autotable';


const Index = () => {
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
  const navigate = useNavigate();
  const location = useLocation();
  console.log("transactiontable", location);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [properties, setProperties] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [viewimg, setViewImage] = useState("");
  useEffect(() => {
    // Fetch property details when the component mounts
    // const fetchProperty = async () => {
    //   try {
    //     const response = await axios.get(`http://localhost:3005/api/tasks/properties`);
    //     // console.log("data",response.data)
    //     setProperties(response.data);
    //   } catch (error) {
    //     console.error('Error fetching property details:', error);
    //   }
    // };

    // fetchProperty();
  }, []);
  useEffect(() => {
    // if (Array.isArray(properties) && properties.length > 0) {
    //   const allTransactions = properties.reduce((all, property) => {
    //     return all.concat(property.transactions);
    //   }, []);
    // setTransactions(allTransactions);
    // setFilteredTransactions(allTransactions);
    setTransactions(location.state.transactions);
    setFilteredTransactions(location.state.transactions);
    // }
  }, []);
  // console.log('transactions:', transactions);
  const transactionss = [
    {
      id: 1,
      date: '2023-07-01',
      amount: 100.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 100.0,
    },
    {
      id: 2,
      date: '2023-07-12',
      amount: -50.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 50.0,
    },
    {
      id: 3,
      date: '2023-08-03',
      amount: 75.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 125.0,
    },
    {
      id: 4,
      date: '2023-08-24',
      amount: -30.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 95.0,
    },
    {
      id: 5,
      date: '2023-09-15',
      amount: 60.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 155.0,
    },
    {
      id: 6,
      date: '2023-09-06',
      amount: -25.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 130.0,
    },
    {
      id: 7,
      date: '2023-09-27',
      amount: 90.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 220.0,
    },
    {
      id: 8,
      date: '2023-10-01',
      amount: -45.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 175.0,
    },
    {
      id: 9,
      date: '2023-10-03',
      amount: 120.0,
      account: 'Savings',
      comments: 'Deposit',
      balance: 295.0,
    },
    {
      id: 10,
      date: '2023-10-06',
      amount: -20.0,
      account: 'Checking',
      comments: 'Withdrawal',
      balance: 275.0,
    },
  ];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  let [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const filterTransactions = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const filteredData = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= start && transactionDate <= end;
      });

      setFilteredTransactions(filteredData);
    } else {
      // If no date range is selected, show all data
      setFilteredTransactions(transactions);
    }
  };
  const handleNavigation =  () => {
    navigate('/TransactionForm', { state: location.state });
  }
  const handleUploadAllTransaction = async (e) => {
    e.preventDefault();
    // console.log("checkapi",transactions)
    axios.post('http://localhost:3005/api/tasks/addalltransactions', transactions)
    .then((response) => {
      console.log("res",response)
      alert("Monthly transaction uploaded")
      // Handle the API response, e.g., show a success message
    })
    .catch((error) => {
      // Handle any errors
      console.error('Error adding data:', error);
      alert(error)
    });
  

}

// const handleDownloadPdf = (props) => {
//   // navigate("/viewimage", { state: props });

// }
const openModal = (image) => {
  // setSelectedImage(image);
  setViewImage(image);
  setModalIsOpen(true);
};

const closeModal = () => {
  // setSelectedImage(null);
  setModalIsOpen(false);
};
const renderTransactions = () => {
  // if (!Array.isArray(filteredTransactions)) {
  //   filteredTransactions = [];
  // }
  return filteredTransactions.map((transactions, index) => (
    <tr key={transactions._id}>
      <td>{index}</td>
      <td>{transactions.date}</td>
      <td>{transactions.amount}</td>
      <td>{transactions.account}</td>
      <td>{transactions.comments}</td>
      <td>{transactions.balance}</td>
      <button className='btn-transection ' onClick={() => openModal(transactions.image)}>View Image</button>
      {/* <td><a href={`http://localhost:3005/${transactions.image}`}>view Image</a></td> */}
    </tr>
  ));
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
    <div className='date-div'>
      <FormGroup className='date-form mt-3'>
        <Label for="startDate">From :</Label>
        <Input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}

        />
      </FormGroup>
      <FormGroup className='date-form mt-3'>
        <Label for="endDate" className='lb' >To :</Label>
        <Input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}

        />
      </FormGroup>
      <Button className='btn-transection btn-filter ' onClick={filterTransactions}>Search</Button>

    </div>
    <Table hover responsive >
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Account</th>
          <th>Comments</th>
          <th>Balance</th>
          <th>Slip Image</th>

        </tr>
      </thead>
      <tbody>{properties ? renderTransactions() : "Loading..."}</tbody>
    </Table>
    <Button className='btn-transection btn-filter ' onClick={handleNavigation}>Add Transaction</Button>
    <Button className='btn-transection btn-filter ' onClick={handleUploadAllTransaction}>Upload Transaction</Button>
    {/* <img src={`http://localhost:3005/${img}`} className="img-responsive" alt="Apartment" /> */}
    {/* <Pagination>
        <PaginationItem disabled={currentPage === 0}>
          <PaginationLink previous onClick={() => handlePageClick(currentPage - 1)} />
        </PaginationItem>
        {[...Array(Math.ceil(filterTransactions().length / pageSize))].map((_, index) => (
          <PaginationItem key={index} active={index === currentPage}>
            <PaginationLink onClick={() => handlePageClick(index)}>{index + 1}</PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage === Math.ceil(filterTransactions().length / pageSize) - 1}>
          <PaginationLink next onClick={() => handlePageClick(currentPage + 1)} />
        </PaginationItem>
      </Pagination> */}
  </Fragment>
)
}

export default Index