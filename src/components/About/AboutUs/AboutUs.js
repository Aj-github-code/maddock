import React from 'react'
import { About_founder } from '../About_founder/About_founder'
import './AboutUs.css'

export const AboutUs = () => {
  return (
    <>
        <div className='container'>
        <div className='row' style={{ width: '100%' }}>
            <div className='col-md-12' style={{ width: '100%', display: "flex", justifyContent:"space-between", flexDirection: "row" }}>
            
            <div className='bg'>
                <div id='about_company'>
                <div className='aboutus-title'>
                    THE COMPANY
                </div>
                <div className='aboutus-desc'>
                    If it’s magical, it’s Maddock! One of the country’s leading production houses, Maddock Films, founded by Dinesh Vijan, is synonymous for creating content driven cinema that packs a unique punch.
                    <br/><br/>
                    May it be Love Aaj Kal, Go Goa Gone, Badlapur, Hindi Medium, Stree, Bala or recent hits like Mimi and Dasvi, Maddock has left no stone unturned in entertaining audiences with fresh and gripping stories across genres.
                    <br/><br/>
                    With a vibrant slate of upcoming releases that range from horror-comedy, romance, action, crime thrillers to drama, Maddock’s most awaited projects include Varun Dhawan-Kriti Sanon starrer Bhediya, directed by Amar Kaushik of Stree & Bala fame, as well as Mimi filmmaker Laxman Utekar’s next starring Vicky Kaushal and Sara Ali Khan.
                   </div>
                </div>
                <About_founder/>
            </div>
            </div>
            </div>
        </div>
    </>
  )
}
