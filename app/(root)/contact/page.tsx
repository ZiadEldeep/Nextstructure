"use client"
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation';

const Page = () => {
  let router=useRouter()
let search=useSearchParams()
let id=search.get("id")
  return (
    <div>
      <h1>hello {id}</h1>
<button onClick={()=>{
  router.back()
}}>back</button>
    </div>
  )
}

export default Page
