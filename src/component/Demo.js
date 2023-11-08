import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Demo() {
    useEffect(()=>{
        fetchApi();
    },[])
    const [data, setData] = useState([]);
    const fetchApi = async()=>{
        try{
            const response = await axios.get("http://localhost:3000/cartdetails")
            setData(response.data)
        }catch(error){
            console.log(error)
        }
    }
    console.log(data)
  return (
    <div>
      {
        data.map((data, index)=>
        <li>{data.price}</li>)
      }
    </div>
  )
}

export default Demo
