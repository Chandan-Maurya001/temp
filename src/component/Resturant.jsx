import React, {useState, useEffect} from "react";
import axios from "axios";


const Resturant = () => {

 
    const [data, setData] = useState([]);
    const [loading] = useState(false);
     

    // const urlData = (url)=>{
    //   console.log(url+"url is here")
    //   props.restData(url)
    // }
    
 useEffect(() => {
  axios.get("http://localhost:3000/restaurant").then((resp)=>{
        console.log(resp.data);
        setData(resp.data);
     }).catch(error=>console.log(error.message))
 },[]);

   const Loading = () => {
    return(
      <>
         Loading...
      </>
    )
   }
      
   const ShowResturant = () => {
     return(
      <>
      { data.map((rest)=>{
    return( 
    
      <div className="col-md-3 mb-4">
      <div class="card h-100 text-center p-4 ">
      <img src={rest.url} class="card-img-top" alt="logo" height="250px"/>
      <div class="card-body">
      <h5 class="card-title mb-0 fw-bold mb-3">{rest.name.substring(0,12)}..</h5>
      <a href="/foodcatagory" class="btn btn-outline-dark">See Food</a>
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
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder 
               text-center">Resturants</h1>
               <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading/> : <ShowResturant/>}
          </div>
        </div>

      </div>
    )

}
    
export default Resturant;
