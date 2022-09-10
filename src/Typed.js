import React from 'react'
import Typewriter from "typewriter-effect"
const Typed = () => {
  return (
    <div className='typewriter'>
      <Typewriter
        options={{
          strings: [
            'bienvenue chez',
            'dieuf dieul couture',
            'appelez-nous au numéro',
            '77 925 85 08',
            '76 255 54 87',
            "Heures d'ouverture",
            'Du Lundi au Samedi 9h à 21h',
          ],

          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )
}

export default Typed