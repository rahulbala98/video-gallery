import React from 'react'
import Table from 'react-bootstrap/Table';
import a11 from '../assets/a11.mp4'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'
    

function TableData() {
  return (
    <div className='p-3 mt-4'>
            <Table  variant="dark">

                <thead>
                    <tr className='text-center'> 
                        <th>#</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody className='text-center'>

                    <tr>
                        <td>1</td>
                        <td><video src={a11} style={{height:'250px'}}></video></td>
                        <td> <a href="" className='btn ms-2'><i className='fa-solid fa-edit fa-2x'></i></a></td>
                        <td><button className='btn '><i className='fa-solid fa-trash text-danger fa-2x'></i></button></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td><img src={a2} alt="" style={{height:'200px'}} /></td>
                        <td> <a href="" className='btn ms-2'><i className='fa-solid fa-edit fa-2x'></i></a></td>
                        <td><button className='btn '><i className='fa-solid fa-trash text-danger fa-2x'></i></button></td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td><img src={a3} alt="" style={{height:'200px'}}/></td>
                        <td> <a href="" className='btn ms-2'><i className='fa-solid fa-edit fa-2x'></i></a>    </td>
                        <td><button className='btn '><i className='fa-solid fa-trash text-danger fa-2x'></i></button></td>
                    </tr>

                </tbody>
            </Table>
        </div>
  )
}

export default TableData