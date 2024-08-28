import React, { useState } from 'react'
import "./Admin.css"
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Hero from '../../Components/Hero/Hero'

const Admin = () => {
  const [show, setShow] = useState(true);
  return (
    <div className='Admin'>
        <Navbar/>
        <div className="lower-admin">
            <Sidebar show={show} setShow={setShow}/>
            <Hero show={show} setShow={setShow}/>
        </div>
    </div>
  )
}

export default Admin