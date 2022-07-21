import React from 'react';
import Navbar from '../../components/Commons/Navbar/Navbar';

import './Homepage.scss';

const Homepage = () => {

    return (

        <div className="container__homepage">
            <div className="homepage__backgroundlinear"></div>
            <div className="homepage__content">
                
                <Navbar/>

            </div>             
        </div>

    );

};

export default Homepage;