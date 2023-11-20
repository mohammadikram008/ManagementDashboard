import React, {Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Pagination from '../Paginations/Controlpannelpagination/Index'
const ManagerAccessPortal = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {

    const fetchManager = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/tasks/getallmanagersaccessproperties');
        setProperties(response.data.allManagers);
        // toast.info(`Save Access  SuccessFully`, { autoClose: 2000 })
      } catch (error) {
        console.error('Error fetching property details:', error);
        toast.info(`${error}`, { autoClose: 2000 })
      }
    };

    fetchManager();
  }, []);
  console.log("acccesproperty", properties)
  return (
    <Fragment>
     
      <Pagination  properties={properties}  manageracces="manageaccessproperties" />
      <ToastContainer />
    </Fragment>
  )
}

export default ManagerAccessPortal