import React,{useState,useEffect} from 'react'
import Navbar from '../../Navbar'
import banner from '../../images-1/pacobannerend.jpg'
import banner2 from '../../images-1/pacob1.png'
import Footer from '../../Footer'
import { FaWhatsapp } from 'react-icons/fa'
import GridLoader from 'react-spinners/GridLoader'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import videoAbout from '../../images-1/aboutvideop.mp4'

const About = () => {
 const [loading, setLoading] = useState(false)
 useEffect(() => {
   setLoading(true)
   setTimeout(() => {
     setLoading(false)
   }, 2000)
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
          <section className='section-center about'>
            <div className='about-banner'>
              <div className='about-banner'>
                <img src={banner} alt='' />
              </div>
              <div className='container-about'>
                <article className='about-details'>
                  <h2>Pourquoi nous choisissez-vous?</h2>
                  <div className='about-underline'></div>
                  <p>LA COUTURE AU SÉNÉGAL, PLUS QU’UNE PASSION, UN MÉTIER !</p>
                  <p>
                    Au Sénégal, l’art de bien s’habiller a toujours été
                    omniprésent dans le quotidien des Sénégalais. En boubou
                    traditionnel ou en tenue de ville, les Sénégalais aiment
                    très bien se vêtir.
                  </p>
                  <p>
                    Et surtout lors des grandes cérémonies culturelles et
                    religieuses (baptêmes, mariages, Tabaski, Korité etc) pour
                    un pays avec 95% de musulmans. Sans oublier les fêtes
                    chrétiennes telles que : Noel (24 décembre) et la
                    Saint-Sylvestre (31 décembre). L’art de bien s’habiller est
                    une vieille tradition chez les Sénégalais
                  </p>
                </article>
                <article className='about-info'>
                  <h3>Chez le maitre-tailleur…</h3>
                  <div className='about-underline'></div>
                  <p>
                    je m'appelle saliou ndiaye œuvre toujours dans la tradition
                    artisanale avec le respect des métiers liés à l’Art et à des
                    savoirs faire Africains. Dieuf Dieul Couture tire sa force
                    du multiculturalisme. Le couturier adore les voyages, les
                    découvertes et la nature. Ses collections s’inspirent en
                    partie de ses périples et de ses rencontres. Très à l’écoute
                    de ses clientes, il se complait à les surprendre en
                    présentant des créations en accord avec ses convictions :
                    des confections élaborées avec des tissus nobles, issus de
                    matières naturelles souvent retravaillées et brodées. Depuis
                    ses premiers pas, auprès d'un chef couturier, Saliou Ndiaye
                    a toujours travaillé dans la plus pure tradition “Haute
                    Couture” et s’adresse à toutes celles et ceux qui
                    recherchent l’élégance et l’exception. Puisant son
                    inspiration au tréfonds des cultures du monde, Saliou Ndiaye
                    est aujourd’hui un acteur incontournable de la mode
                    Sénégalaise et Africaine. Plébiscité par le monde du
                    stylisme, Dieuf Dieul Couture a su séduire une clientèle
                    internationale par le choix des matières, le glamour, la
                    douceur et l’esprit du détail.
                  </p>
                </article>
                <article className='about-banner-img'>
                  <img src={banner2} alt='' />
                </article>
                <article className='about-video'>
                  
                  <Video
                    autoPlay
                    loop
                    muted
                    controls={[
                      'PlayPause',
                      'Seek',
                      'Time',
                      'Volume',
                      'Fullscreen',
                    ]}
                    poster=''
                    onCanPlayThrough={() => {}}
                  >
                    <source src={videoAbout} type='video/webm' />
                  </Video>
                </article>
              </div>
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

export default About