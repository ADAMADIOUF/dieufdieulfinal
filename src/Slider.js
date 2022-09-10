import React, { useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './content'
export default function Slider() {
  const { slide, indexSlide, setIndexSlide } = useGlobalContext()
  useEffect(() => {
    const lastIndex = slide.length - 1
    if (indexSlide < 0) {
      setIndexSlide(lastIndex)
    }
    if (indexSlide > lastIndex) {
      setIndexSlide(0)
    }
  })
  useEffect(() => {
    let slider = setInterval(() => {
      setIndexSlide(indexSlide + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  })
  return (
    <div className='slide'>
      {slide.map((slide, slideIndex) => {
        let slider = 'nextSlide'
        if (slideIndex === indexSlide) {
          slider = 'activeSlide'
        }
        if (
          slideIndex === indexSlide - 1 ||
          (indexSlide === 0 && slideIndex === slide.length - 1)
        ) {
          slider = 'lastSlide'
        }
        const { id, name, title, image } = slide
        return (
          <address className={slider} key={id}>
            <img src={image} alt='' className='img-slide' />
            <div className='slide-info'>
              <h3>{name}</h3>
              <p>{title}</p>
            </div>

            <div className='slide-details'>
              <h2>
                {' '}
                <span className='dieuf'>dieuf dieul couture</span>
              </h2>

              <h3>la qualite c'est ici</h3>
              <Link to={`/productTenu/${id}`}>
                <button className='slide-buy'>acheter ici|</button>
              </Link>
            </div>
          </address>
        )
      })}

      <button
        className='prev-slide'
        onClick={() => setIndexSlide(indexSlide - 1)}
      >
        <FaChevronLeft />
      </button>
      <button
        className='next-slide'
        onClick={() => setIndexSlide(indexSlide + 1)}
      >
        <FaChevronRight />
      </button>
    </div>
  )
}
