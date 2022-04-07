import React from 'react'
import { NotesItem } from './NotesItem'

export const NotesList = () => {
  return (
    <div className='jornal_entries'>
        {
        notes.map(note =>{
            <NotesItem/>
        })
        }
    </div>
  )
}
