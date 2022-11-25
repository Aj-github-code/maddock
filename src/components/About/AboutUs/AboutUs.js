import React from 'react'
import { About_founder } from '../About_founder/About_founder'
import './AboutUs.css'

export const AboutUs = () => {
  return (
    <>
        <div className='container'>
            
            <div className='bg'>
                <div id='about_company'>
                <div className='aboutus-title'>
                    THE COMPANY
                </div>
                <div className='aboutus-desc'>
                    From making high-budget blockbusters to genre-defining films, from working with the biggest actors of the industry to launching young talent in films, from being the distribution house with the strongest global foothold to pioneering new formats of distribution and exploring newer territories, from launching compelling story-telling forms to the numerous digitally led innovations, Yash Raj Films (YRF) has maintained its flagship position across all verticals since its genesis.
                    <br/><br/>
                    YRF was founded by the Late Yash Chopra, a veteran of the Indian film industry, in 1970. It’s the only privately held and fully integrated studio in India producing and having produced over 80 films. YRF is now a 50-year-strong production house and a vertically integrated studio in every sense, controlling almost every part of the value chain from production to post production, domestic & international distribution, music & home entertainment, marketing, design, digital, licensing, merchandising, talent management, brand partnerships, music studios and film studios - all in-house facilities, which make it one of the most coveted entertainment conglomerates in the country.
                    <br/><br/>
                    YRF has its own state-of-the-art fully integrated studio that houses shooting stages, sound studios and is headquartered at one of Mumbai’s prime properties where the heart of the entertainment business beats.
                    <br/><br/>
                    Over the last five decades, YRF’s catalogue of films could be easily India’s most enviable film catalogue in the entertainment business. YRF’s top grossers have already placed the company in the big league of producers worldwide, making it one of the largest film-making entities in the nation.
                    <br/><br/>
                    YRF has been one of the key makers of modern cinema and has heralded cinematic trends since its inception - the way films are made, the way films are marketed and the way films are consumed.
                </div>
                </div>
                <About_founder/>
            </div>
        </div>
    </>
  )
}
