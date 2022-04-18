import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../actions/notes';
import { NoteAppBar } from './NoteAppBar';
import { useEffect } from 'react';

export const Note = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector(state => state.notes);

  const activeId = useRef(note.id);

  const [formValues, handleInputChange, reset] = useForm(note)

  const { title, body } = formValues;

  useffect(() => {
    dispatch(activeNote(id, {
      ...formValues
    }))
  }, [dispatch, formValues])

  useEffect(() => {
    id(note.id !== activeId.current)
    reset(note)
    activeId.current = note.id

  }, [note, reset])

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
            autoComplete='off' />
          <textarea name='' className='notes_' placeholder=''>

          </textarea>
        </form>
      </div>
    </div>
  )
}