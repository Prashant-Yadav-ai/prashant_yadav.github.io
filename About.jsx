import React from 'react'
import prashnat from '../Image/prashant.png';

export const About = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row mt-4'>
          <div className='col-10 mx-auto'>
            <div className='row gx-4'>
              <div className='col-lg-4 order-1 text-center'>
                <img src={prashnat} alt='prashant"s pic'  style={{height:"300px", borderRadius:"50%", border:'3px solid red'}}/>
                <p>Prashant Yadav <br/> s/o Satya Narayan Yadav</p>
              </div>
              <div className='col-lg-8 order-2 bg-dar' style={{textAlign:"justify", padding:'10px', wordSpacing:'5px'}}>
                <h5>
                  Hello Everyone !!!
                  <br/>
                  My Name is <span className='text-primary'>Prashant Yadav</span>.<br/>
                  I born 15 Aug 2003 in my village(Gharwaspur) Sultanpur.
                  I belong to Sultanpur. I live in Prayagraj(Allahabad).Now I am persuing BSc. and 'O' level Examinaton from Apana college.
                  Prashant Yadav is an accomplished web developer with a knack for creating engaging and functional online experiences. With a keen eye for design and a strong grasp of programming languages, Prashant crafts websites that not only look impressive but also deliver seamless user interactions. His dedication to staying updated with the latest web development trends and technologies enables him to build modern, responsive, and user-friendly websites that cater to the needs of diverse audiences. Whether it's crafting visually appealing layouts or optimizing website performance, Prashant's expertise in web development shines through in every project he undertakes.
                  <br/>
                  <br/>
                  <br/>
                  <span className='text-primary'>Languages and Technologies</span><br/> Mention some of the key programming languages and technologies used in web development, such as HTML, CSS, JavaScript, and popular frameworks like React, Angular, or Vue.js. Briefly explain their roles.
                  <br/>
                 <span className='text-primary'>Responsive Design</span><br/> Discuss the importance of creating websites that are responsive and can adapt to various screen sizes and devices, such as smartphones, tablets, and desktops.
                  <br/>
                  <span className='text-primary'>User Experience</span><br/> Highlight the significance of providing a positive user experience, including fast loading times, easy navigation, and visually appealing design.
                   <br/>
                   <span className='text-primary'>Career Opportunities</span><br/>If appropriate, share information about the various career opportunities in web development, such as front-end developer, back-end developer, full-stack developer, web designer, and more.
                      <br/>
                      <span className='text-primary'>Continuous Learning</span><br/> Emphasize that web development is a field that requires continuous learning due to the ever-evolving nature of technology. Encourage students to stay curious and keep up with industry trends
                    </h5>
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
