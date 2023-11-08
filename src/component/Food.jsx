import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Food = (props) => {

  const [data, setData] = useState([]);
  const [loading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/foodcatagory").then((resp) => {
      console.log(resp.data);
      setData(resp.data);
    }).catch(error => console.log(error.message))
  }, [])

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }
  const urlData = (url)=>{
    console.log(url+"url is here")
    props.restData(url)
  }
 

  const ShowFoodCatagory = () => {

    return (
      <>
        {data.map((rest) => {
          return (
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4 ">
                <img src={rest.url} className="card-img-top" alt="logo" height="250px" />
                <div className="card-body">
                  <h5 className="card-title mb-0 fw-bold mb-3">{rest.name.substring(0, 12)}..</h5>
                  <a  href={`/dish/${rest.foodUrl}`} onClick={()=>urlData(rest.foodUrl)} className="btn btn-outline-dark">See Food</a>
                </div>
              </div>
            </div>
          )
        })}
      </>
    );
  };
  

  return (
    <div>
      <div className="container my-4 py-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder 
             text-center">Food Catagory</h1>
             <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading/> : <ShowFoodCatagory/>}
        </div>
      </div>

    </div>
  )

}
    export default Food;
