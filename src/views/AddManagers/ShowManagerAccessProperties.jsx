import React,{Fragment,useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import Pagination from '../Paginations/PropertiesPagination/Index'

const ShowManagerAccessProperties = () => {
    const [properties, setProperties] = useState([]);
 const location=useLocation();
 console.log("loca",location.state);
 const propertyIds=location.state;
 useEffect(() => {
    const fetchPropertiesByIds = async () => {
      try {
        const response = await axios.post('http://localhost:3005/api/tasks/getmanageraccessallproperties', { propertyIds });
        setProperties(response.data.properties);
      } catch (error) {
        console.error('Error fetching properties by IDs:', error);
      }
    };

    fetchPropertiesByIds();
  }, []);
  console.log("p",properties)
  return (
    <Fragment>
 <Pagination properties={properties} itemsPerPage={5}  />
     
    </Fragment>
  )
}

export default ShowManagerAccessProperties