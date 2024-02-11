import React from 'react'
import a1 from '../assets/a1.jpg'

function Profile() {
  return (
    <div>
            <div className='border rounded p-5' style={{backgroundColor:'#28292B'}}>
                <div  style={{backgroundColor:'#28292B'}} className="d-flex justify-content-center">
                    <h2 style={{backgroundColor:'#28292B',color:'#DF5D8B'}}><span style={{color:'white',backgroundColor:'#28292B'}}>Update</span> Profile</h2>                   
                </div>
                    <div className='text-center' id="example-collapse-text" style={{backgroundColor:'#28292B'}}>
                        <label >
                            <input type="file" style={{ display: 'none' }} />
                            <img style={{backgroundColor:'#28292B'}} width={'200px'} height={'200px'} src={a1} alt="upload prof pic" />
                        </label>

                        <form style={{backgroundColor:'#28292B'}} >
                            <div  style={{backgroundColor:'#28292B'}} className='mb-4'>
                                <input type="text" className='rounded p-1 w-75' placeholder='Enter Your username' />
                            </div>

                            <div style={{backgroundColor:'#28292B'}} className='mb-4'>
                                <input type="text" className='rounded p-1 w-75' placeholder='Enter Your password' />
                            </div>

                            <div style={{backgroundColor:'#28292B'}} className='mb-4'>
                                <input type="text" className='rounded p-1 w-75' placeholder='Re-enter Your password' />
                            </div>
                        </form>

                        <div className='mt-5 mb-5 d-grid w-75 mx-auto'>
                            <button id='b1' className='btn  '>UPDATE</button>
                        </div>

                    </div>
                

            </div>
        </div>
  )
}

export default Profile