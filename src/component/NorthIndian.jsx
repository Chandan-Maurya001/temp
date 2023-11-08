import axios from "axios";
import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addCart } from "../redux/action";


const NorthIndian = () => {
  const [data, setData] = useState([]);
  const [loading] = useState(false);
  const {link} = useParams();

  const dispatch = useDispatch();
  const addRest = (rest) => {
      dispatch(addCart(rest));
  }

  
  useEffect(() => {
    console.log("http://localhost:3000/"+link)
    axios
      .get(`http://localhost:3000/${link}`)
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((error) => console.log(error.message));
  }, [link]);

  const Loading = () => {
    return <>
              Loading...
           </>;
  };

  //   const  loadFoodItem = (event,url)=>{
  //     event.preventDefault();
  //     axios.get(url).then((resp) => {
  //         console.log(resp.data);
  //         setFoodData(resp.data);
  //       }).catch(error => console.log(error.message))
  //     console.log(url);
  //     }

  const ShowDishItem = (rest) => {
    return (
      <>
        {data.map((rest) => {
          return (
            <div className="col-md-3 mb-4" key={rest.id}>
              <div class="card h-100 text-center p-4 ">
                <img
                  src={rest.url}
                  class="card-img-top"
                  alt="logo"
                  height="250px"
                />
                <div class="card-body">
                  <h5 class="card-title mb-0 fw-bold mb-3">
                    {rest.foodName}..
                  </h5>
                  <p class="card-text lead fw-bold">${rest.price}</p>
                  <NavLink
                    to="#"
                    className="btn btn-outline-dark" onClick={()=>addRest(rest)}
                  >
                    Add to cart
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    
    <div>
      <div className="container my-4 py-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1
              className="display-6 fw-bolder 
             text-center"
            >
              {link}
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowDishItem />}
        </div>
      </div>
    </div>
  );
};
export default NorthIndian;
