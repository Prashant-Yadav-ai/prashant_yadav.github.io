import React from 'react'
import pic from '../Image/img3.jpg';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-10 mx-auto'>
                <div className='row'>
                  <div className='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column' >
                    <h1>Grow Your Coding Skill with <b className='text-primary'>Prashant Yadav</b></h1>
                    <h2 className='my-3'> We are the team of well skilled developer</h2>
                    <div className='mt-2'>
                      <Link to='/Features' className='btn-get-started'> Get Started</Link>
                    </div>
                  </div>
                  <div className='col-lg-6 order-1 order-lg-2 head-img animated'>
                    <img src={pic} className='img-fluid' alt='pic' />
                  </div>
              </div>
              <div className='row justify-content-center' style={{background:"rgb(131, 137, 137)" ,padding:'10px',marginTop:'200px' }}>
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
      </section>
    </>
  )
}

export default Home