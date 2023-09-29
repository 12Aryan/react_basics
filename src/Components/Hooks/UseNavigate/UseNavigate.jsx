import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigate = () => {
  const navigate = useNavigate()
  const navigateToHome=()=>{
    navigate('/')
  }
  return (
    <button className="bg-red-700 text-white px-6 py-2" onClick={navigateToHome}>
      Navigate to Home
    </button>
  )
}

export default UseNavigate
