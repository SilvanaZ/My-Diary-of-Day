import React from 'react'

export const NotesItem = ({ id, date, title, body, url}) => {
  return (
    <div className='journal_entry pointer'>
        <div className='journal_entry-picture' style={{backgroundSize: 'cover', backgroundImage: `url(${url})`
    }}
    >
        <div className='journal_entry-body'>
            <p className='journal_entry-title'>
                {title}
            </p>
                  <p className='journal_entry-content'>
                      {body}
                  </p>
                  <p className='journal_entry-date-box'>
                      <span>día de la semana</span>
                  </p>
        </div>
        </div>
    </div>
  )
}
