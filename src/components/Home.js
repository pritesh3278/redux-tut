import React from 'react'

function Home()
{
    return (
        <div>

            <div className='add-to-cart'>
                 <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>

            <h1>Home components</h1> 
             <div className='cart-wrapper'>
             <div className='img-wrapper item'>
                <img src="https://www.91-img.com/pictures/152621-v1-nothing-phone-2-mobile-phone-large-1.jpg?tr=q-80" />
             </div>

             <div className='img-wrapper item'>
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
             </div>

             <div className='btn-wrapper item'>
                <button>Add to cart</button>
             </div>

             </div>
        </div>
    )
}

export default Home