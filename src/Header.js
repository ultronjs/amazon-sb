import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue} from "./StateProvider"
import { auth } from "./firbase"


function Header() {

    const [{ basket,user }] = useStateValue();
    function login(){
        if(user){
            //signout
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            {/*Logo on the left -> img*/}
            <Link to = "/">
             <img className="header_logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt= "Amazon" />
            </Link>
           
            {/*Search box*/}
            <div className="header_search">
                <input className="header_seacrhInput" placeholder="Search"></input>
                <SearchIcon className="header_seacrhIcon"/>
            </div>
            {/*3 links */}
            <div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                <div onClick={login} className="header_option">
                    <span className="header_option_1">Hello {user?.email} </span>
                    <span className="header_option_2">{!user?"Sign In":"Sign Out"}</span>
                </div>
                </Link>
                  <Link to="/login" className="header_link">
                <div className="header_option">
                    <span className="header_option_1">Returns </span>
                    <span className="header_option_2">Orders</span>
                </div>
                </Link>
                  <Link to="/login" className="header_link">
                <div className="header_option">
                    <span className="header_option_1">Your</span>
                    <span className="header_option_2">Prime</span>
                </div>
                </Link>

            </div>
            {/*Bucket icon with the number*/}

            <Link to="/checkout" className="header_link">
                <div className="header_basket">
                    <ShoppingBasketIcon className="header_basket_icon" />
                    <span className="header_option_2 header_basket_count">{basket?.length}</span>
                </div>
            </Link>
            

        </nav>
    )
}

export default Header
