// For Add Item to Cart 
 export const addCart = (rest) => {
    return{
        type : "ADDITEM",
        payload : rest
    }
 }


 // For Delete Item to Cart 
 export const delCart = (rest) => {
    return{
        type : "DELTITEM",
        payload : rest
    }
 }