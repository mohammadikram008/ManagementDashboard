import React, { Fragment, useState, useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('sk_test_51NzDfpBuGdpsayKMf1fdpJdhUH5H5sPEWW7EfyEDUaUrkvA1ICRe0J3MuoISm6tebqlrUapDE35u0xtw1I0Sfoxa00QyjZJIF8');
import axios from 'axios';

import Pagination from '../../Paginations/Controlpannelpagination/Index'

const index = () => {
  const [properties, setProperty] = useState("");
  const [fromDate, setFromDate] = useState('');
  const balance_sheet = [
    [{ content: 'Assets', styles: { fontStyle: 'bold', halign: 'center', fillColor: [220, 220, 220] } }, 'Amount'],
    ['Real Estate (Gross Assets)', 20],
    ['Accumulated Depreciation', 15],
    [{ content: 'Net Total Real Estate', styles: { fontStyle: 'bold' } }, 0],
    [{ content: 'Income Statement', styles: { fontStyle: 'bold', halign: 'center', fillColor: [220, 220, 220] } }, ''],
    ['Operating Expenses', 10],
    ['Interest Expenses', 10],
    ['Annual Depreciation', 20],
    [{ content: 'Total Expenses', styles: { fontStyle: 'bold' } }, 0],
    [{ content: 'Net Income', styles: { fontStyle: 'bold' } }, 0],];
  const [balancesheet, setBalanceSheet] = useState(balance_sheet);
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
  const generatePdf = () => {
    // alert("click")

    const calculateNetTotalRealEstate = () => {
      const grossAssets = balancesheet[1][1];
      const accumulatedDepreciation = balancesheet[2][1];
      const netTotalRealEstate = grossAssets - accumulatedDepreciation;

      // Update the Net Total Real Estate value
      const updatedData = [...balancesheet];
      updatedData[3][1] = netTotalRealEstate;

      setBalanceSheet(updatedData);
    };

    const calculateNetIncome = () => {
      const operatingExpenses = balancesheet[5][1];
      const interestExpenses = balancesheet[6][1];
      const annualDepreciation = balancesheet[7][1];
      const totalExpenses = operatingExpenses + interestExpenses + annualDepreciation;

      // Calculate Net Income
      const netIncome = balancesheet[3][1] - totalExpenses;

      // Update the Total Expenses and Net Income values
      const updatedData = [...balancesheet];
      updatedData[8][1] = totalExpenses;
      updatedData[9][1] = netIncome;

      setBalanceSheet(updatedData);
    };
    // Validate date range
    // if (!fromDate || !toDate) {
    //   alert('Please select both "From Date" and "To Date".');
    //   return;
    // }

    // Calculate the Net Total dynamically
    // Calculate Net Total Real Estate
    calculateNetTotalRealEstate();

    // Calculate Net Income
    calculateNetIncome();

    // Create a new PDF document
    const doc = new jsPDF();

    // Add title and date range centered at the top
    doc.setFontSize(18);
    doc.text('Sale History', doc.internal.pageSize.getWidth() / 2, 20, 'center');
    doc.setFontSize(12);
    // doc.text(`Report Date Range: ${fromDate} - ${toDate}`, doc.internal.pageSize.getWidth() / 2, 30, 'center');

    // Set the table header style
    doc.autoTable({
      head: [['Assets', 'Amount']],
      body: balancesheet.slice(1), // Exclude the first row
      startY: 40, // Position below the title and date range
      theme: 'plain', // Remove table border
    });

    // Save the PDF
    // doc.save('income_statement.pdf');

    // Open the PDF in a new tab
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, '_blank');
  };
  return (
    <Fragment>
      <Container>
        <div className='change-pass-main-div'>
          <h2>Sale History </h2>
        </div>

        <Button className='btn-login' onClick={()=>generatePdf()} >

          Report Generate
          {/* {PropertyId ? "Update Transaction" : "Add Transaction"} */}
        </Button>
      </Container>
      <Pagination properties={properties} itemsPerPage={5} salehistory="salehistory" />
      <ToastContainer />
    </Fragment>
  )
}

export default index