import React, { Fragment, useState, useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import pro3 from '../../../assets/images/pro3.jpg'
import { Link, useNavigate } from 'react-router-dom';
import '../../../CSS/Properties.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import Pagination from '../../Paginations/PropertiesPagination/Index'
//slider 
import { UncontrolledCarousel } from 'reactstrap';
const Properties = (props ) => {
    // console.log("propps", props.transactions.map((i) => i.id))
    // const [trans, setTrans] = useState(props.transactions.map((i) => i.id));

    const [properties, setProperty] = useState("");

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
   
    const datas = Array.from({ length: 100 }, (_, index) => `Item PKR{index + 1}`);
    const propertyData = [
        {
            id: 1,
            name: 'House E-11/4',
            address: 'House no 45, Street 45, E-11/4',
            city: 'Islamabad',
            country: 'Pakistan',
            type: 'Flat',
            price: "PKR  657,5",
            // propertyDescription: 'Description for Property 1',
            // image: 'https://azizidevelopments.com/assets/images/projects/1603263070389162780.jpg',
        },
        {
            id: 2,
            name: 'Apartment DHA Phase-2',
            address: 'Apartment no 65, Street 1, DHA Phase-2',
            city: 'Lahore',
            country: 'Pakistan',
            type: 'Apartment',
            price: "PKR  159,8",
            // propertyDescription: 'Description for Property 2',
            // image: 'https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg',
        },
        {
            id: 3,
            name: 'House 4',
            address: 'House no 4, Street 7, Peshawar ',
            city: 'Peshawar',
            country: 'Pakistan',
            type: 'House',
            price: 'PKR  150,0',
            // propertyDescription: 'Description for Property 2',
            // image: 'https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg',
        },
        {
            id: 4,
            name: 'House DHA',
            address: 'House no 5, Street 2, DHA',
            city: 'Lahore',
            country: 'Pakistan',
            type: 'House',
            price: "PKR  159,5",
            // propertyDescription: 'Description for Property 1',
            // image: 'https://azizidevelopments.com/assets/images/projects/1603263070389162780.jpg',
        },
        {
            id: 5,
            name: 'House BlueArea',
            address: 'House no 65, Street 1, BlueArea',
            city: 'Islamabad',
            country: 'Pakistan',
            type: 'House',
            price: "PKR  159,89",
            // propertyDescription: 'Description for Property 2',
            // image: 'https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg',
        },
        {
            id: 6,
            name: 'Aparment F-7',
            address: 'Aparment no 67, Street 4, F-7',
            city: 'Islamabad',
            country: 'Pakistan',
            type: 'Aparment',
            price: 'PKR  789,01',
            // propertyDescription: 'Description for Property 2',
            // image: 'https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg',
        },
        {
            id: 7,
            name: 'House E-11/4',
            address: 'House no 45, Street 45, E-11/4',
            city: 'Islamabad',
            country: 'Pakistan',
            type: 'Flat',
            price: "PKR  657,5",
            // propertyDescription: 'Description for Property 1',
            // image: 'https://azizidevelopments.com/assets/images/projects/1603263070389162780.jpg',
        },
        {
            id: 8,
            name: 'Apartment DHA Phase-2',
            address: 'Apartment no 65, Street 1, DHA Phase-2',
            city: 'Lahore',
            country: 'Pakistan',
            type: 'Apartment',
            price: "PKR  159,8",
            // propertyDescription: 'Description for Property 2',
            // image: 'https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg',
        },
        {
            id: 9,
            name: 'House 4',
            address: 'House no 4, Street 7, Peshawar ',
            city: 'Peshawar',
            country: 'Pakistan',
            type: 'House',
            price: 'PKR  150,0',
            // propertyDescription: 'Description for Property 2',
            // image: 'https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg',
        },
        {
            id: 10,
            name: 'House DHA',
            address: 'House no 5, Street 2, DHA',
            city: 'Lahore',
            country: 'Pakistan',
            type: 'House',
            price: "PKR  159,5",
            // propertyDescription: 'Description for Property 1',
            // image: 'https://azizidevelopments.com/assets/images/projects/1603263070389162780.jpg',
        },
        {
            id: 11,
            name: 'House BlueArea',
            address: 'House no 65, Street 1, BlueArea',
            city: 'Islamabad',
            country: 'Pakistan',
            type: 'House',
            price: "PKR  159,89",
            // propertyDescription: 'Description for Property 2',
            // image: 'https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg',
        },
        {
            id: 12,
            name: 'Aparment F-7',
            address: 'Aparment no 67, Street 4, F-7',
            city: 'Islamabad',
            country: 'Pakistan',
            type: 'Aparment',
            price: 'PKR  789,01',
            // propertyDescription: 'Description for Property 2',
            // image: 'https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg',
        },

        // Add more properties as needed
    ];

    const navigate = useNavigate();
    const handleNavigation = (prop) => {

        console.log("properties", properties)
        // window.open('https://65043945a24bc40b8f20810e--melodic-pudding-312f80.netlify.app/#/dashboard', '_blank');
        navigate('/property/propertydetail', { state: prop });
        // const storedData = localStorage.getItem('login');
        // if (storedData) {
        //     // If data exists in local storage, update the component state
        //     //   setData(JSON.parse(storedData));
        //     navigate('/investordashboard',{ state: prop });
        // } else {
        //     navigate('/login');
        // }

    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 1000
    };
    const items = [
        {
            src: `https://azizidevelopments.com/assets/images/projects/1603263070389162780.jpg`,
            // altText: 'Slide 1',
            // caption: 'Slide 1',
        },
        {
            src: `https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg`,
            // altText: 'Slide 2',
            // caption: 'Slide 2',
        },
        {

            src: `https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg`,
            // altText: 'Slide 3',
            // caption: 'Slide 3',



        }
    ];


    return (
        <Fragment>
            <div className='property-heading'>
                <h1>Properties</h1>
                {/* <div className='searchbar'>
                    <label>Search by Symbol:</label>
                    <input type="text" placeholder='Search by Location' onChange={handleSearch} />
                </div> */}
            </div>
            <Row className='m-0'>
                <Col md='12'>
                    {/* <div className="mian-proprty-div" data-animate-effect="fadeIn">
                        <div className="fh5co-property" >
                            <div className="custom-carousel">
                                <UncontrolledCarousel  {...settings} items={items} />
                            </div>                       
                            <div className="fh5co-property-innter">
                            <span className="rented">Islamabad</span><span className="rented">Rented</span>
                                <div className='contain-div' onClick={() => handleNavigation()}>
                                    <h5>House no 45,Street 45,E11/4</h5>
                                    <div className="price-status">
                                        <span className="price">PKR 450000 </span>
                                    </div>
                                    <p className="fh5co-property-specification">
                                        <span><strong>4567</strong>Sq Ft</span>
                                    </p>
                                    <p>CLick for more details....</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Pagination properties={properties} itemsPerPage={5} />
                 
                </Col>
            </Row>
        </Fragment>
    )
}

export default Properties