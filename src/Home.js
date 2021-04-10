import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt= ""></img>
         {/*Product  ->id,title,price,rating,image*/}
            <div className="home_row">
                <Product 
                id="12321341"
                title="The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
                />
                <Product 
                id="12321342"
                title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                price={542}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"
                />
            </div>
            <div className="home_row">
                <Product 
                id="12321343"
                title="Super Mario 3D World + Bowser's Fury - Nintendo Switch"
                price={20.5}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/51r85vkcjML.jpg"
                />
                <Product 
                id="12321344"
                title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                price={542}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/41C4JkSnyzL.jpg"
                />
                <Product 
                id="12321345"
                title="Gearbox Publishing Godfall: Ascended Edition - PlayStation 5 Ascended Edition"
                price={15}
                rating={4}
                image="https://m.media-amazon.com/images/I/81NvNf0WBML._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home_row">
                <Product 
                id="12321346"
                title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
                price={499}
                rating={4}
                image="https://m.media-amazon.com/images/I/51IIMW6-TbL._AC_SY200_.jpg"
                />
            </div>
         </div>
         

    )
}

export default Home
