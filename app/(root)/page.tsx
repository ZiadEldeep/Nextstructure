"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  let router=useRouter()
  const handleClick=()=>{
    router.push("/contact/zzzz")
  }
  return (
    <div>
      <button onClick={handleClick}>Welcome Home</button>
    </div>
  )
}

export default Home
