import React from 'react'
import Navbar from './components/navbar'
import Todolist from './components/todolist/Todolist'

function Home() {
  return (
    <>
        <Navbar />
        <Todolist />
    </>
  )
}

export default Home