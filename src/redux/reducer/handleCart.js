const cart = [];

const handleCart = (state = cart, action) => {
  const orderData = (cart) => {
    fetch("http://localhost:3000/cartdetails/cart", {
      method: "DELETE",
      // body: JSON.stringify({
      //   cartdetails: JSON_REMOVE(cartdetails, '$[*]')
      // })
    })
      .then((response) => {
        if (response.status === 204) {
          // Deletion successful, the resource was removed (status 204 No Content)
          console.log("Data deleted successfully");
        } else {
          // Handle any potential errors or non-204 status codes
          console.error("Error deleting data");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch("http://localhost:3000/cartdetails", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ cart }),
    })
      .then((res) => {
        console.log(res);
        //  toast.success("Checkout successfully.");
        //  navigate("/order");
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Failed: " + err.message);
      });
  };
  const rest = action.payload;
  switch (action.type) {
    case "ADDITEM":
      //  check if Rest is Already Exist
      const exist = state.find((x) => x.id === rest.id);
      if (exist) {
        // Increase the Quantity
        return state.map((x) =>
          x.id === rest.id ? { ...x, qty: x.qty + 1 } : x
        );
        //  orderData(state);
        //  return state;
      } else {
        const rest = action.payload;
        const gg = [
          ...state,
          {
            ...rest,
            qty: 1,
          },
        ];
        orderData(gg);
        return gg;
      }
    // orderData(state);

    case "DELTITEM":
      const exist1 = state.find((x) => x.id === rest.id);
      console.log("delete");
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        console.log("cart si th");
        return state.map((x) =>
          x.id === rest.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};
export default handleCart;
