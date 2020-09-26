import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../../Images/web.svg';
import Common from '../Common/Common';
const Home = () => {
    return (
        <>
   <Common  
        name='Grow your business with'
            imgsrc={web} 
             visit="/service" 
            btnname="Get started" 

   />
        </>
    );
};

export default Home;