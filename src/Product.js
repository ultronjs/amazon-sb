import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product(props) {

    const[{ basket},dispatch] =  useStateValue();

    const addToBasket = () => {
        //add item to the basket...
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:props.id,
                title:props.title,
                image:props.image,
                rating:props.rating,
                price:props.price
            }
        })


    }
    return (
        <div className="product">
            <div className="product_info">
                <p className="product_title">{props.title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product_rating">
                {Array(props.rating)
                    .fill()
                    .map((_)=> (
                        <p>⭐</p>
                    ))
                }
                </div>
            </div>
           
            <img className="product_img" src={props.image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
            
        </div>
    )
}

export default Product
