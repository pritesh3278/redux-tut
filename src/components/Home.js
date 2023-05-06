
import React from 'react'

function Home(props)
{
    console.warn("Home",props)

    return (
        <div>
            
            <h1>Home components</h1> 
             <div className='cart-wrapper'>
             <div className='img-wrapper item'>
                <img src="https://www.91-img.com/pictures/152621-v1-nothing-phone-2-mobile-phone-large-1.jpg?tr=q-80" />
             </div>

             <div className='text-wrapper item'>
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
             </div>

             <div className='btn-wrapper item'>
                <button 
                onClick={()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}
                }> 
                Add to cart </button>

                <button className='remove-cart-btn'
                onClick={()=>{props.removeToCartHandler()}

                }> Remove to cart </button>

             </div>

             </div>
        </div>
    )
}

export default Home