import React,{useState,useEffect} from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { useGlobalContext } from '../../content'
import { Link } from 'react-router-dom'

import Footer from '../../Footer'
import Slider from '../../Slider'
import Navbar from '../../Navbar'
import GridLoader from 'react-spinners/GridLoader'

const Tenu = () => {
 const{productSecond} = useGlobalContext()
 const [loading, setLoading] = useState(false)
 useEffect(() => {
   setLoading(true)
   setTimeout(() => {
     setLoading(false)
   }, 3000)
 }, [])
  return (
    <>
  
      {loading ? (
        <GridLoader
          color={'#ff6600'}
          loading={loading}
          size={50}
          className='loading'
        />
      ) : (
        <>
          <Navbar />
          <Slider />
          <section className='section-center products'>
            <div className='product-title'>
              <h3>BLOUSES DE TRAVAIL PROFESSIONNELLES</h3>
            </div>
            <div className='container-products'>
              {productSecond.map((product) => {
                const { image, name, id } = product
                return (
                  <div className='product-details' key={id}>
                    <Link to={`/productTenu/${id}`}>
                      <div className='product-img'>
                        <img src={image[0]} alt='' className='img-product' />
                        <img src={image[1]} alt='' className='img-product-1' />
                      </div>
                    </Link>
                    <div className='product-by'>
                      <button className='btn btn-product'>
                        plus de details
                      </button>
                    </div>
                    <div className='product-info'>
                      <h3>{name}</h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
          <Footer />
          <div className='chat-box-1'>
            <button>
              <a href=' https://wa.me/221779258508'>
                <FaWhatsapp />
              </a>
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default Tenu