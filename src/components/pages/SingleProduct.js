import React,{useRef,useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import { useGlobalContext } from '../../content'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from '../../Navbar'
import GridLoader from 'react-spinners/GridLoader'


const SingleProduct = () => {
  const imgDiv = useRef(null)
   const { id } = useParams()
  const {products,index,setIndex} = useGlobalContext()
 
  const product = products.filter((product)=>{
    return product.id === id
  })
    
 const handleMouse = (e) => {
   const { left, top, width, height } = e.target.getBoundingClientRect()
   const x = ((e.pageX - left) / width) * 100
   const y = ((e.pageY - top) / height) * 100
   imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
 }
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
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
          <div className='singleProduct'>
            {product.map((product) => {
              const { images, name, content, description,price } = product
              return (
                <>
                  <div className='singleProductContainer1'>
                    <div>
                      <article
                        className='big-img'
                        onMouseMove={handleMouse}
                        style={{ backgroundImage: `url(${images[index]})` }}
                        ref={imgDiv}
                        onMouseLeave={() =>
                          (imgDiv.current.style.backgroundPosition = `center`)
                        }
                      ></article>
                      <div className='small-img-container'>
                        {images.map((img, index) => {
                          return (
                            <article className='small-img-details' key={index}>
                              <div className='small-img'>
                                <img
                                  src={img}
                                  alt=''
                                  onClick={() => setIndex(index)}
                                />
                              </div>
                            </article>
                          )
                        })}
                      </div>
                    </div>
                    <article className='single-details'>
                      <h3>{name}</h3>
                      <h2>
                        {price} <span>CFA</span>
                      </h2>
                      <p>{content}</p>
                      <p>{description}</p>
                      <div className='container-color'>
                        {product.colors.map((color, index) => {
                          return (
                            <button
                              className='color-btn'
                              key={index}
                              style={{ background: color }}
                            ></button>
                          )
                        })}
                      </div>
                      <div className='container-size'>
                        {product.sizes.map((size, index) => {
                          return (
                            <div className='size' key={index}>
                              <button className='btn-size'>{size}</button>
                            </div>
                          )
                        })}
                      </div>
                    </article>
                    <div className='backHome'>
                      <Link to={`/`}>
                        <h3>retour au accueil</h3>
                      </Link>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
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

export default SingleProduct