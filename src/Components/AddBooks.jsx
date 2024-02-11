import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import a1 from '../assets/a1.jpg'

function AddBooks() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
            <button onClick={handleShow} className='btn btn-link text-warning d-flex align-items-center fw-bolder' style={{ textDecoration: "none" }}> <i className='ms-2 fa-solid fa-plus fa-2x me-2'></i> </button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Add <span style={{ color: '#DF5D8B' }}>Videos</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   
                      <div className='d-flex justify-content-between align-items-center'>
                          
                                <label><input style={{ display: 'none' }} type="file" />
                                    <img height={"200px"} width={"200px"} className=' image-fluid' src={a1} alt="" />
                                </label>
                                <div className="text-danger">*Upload only  the following file types : (mp4,MOV,M4V )*</div>
                      </div>
                       
                        
                   
                </Modal.Body>
                <Modal.Footer style={{backgroundColor:'#212224'}}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button id='b1'>Add</Button>
                </Modal.Footer>
            </Modal>

        </div>
  )
}

export default AddBooks