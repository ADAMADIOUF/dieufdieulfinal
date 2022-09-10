import React from 'react'


import { useGlobalContext } from '../../content'
import { Link} from 'react-router-dom';
import home2 from '../../../src/images-1/bannerp2.png'



const Product = () => {
 const{products} = useGlobalContext()
 
  return (
    <>
    
      <section className='section-center products'>
        <div className='product-title'>
          <h3>tous nos produits</h3>
        </div>
        <div className='container-products'>
          {products.map((product) => {
            const { images, name, id ,price} = product
            return (
              <div className='product-details' key={id}>
                <Link to={`/product/${id}`}>
                  <div className='product-img'>
                    <img src={images[0]} alt='' className='img-product' />
                    <img src={images[1]} alt='' className='img-product-1' />
                  </div>
                </Link>
                <div className='product-by'>
                  <Link to={`/product/${id}`}>
                    <button className='btn btn-product'>plus de details</button>
                  </Link>
                </div>
                <div className='product-info'>
                  <h3>{name}</h3>
                  <p>{price} <span>CFA</span> </p>
                </div>
              </div>
            )
          })}
        </div>
        <div className='banner-products'>
          <div className='container-banner-products'>
            <article className='banner-products-details'>
              <img src={home2} alt='' />
            </article>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Product