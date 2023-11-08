import React , { useState, useEffect } from 'react';
import axios from 'axios';

const SouthIndian = () => {

    const [data, setData] = useState([]);
    const [loading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/southIndia").then((resp) => {
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
//   const  loadFoodItem = (event,url)=>{
//     event.preventDefault();
//     axios.get(url).then((resp) => {
//         console.log(resp.data);
//         setFoodData(resp.data);
//       }).catch(error => console.log(error.message))
//     console.log(url);
//     }
 

  const ShowDishItem = () => {

    return (
      <>
        {data.map((rest) => {
          return (
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4 ">
                <img src={rest.url} class="card-img-top" alt="logo" height="250px" />
                <div class="card-body">
                  <h5 class="card-title mb-0 fw-bold mb-3">{rest.foodName}</h5>
                  <a href="/" class="btn btn-outline-dark">Buy Now</a>
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
             text-center">South Indian</h1>
             <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading/> : <ShowDishItem/>}
        </div>
      </div>

    </div>
  )

}
    export default SouthIndian;
