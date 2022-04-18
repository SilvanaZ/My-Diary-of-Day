import { async } from '@firebase/util';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { types } from '../types';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
        //console.log(doc.id)
        dispatch(addNewNote)(doc.id, newNote)
        dispatch(activeNote)(doc.id, newNote)
    }
}

export const addNewNote = (id, note) => ({
    type: types.noteAddNew,
    payload:{
        id,
        ...note
    }
})

export const activeNote = (id, note) => ({
    type: types.noteActive,
    payload: {
        id,
        ...note
    }
})