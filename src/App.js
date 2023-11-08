import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom";
import Resturant from './component/Resturant';
import Food from './component/Food';
import NorthIndian from './component/NorthIndian';
import SouthIndian from './component/SouthIndian';
import Italian from './component/Italian'
// import NorthIndians from './component/NorthIndians';
import Cart from './component/Cart';
import Registeration from './component/Register'
import Login from './component/Login';
import { useState} from 'react';
import { ToastContainer } from 'react-toastify';
import Checkout from './component/Checkout';
import Contact from './component/Contact';
import Order from './component/Order';
import Demo from './component/Demo';


function App() {
 
  const [,setUrl]=useState("");

  const getData = (dat)=>{
    console.log(dat+"getDatawork");
    setUrl(dat);
    console.log(dat+"getDatawork")
  }
 
 return (
    <>
   
    <Navbar/>
    <ToastContainer theme='colored' position='top-center'></ToastContainer>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/resturant" element={<Resturant />} />
    <Route exact path="/foodcatagory" element={<Food  restData={getData}/>} />
    <Route exact path="/dish//:link" element={<NorthIndian/>} /> 
    <Route exact path="/southIndia" element={<SouthIndian/>} /> 
    {/* <Route exact path="/foodBuy" element={<NorthIndians/>} />  */}
    <Route exact path="/italian" element={<Italian/>} /> 
    <Route exact path="/cart" element={<Cart/>} />
    <Route exact path="/sing-up"  element={<Registeration/>} />
    <Route exact path="/login"  element={<Login/>} />
    <Route exact path='checkout' element={<Checkout/>} />
    <Route exact path='/contact' element={<Contact/>} />
    <Route exact path='/order' element={<Order/>} />
    <Route exact path='/demo' element={<Demo/>} />
    </Routes>
    </>
    
  );
}

export default App;
