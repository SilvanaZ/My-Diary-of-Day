import React from 'react'
import { useSelector } from 'react-redux'
import Note from '../components/Note'
import Sidebar from '../components/Sidebar'

export const Notes = () => {
  const {active} =useSelector (state => state.notes)

  return (
    <div className='journal_main-content'>
      <Sidebar />
      <main>
        { 
        ...NoActive
        }
      </main>
    </div>
  )
}