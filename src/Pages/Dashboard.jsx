import React from 'react'
import Profile from '../Components/Profile'
import Header from '../Components/Header'
import Books from '../Components/Books'


function Dashboard() {
  return (
    <div>
    <Header insideDashBoard/>
    <div style={{marginTop:'100px'}} className='container'>
      <h1 >Welcome <span style={{color:'#DF5D8B'}}>User</span></h1>

      <div className="row mt-5">
        <div className="col-lg-8 ">
          <Books/>
        </div>
        <div className="col-lg-4">
          <Profile/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard