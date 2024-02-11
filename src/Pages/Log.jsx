import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Log({insideRegister}) {
  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
    <div className="container w-75 ">
      <Link to={'/home'}><i className="fa-solid fa-arrow-left"></i> Back to Home</Link>
      <div className="card shadow p-5 " style={{backgroundColor:"black"}}>
        <div className="row align-items-center ">

          <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
            <h1 className='fw-bolder text-light mt-4 mb-3'> <i style={{ height: '41px' }} className="fa-regular fa-file-video"></i> <span style={{color:'white'}}>Video</span> Gallery</h1>
            <h5 className='fw-bolder text-light mt-2 mb-3'>Sign {insideRegister ? "Up" : "In"} to your account</h5>

            <Form>

              {
                insideRegister &&

                <Form.Group className="mt-4 mb-4" controlId="formBasicUid">
                  <Form.Control type="email" placeholder="Enter Username" />
                </Form.Group>
              }

              <Form.Group className="mt-4 mb-4" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mt-4 mb-4" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              {
                insideRegister ?
                  <div className='text-center'>
                    <button id='b1' className='btn btn-light  mb-4'>Register</button>
                    <p  className='text-light'>Already have an account ? Click here to <Link style={{textDecoration:"none"}} to={'/login'}>login</Link> </p>
                  </div> :
                  <div className='text-center'>
                    <button id='b1' className='btn btn-light mb-4'  >Log In </button>
                    <p className='text-light'>New User ? Click here to <Link style={{textDecoration:"none"}} to={'/register'}>Register</Link> </p>
                  </div>

              }

            </Form>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Log