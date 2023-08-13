import React from 'react'
import Button from '@mui/material/Button';
import './contact.css';

function Contact() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row bdy'>
              <h2 className='text-center'>CONTACT US</h2>
              <p className='text-center mb-5'>Quesion not Answered you? We are here to help!</p>
              <div className='col-md-8 mx-auto'>
                <div className='help'>
                  <div className='icon'>
                  <i class="bi bi-patch-question"></i>
                  </div>
                  <div className='para'>
                    <h3>Help Center</h3>
                    <p>Get Your questions answer here !!</p>
                  </div>
                  <Button className='btn' variant="contained">Help center </Button>
                </div>
              </div>
              <div className='col-md-8 mx-auto'>
              <div className='help'>
                <div className='icon'>
                <i class="bi bi-chat-text"></i>
                </div>
                <div className='para'>
                <h3>Chat</h3>
                <p>Typical reply time within seconds.<br/> Monday-Saturday 9:30 am - 6:30 pm</p>
                </div>
                <Button className='btn' variant="contained">CHAT WITH ME </Button>
                </div>
              </div>
                <div className='col-md-8 mx-auto'>
                  <div className='help'>
                  <div className='icon'>
                  <i class="bi bi-envelope"></i>
                  </div>
                  <div className='para'>
                  <h3>Email</h3>
                  <p>Typical reply time within seconds.<br/> Monday-Saturday 9:30 am - 6:30 pm</p>
                  </div>
                  <Button className='btn' variant="contained">email ME </Button>
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

export default Contact