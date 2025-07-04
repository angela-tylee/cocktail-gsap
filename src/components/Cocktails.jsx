import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: true,
      }, 
    })

    // FIXME: not working
    parallaxTimeline
    .from('#c-left-leaf', {
      x: -200, y: 100 
    })
    .from('#c-right-leaf', {
      x: 100, y: 100 
    })
  })

  return (
    <section id='cocktails' className=''>
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />
    <div className="list">
      <div className="popular">
        <h2>Most popular cocktails:</h2>
        <ul>
          {cocktailLists.map((drinks) => (
            <li key={drinks.name}>
              <div className='md:me-28'>
                <h3>{drinks.name}</h3>
                <p>{drinks.country} | {drinks.detail}</p>
              </div>
              <span>- {drinks.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="loved">
        <h2>Most loved mocktails:</h2>
        <ul>
          {mockTailLists.map((drinks) => (
            <li key={drinks.name}>
              <div className='md:me-28'>
                <h3>{drinks.name}</h3>
                <p>{drinks.country} | {drinks.detail}</p>
              </div>
              <span>- {drinks.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    </section>

  )
}

export default Cocktails