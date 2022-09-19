import React,{useState,useEffect} from 'react'
import GridLoader from 'react-spinners/GridLoader'
import videoHome from '../../images-1/adzo.video.mp4'
import {MovingComponent} from "react-moving-text"

import banner from '../../images-1/pacobannerend.jpg';
import { FaWhatsapp } from 'react-icons/fa'
import b1 from '../../images-1/b1 1.png';
import b2 from '../../images-1/b2 1.png';
import b3 from '../../images-1/b3 1.png';
import b4 from '../../images-1/b4.png'
import b5 from '../../images-1/b5.jpg'
import b6 from '../../images-1/marriage1.png';
import b7 from '../../images-1/baptem1.png';
import b8 from '../../images-1/senegal1.png'
import b9 from '../../images-1/senegal2.png'



import Product from './Product';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';




const Home = () => {
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
          <div className='banner-video'>
            <video src={videoHome} autoPlay loop muted></video>
            <div className='banner-video-content'>
              <div className='banner-video-overlay'></div>
              <article className='banner-video-info'>
                <MovingComponent
                  type='spin'
                  duration='1200ms'
                  delay='0s'
                  direction='normal'
                  timing='ease-in-out'
                  iteration='15'
                  fillMode='none'
                >
                  <h3>bievenue chez</h3>
                </MovingComponent>
              </article>
              <article className='banner-video-info'>
                <MovingComponent
                  type='fadeInFromTop'
                  duration='1000ms'
                  delay='0s'
                  direction='normal'
                  timing='ease-in-out'
                  iteration='15'
                  fillMode='none'
                >
                  <h3 className='video-info-2'>dieuf dieul couture</h3>
                </MovingComponent>
              </article>
              <article className='banner-video-info'>
                <MovingComponent
                  type='fadeOutToRight'
                  duration='400ms'
                  delay='0s'
                  direction='normal'
                  timing='ease-in-out'
                  iteration='15'
                  fillMode='none'
                >
                  <h3>la couture autrement</h3>
                </MovingComponent>
              </article>
              <article className='banner-video-info'>
                <MovingComponent
                  type='shadow'
                  duration='500ms'
                  delay='0s'
                  direction='normal'
                  timing='ease-in-out'
                  iteration='15'
                  fillMode='none'
                >
                  <h3 className='video-info-2'>
                    cite-safco-croisement-tivaouane-peulh
                  </h3>
                </MovingComponent>
              </article>
            </div>
          </div>
          <section className='banner section-center'>
            <div className='banner-center'>
              <img src={banner} alt='' />
            </div>
            <div className='banner-details'>
              <Link to={`/tenu/`}>
                <button className='btn btn-shop'>acheter ici</button>
              </Link>
            </div>
          </section>
          <section className='section-cente first-gategory'>
            <div className='category-title'>
              <h3>Acheter par catégorie</h3>
            </div>
            <div className='category-container'>
              <article className='category-home-page home-1'>
                <img src={b1} alt='' />
                <div className='category-details'>
                  <h3>Tenue De Sport</h3>
                </div>
              </article>
              <article className='category-home-page home-2'>
                <img src={b2} alt='' />
                <div className='category-details'>
                  <h3>BLOUSE De Travail</h3>
                </div>
              </article>
              <article className='category-home-page home-3'>
                <img src={b3} alt='' />
                <div className='category-details'>
                  <h3>Boubou Traditionnel</h3>
                </div>
              </article>
              <article className='category-home-page home-4'>
                <img src={b4} alt='' />
                <div className='category-details'>
                  <h3>UNIFORME SCOLAIRE</h3>
                </div>
              </article>
              <article className='category-home-page home-5'>
                <img src={b5} alt='' />
                <div className='category-details'>
                  <h3>Tenue De TRAVAIL</h3>
                </div>
              </article>
            </div>
          </section>
          <Product />
          <div className='container-ceremony'>
            <article className='ceremony c1'>
              <img src={b6} alt='' />
            </article>
            <article className='ceremony c2'>
              <img src={b7} alt='' />
            </article>
            <article className='ceremony c3'>
              <img src={b8} alt='' />
            </article>
            <article className='ceremony c4'>
              <img src={b9} alt='' />
            </article>
          </div>

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

export default Home