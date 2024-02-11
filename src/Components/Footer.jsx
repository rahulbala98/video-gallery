import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='mt-5'>
    
    <hr />
        <div style={{width:"100%", height:'300px',backgroundColor:'black'}} className='d-flex justify-content-center aolign-items-center flex-column  text-light mt-2 '>
        <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
    
          <div style={{width:'400px'}} className='website'>
            <h4>
              <i style={{height:'25px',color:'white'}} class="fa-regular fa-image "><span className='ms-2'>Video Gallery</span></i>
            </h4>
            <h6>
              Desgined and built with all the love in the world by the Luminar Team with the help of our contributors.
            </h6>
            <h6>
              Code licensed Luminar, docs CC By 3.0.
            </h6>
            <p>Currently v1.0.0</p>
          </div>
    
          <div className='links d-flex flex-column'>
            <h4>Links</h4>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link>
            <Link to={'/view'} style={{textDecoration:'none', color:'white'}}>View Videos</Link>
            <Link to={'/dashboard'} style={{textDecoration:'none', color:'white'}}>Dashboard</Link>
          </div>
    
          <div className='guides d-flex flex-column '>
            <h4>Guides</h4>
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none', color:'white'}}>React</Link>
            <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}>React Bootstrap</Link>
            <Link to={'https://github.com/'} style={{textDecoration:'none', color:'white'}}>Routing</Link>
          </div>
    
          <div className='contact d-flex flex-column flex-wrap'>
            <h4>Contact Us</h4>
              <div className='d-flex'>
                <input type="text" className='form-control' placeholder='Enter Your E-Mail' />
                <button style={{backgroundColor:'#DF5D8B'}} className='btn btn-warning ms-3'><i style={{backgroundColor:"transparent"}} class="fa-solid fa-arrow-right fa-beat"></i></button>
              </div>
    
            <div className='icons mt-3 d-felx justify-content-between fs-5' >
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none', color:'white',marginRight:'10px'}}><i class="fa-brands fa-linkedin"></i></Link>
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none', color:'white',marginRight:'10px'}}><i class="fa-brands fa-twitter "></i></Link>
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none', color:'white',marginRight:'2px'}}><i class="fa-brands fa-facebook-f"></i></Link>
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none', color:'white',marginRight:'10px'}}><i class="fa-brands fa-envolope"></i></Link>
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none', color:'white',marginRight:'10px'}}><i class="fa-brands fa-github"></i></Link>
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none', color:'white',marginRight:'10px'}}><i class="fa-brands fa-tiktok"></i></Link>
            </div>
    
          </div>
    
        </div>
    
        <p className='text-center'><b>Copyright @ 2024 VideoGallery. Built with React+vite</b></p>
    </div>
   </div>
  )
}

export default Footer