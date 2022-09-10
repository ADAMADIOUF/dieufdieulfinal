import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import{MdEmail} from "react-icons/md"
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation2 } from 'react-icons/im'
import Footer from '../../Footer'
import {MovingComponent} from "react-moving-text"
import Navbar from '../../Navbar'

const Contact = () => {
  return (
    <>
      
      <Navbar />
      <section className='section-center contact'>
        <div className='contact-first-container'>
          <article className='contact-img'>
            <MovingComponent
              type='fadeInFromLeft'
              duration='1000ms'
              delay='0s'
              direction='normal'
              timing='ease'
              iteration='1'
              fillMode='none'
            >
              <img src='/images-2/bannerpaco.jpg' alt='' />
            </MovingComponent>
          </article>

          <article className='contact-info'>
            <MovingComponent
              type='fadeInFromRight'
              duration='1000ms'
              delay='0s'
              direction='normal'
              timing='ease'
              iteration='1'
              fillMode='none'
            >
              <h3>créer quelque chose ? c'est Notre passion</h3>
              <p>
                Nouvelle ouverture de notre entreprise{' '}
                <span>dieuf dieul couture</span> SUR LA ROUTE de tivaoune peulh
                Niacoulrab cite safco . PLUS D'ESPACE ET DE CONFORT POUR
                TOUJOURS VOUS SATISFAIRE.
              </p>
            </MovingComponent>
          </article>
        </div>
        <h3 className='contact-info-info'>
          Contactez nous pour en savoir plus sur nos offres et savoir comment on
          peut vous aider<span>!</span>
        </h3>
        <div className='container-contact'>
          <article className='contact-details-2'>
            <h2>Address</h2>
            <h3>
              {' '}
              <span>
                <ImLocation2 />
              </span>
              senegal,safco tivaoune peulh{' '}
            </h3>
          </article>
          <article className='contact-details-2 '>
            <h2>Phone</h2>

            <h3>
              {' '}
              <span>
                <BsFillTelephoneFill />
              </span>
              +221 77 925 85 08{' '}
            </h3>
          </article>
          <article className='contact-details-2 email'>
            <h2>Email</h2>

            <h3>
              <span>
                <MdEmail />
              </span>
              dieufdieul@gmail.com{' '}
            </h3>
          </article>
        </div>
        <div className='container-form'>
          <article className='form-details'>
            <form className='form'>
              <h3>nous aimons entendre vos commentaires</h3>
              <input type='text' className='input-form' placeholder='email' />
              <input type='text' className='input-form' placeholder='phone ' />
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                className='input-form'
                placeholder='votre message'
              ></textarea>
              <button className='btn-form'>envoyer votre message</button>
            </form>
          </article>
          <article className='maps'>
            <iframe
              src='https://maps.google.com/maps?q=senegal%20tivaune%20peulh%20&t=&z=13&ie=UTF8&iwloc=&output=embed'
              title='myFrame'
            />
          </article>
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
  )
}

export default Contact