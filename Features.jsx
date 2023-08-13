import React from 'react'
import { Cards } from './Cards';
import Common from './Common';
import { Common1 } from './Common';

function Features() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row justify-content-center'>
              <div className='col-lg-12'>
                <h2 className='text-center mt-4'><u>Our Services </u></h2>
              </div>
              <div className='row'>
                 <div className='col-lg-12 d-lg-flex gx-lg-5 gy-3'>
                  {
                    Common.map(function(val, index){
                      return <Cards 
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    link={val.link}
                  />
                    })  
                  }
                </div>
                </div>

                <div className='row'>
                <h2 className='text-center bg-dark text-white m-lg-3'>APPLICATION PROGRAMING</h2>
                 <div className='col-lg-12 d-lg-flex gx-lg-5 gy-3'>
                  {
                    Common1.map(function(val, index){
                      return <Cards 
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    link={val.link}
                  />
                    })  
                  }
                </div>
                </div>  
            </div>
            <div className='row mt-3 justify-content-center' style={{background:"rgb(131, 137, 137)" ,padding:'10px' }}>
              <div className=' d-lg-flex align-items-center'>
                <div className='lead col-lg-6'>
                <p className='text-white text-center'>@copyright2023</p>
                </div>
                <div className='text-center text-white lead col-lg-6'>
                <i class="bi bi-whatsapp m-2"></i>
                <i class="bi bi-linkedin m-2"></i>
                <i class="bi bi-facebook m-2"></i>
                <i class="bi bi-instagram m-2"></i>
                <i class="bi bi-twitter m-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

{/* <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            
          </div>
        </div>
      </div> */}

export default Features;