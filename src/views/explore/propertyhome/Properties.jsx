import React, { Fragment, useState } from 'react'
import { Col, Row } from 'reactstrap'
import pro3 from '../../../assets/images/pro3.jpg'
import { Link, useNavigate } from 'react-router-dom';
import '../../../CSS/Properties.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pagination from '../../Paginations/PropertiesPagination/Index'
//slider 
import { UncontrolledCarousel } from 'reactstrap';
const Properties = () => {
    const datas = Array.from({ length: 100 }, (_, index) => `Item PKR{index + 1}`);
    const propertyData = [
        {
            id: 1,
            name: 'House E-11/4',
            address: 'House no 45, Street 45, E-11/4',
            city: 'Islamabad',
            country: 'Pakistan',
            type: 'FLat',
            price: "PKR 6575",
            // propertyDescription: 'Description for Property 1',
            // image: 'https://azizidevelopments.com/assets/images/projects/1603263070389162780.jpg',
        },
        {
            id: 2,
            name: 'Apartment DHA/2',
            address: 'Apartment no 65, Street 1, DHA/2',
            city: 'Lahore',
            country: 'Pakistan',
            type: 'Apartment',
            price: "PKR 1598",
            // propertyDescription: 'Description for Property 2',
            // image: 'https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg',
        },
        {
            id: 3,
            name: 'House 4',
            address: 'House no 4, Street 7, Peshawar ',
            city: 'Peshawar',
            country: 'Pakistan',
            type: 'Home',
            price: 'PKR 1500',
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
            price: "PKR 1595",
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
            price: "PKR 15989",
            // propertyDescription: 'Description for Property 2',
            // image: 'https://azizidevelopments.com/assets/images/projects/15795279721750900140.jpg',
        },
        {
            id: 6,
            name: 'Aparment F-7',
            address: 'Aparment no 67, Street 4, F-7',
            city: 'Islamabad',
            country: 'Pakistan',
            type: 'Apparment',
            price: 'PKR 78901',
            // propertyDescription: 'Description for Property 2',
            // image: 'https://azizidevelopments.com/assets/images/projects/1624972383238283745.jpg',
        },

        // Add more properties as needed
    ];
    const navigate = useNavigate();
    const handleNavigation = (prop) => {

        console.log("prop", prop)
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
                    <Pagination itemsPerPage={5} properties={propertyData} />
                </Col>
            </Row>
        </Fragment>
    )
}

export default Properties