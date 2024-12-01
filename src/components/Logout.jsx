import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = (props) => {
    const navigate=useNavigate()
    const handleclick=()=>{
        props.signin(false)
        navigate('/')

    }
  return (
    <div style={{marginTop:'100px'}}>
      <h3>Really wannna logout?</h3>
      <button>Cance</button>
      <button onClick={handleclick}>Logout</button>
    </div>
  )
}

export default Logout
