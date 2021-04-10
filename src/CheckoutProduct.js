import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue} from "./StateProvider"

function CheckoutProduct(props) {

    const[{ basket},dispatch] =  useStateValue();


    const removeItem = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:props.item.id,

        })

    }
    return (
         <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={props.item.image} alt={props.item.title}></img>
            <div className="checkoutProduct_info">
                 <p className="checkoutProduct_title">{props.item.title}</p>
                 <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{props.item.price}</strong>
                 </p>
                 <div className="checkoutProduct_rating">
                   {Array(props.item.rating)
                    .fill()
                    .map((_)=> (
                        <p>⭐</p>
                    ))
                   }
                 </div>
                 <button onClick={removeItem}>Remove from basket</button>

            </div>
            
        </div>
    )
}

export default CheckoutProduct

