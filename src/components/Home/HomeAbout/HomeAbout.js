import React from 'react'
import { Link } from 'react-router-dom'
import './HomeAbout.css'

export const HomeAbout = () => {
  return (
    <>
        <div className='row' style={{ width: '100%' }}>
            <div className='col-md-12' style={{ width: '100%', display: "flex", justifyContent:"space-between", flexDirection: "row" }}>
            <div className='about-row'>
                <div className='about-title'>ABOUT MADDOCK</div>
                <div className='about-desc'>If it’s magical, it’s Maddock! One of the country’s leading production houses, Maddock Films, founded by Dinesh Vijan, is synonymous for creating content driven cinema that packs a unique punch. May it be Love Aaj Kal, Go Goa Gone, Badlapur, Hindi Medium, Stree, Bala or recent hits like Mimi and Dasvi, Maddock has left no stone unturned in entertaining audiences with fresh and gripping stories across genres. With a vibrant slate of upcoming releases that range from horror-comedy, romance, action, crime thrillers to drama, Maddock’s most awaited projects include Varun Dhawan-Kriti Sanon starrer Bhediya, directed by Amar Kaushik of Stree & Bala fame, as well as Mimi filmmaker Laxman Utekar’s next starring Vicky Kaushal and Sara Ali Khan.</div>
                <Link to='about/about_company'><button type='submit' className='primary-btn about-btn'>
                    view more
                </button></Link>

                <div className='about-title'>ABOUT DINESH VIJAN</div>
                <div className='about-desc desc2'>One of the most revered Indian producers and the primary mind behind Maddock Films, Dinesh Vijan bid farewell to a lucrative banking job to pursue his passion for cinema. His first production was the universally applauded Being Cyrus, followed by a plethora of critical and commercial successes like Love Aaj Kal, Badlapur, Stree, Mimi and Dasvi. A filmmaker who never shies away from thinking out of the box, Dinesh has taken creative risks that very few would. The first member of his family to step into the film world, he firmly believes that no story is born perfect, but every story can be told with perfection. Always adapting to new technologies and evolving sensibilities, Dinesh is a movie pioneer in the truest sense. With Maddock Films, his dream is to tell stories that touch his heart and entertain audiences all over.</div>
                <Link to='about/about_founder'><button type='submit' className='primary-btn about-btn'>
                    view more
                </button></Link>
            </div>

                <div className='about-image'>
                    <img src='../../images/WebpageVideo.gif' alt='' style={{ width: '100%' }}/>
                </div>
            </div>
        </div>
    </>
  )
}
