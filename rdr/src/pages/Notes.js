import React from 'react'
import Note from '../components/Note'
import Sidebar from '../components/Sidebar'

export const Notes = () => {
  return (
    <div className='journal_main-content'>
      <Sidebar />
      <main>
        <Note />
        {/*<NoActive/>*/}
      </main>
    </div>
  )
}