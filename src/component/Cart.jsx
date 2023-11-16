import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const [cartData, setCartData] = useState([]);
  const [foodData, setFoodData] = useState([]); // State to store food data
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    // Fetch food data from your db.json
    fetch("http://localhost:3000/cartdetails") // Replace with the actual URL of your db.json
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let items = [];
        for (let i = 0; i < data.length; i++) {
          console.log(data[i]);
          const datas = data[i]?.cart?.map((item) => {
            return item;
          });
          items = [...items, ...datas];
        }
        console.log(items);
        setCartData(items);
        setIsDataFetched(true);
      })
      .catch((error) => {
        console.error("Error fetching food data: ", error);
      });
  }, [isDataFetched]);

  const handleAdd = (item) => {
    dispatch(addCart(item));
    addToCart(item);
  };

  const handleDel = (item) => {
    dispatch(delCart(item));
    removeFromCart(item);
  };

  function addToCart(product) {
    const updatedCartData = [...cartData]; // Create a copy of cartData
    // Check if the product is already in the cart
    const existingItem = updatedCartData.find(
      (item) => item.product_id === product.product_id
    );

    if (existingItem) {
      // If the product is in the cart, update its quantity
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.quantity * existingItem.price;
    } else {
      // If the product is not in the cart, add it
      updatedCartData.push({
        product_id: product.product_id,
        name: product.name,
        url: product.url,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
      });
    }
    // Update the cart data on your JSON server
    updateCartData(updatedCartData);
  }

  function removeFromCart(product) {
    const updatedCartData = [...cartData]; // Create a copy of cartData
    // Find the index of the product in the cart
    const productIndex = updatedCartData.findIndex(
      (item) => item.product_id === product.product_id
    );
    if (productIndex !== -1) {
      // If the product is found, decrease its quantity or remove it from the cart
      if (updatedCartData[productIndex].quantity > 1) {
        updatedCartData[productIndex].quantity -= 1;
        updatedCartData[productIndex].totalPrice =
          updatedCartData[productIndex].quantity *
          updatedCartData[productIndex].price;
      } else {
        updatedCartData.splice(productIndex, 1);
      }
      // Update the cart data on your JSON server
      updateCartData(updatedCartData);
    }
  }

  function updateCartData(updatedData) {
    // Update the cart data on your JSON server
    fetch("http://localhost:3000/cartdetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then(() => {
        setCartData(updatedData); // Update the cartData state with the new data
      })
      .catch((error) => {
        console.error("Error updating cart data: ", error);
      });
  }

  const getTotalPrice = () => {
    return state
      .reduce((total, item) => total + item.qty * item.price, 0)
      .toFixed(2);
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const cartItems = (rest) => {
    return (
      <>
        <div
          key={rest.product_id}
          className="px-4 my-5 bg-light rounded-3 py-5"
        >
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={rest.url}
                  alt={rest.foodName}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{rest.foodName}</h3>
                <p className="lead fw-bold">
                  {rest.qty} X ${rest.price} = ${rest.qty * rest.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(rest)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(rest)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const buttons = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outlineDark mb-5 w-25 mx-auto"
          >
            Proceed to Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {cartData?.length !== 0 && cartData?.map(cartItems)}{" "} */}
      {/* Display food data */}
      {/* {state.length !== 0 && buttons()}
      <p>Total: ${getTotalPrice()}</p> */}
      {!isDataFetched ? (
        <>
          <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
              <div className="row">
                <h3>Loadin your cart...</h3>
              </div>
            </div>
          </div>
        </>
      ) : isDataFetched && cartData.length === 0 ? (
        <>
          <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
              <div className="row">
                <h3>Your Cart is Empty</h3>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {cartData.map((rest) => {
            return (
              <>
                <div
                  key={rest.product_id}
                  className="px-4 my-5 bg-light rounded-3 py-5"
                >
                  <div className="container py-4">
                    <div className="row justify-content-center">
                      <div className="col-md-4">
                        <img
                          src={rest.url}
                          alt={rest.foodName}
                          height="200px"
                          width="180px"
                        />
                      </div>
                      <div className="col-md-4">
                        <h3>{rest.foodName}</h3>
                        <p className="lead fw-bold">
                          {rest.qty} X ${rest.price} = ${rest.qty * rest.price}
                        </p>
                        <button
                          className="btn btn-outline-dark me-4"
                          onClick={() => handleDel(rest)}
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                        <button
                          className="btn btn-outline-dark"
                          onClick={() => handleAdd(rest)}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="container">
            <div className="row">
              <NavLink
                to="/checkout"
                className="btn btn-outlineDark mb-5 w-25 mx-auto"
              >
                Proceed to Checkout
              </NavLink>
            </div>
          </div>
          <p>Total: ${getTotalPrice()}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
