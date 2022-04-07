import React from 'react'

const Note = () => {
  return (
    <div className='notes_main-content'>
        {/* header de la nota */}
        <div className='notes_content'>
            <form>
                <input 
                type='text'
                name='title'
                placeholder='Título'
                className='notes_title-input'
                autoComplete='off'/>
                <textarea name='' className='notes_' placeholder=''>

                </textarea>
            </form>
        </div>
    </div>
  )
}

export default Note