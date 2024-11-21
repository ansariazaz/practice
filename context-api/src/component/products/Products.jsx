import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({products}) => {
  return (
    <div>
       <div className="products">
        {products.map((item) => (
          <Link key={item.id} to={`/products/${item.id}`} className='product'>
            <img src={item.thumbnail} alt="" />
            <p>{item.title}</p>
            <button className='product-btn'>Buy Now</button>
          </Link>
        ))}
      </div>  
    </div>
  )
}

export default Products