import { Carousel } from 'react-responsive-carousel';
import { Component } from 'react';
import React from 'react'
import "./Home.css";
import Resturant from './Resturant';

class Home extends Component {
    
    render() {
        return (
            <>
            <Carousel className='main-slide'>
                <div>
                    <img src="assets/bg 1.png"  alt='logo' height="600px" width="200px"/>
                     
                </div>
                <div>
                    <img src="assets/bg 2.png"  alt='logo' height="600px" width="200px"/>
                    
                </div>
                <div>
                    <img src="assets/bg 3.png"  alt='logo' height="600px" width="200px"/>
                    
                </div>
                <div>
                    <img src="assets/bg 4.png"   alt='logo'height="600px" width="200px"/>
                    
                </div>
                      
            </Carousel>
            <Resturant/>
            </>
           
        );
    }
};

export default Home;
