import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';

function Header({insideDashBoard, insideView}) {
  return (
    <div>
            <Navbar style={{ width: '100%', position: 'fixed', top: '0px', zIndex: 5 }}
                className="">
                <Container>
                    <Navbar.Brand>
                        <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to={'/'}>
                            <i style={{ height: '25px', color: 'white' }} class="fa-solid fa-video "><span className='ms-2'>My <span style={{color:'#DF5D8B'}}>Video Gallery</span></span></i>
                        </Link>
                    </Navbar.Brand>

                    {
                        {insideDashBoard,insideView} &&
                        <div className="ms-auto">
                            <button style={{ textDecoration: 'none' }} className='btn btn-link text-light fw-bolder '> <i className="fa-solid fa-gear me-2"></i>  <span style={{color:'#DF5D8B'}} >LogOut</span></button>
                        </div>
                    }

                </Container>
            </Navbar>
        </div>
  )
}

export default Header