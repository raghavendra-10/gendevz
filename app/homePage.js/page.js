"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const HomePage = () => {
    const router = useRouter()
    const handleClick = () => {
        router.push('/about')
    }
  return (
    <div>HomePage
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default HomePage