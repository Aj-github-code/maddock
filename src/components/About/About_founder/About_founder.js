import React from 'react'

export const About_founder = () => {
  return (
    <>
        <div className='row' style={{ width: '100%' }}>
            {/* <div className='col-md-12' style={{ width: '100%', display: "flex", justifyContent:"space-between", flexDirection: "row" }}> */}
            <div id='about_founder'>
            <div className='aboutus-title'>
                THE FOUNDER
            </div>
            <div className='row'>
                {/* <div className='col-md-8'> */}
                <div className='about-rowmain'>
                    One of the most revered Indian producers and the primary mind behind Maddock Films, Dinesh Vijan bid farewell to a lucrative banking job to pursue his passion for cinema.
                    <br/><br/>
                    His first production was the universally applauded Being Cyrus, followed by a plethora of critical and commercial successes like Love Aaj Kal, Badlapur, Stree, Mimi and Dasvi.
                    <br/><br/>
                    A filmmaker who never shies away from thinking out of the box, Dinesh has taken creative risks that very few would. The first member of his family to step into the film world, he firmly believes that no story is born perfect, but every story can be told with perfection. 
                    <br/><br/>
                    Always adapting to new technologies and evolving sensibilities, Dinesh is a movie pioneer in the truest sense. With Maddock Films, his dream is to tell stories that touch his heart and entertain audiences all over.
                </div>
                {/* </div>
                <div className='col-md-4'> */}

                <div className='about-founder'>
                    <img  src='../../../images/about-founder.png' className='about_img' alt=''/>
                </div>
                {/* </div> */}
            </div>
        </div>
        </div>
        {/* </ div> */}
    </>
  )
}