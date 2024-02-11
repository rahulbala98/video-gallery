
import './App.css'
import Home from './Pages/Home'
import Log from './Pages/Log'
import Dashboard from './Pages/Dashboard'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'


function App() {


  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Log />} />
        <Route path='/register' element={<Log insideRegister/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
      <Footer></Footer>
      
    </> 
  )
}

export default App
