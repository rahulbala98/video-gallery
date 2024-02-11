import React from 'react'
import AddBooks from './AddBooks'
import TableData from './TableData'

function Books() {
  return (
    <div className='border rounded p-2 shadow'>

      <div className="d-flex justify-content-between">
        <h2>My <span style={{color:'#DF5D8B'}}>Video Collection</span></h2>
        <AddBooks></AddBooks>
      </div>

      <div className='mt-4'>
        <div className='border rounded '>
            <TableData/>
        </div>
      </div>

    </div>
  )
}

export default Books