import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment'
import { useSelector } from 'react-redux';



const Order = () => {
    const [orderData, setOrderData] = useState({});
    const [loading, setLoading] = useState(true);

    const state = useSelector((state) => state.handleCart);

    useEffect(() => {
        // Use the URL of your JSON data
        fetch('http://localhost:3000/checkoutDetails')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setOrderData(data[data.length-1]);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []); // The empty array means this effect runs once when the component mounts

    const getTotalPrice = () => {
        return state.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2);
      };
    

    if (loading) {
        return <div>Loading...</div>;
    }

    
    const order= (rest) => {
        console.log(rest, 'gggggggggg')
        return(
            <>
                <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={rest.url} alt={rest.foodName} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{rest.foodName}</h3>
                            <p className="lead fw-bold">
                                {rest.qty} X ${rest.price} = ${rest.qty * rest.price}
                            </p>
                            <div className="col-md-4">
                            <p >ID:- <b>{orderData.orderid}</b></p>
                            <p>Username:- <b>{orderData.username} </b></p>
                            <p>Name:- <b> {orderData.Firstname} </b></p>
                            <p>Date:- <b>{moment().format('Do MMMM YYYY')}</b></p>
                            <p>Time:- <b>{moment().format('h:mm:ss a')}</b></p>
                            <p>Address:- <b>{orderData.address.street} </b></p>
                            <p>Zip:- <b>{orderData.zip} </b></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </>
            
        )

    }
    return (
        <div>
            
            {state.length !== 0 && state.map(order)}
            <p>Total: ${getTotalPrice()}</p>
        </div>
    );

    
}

export default Order;