import React from 'react';
import {initializeState} from ''

const initializeState ={
    notes: [],
    active: null
}

export const notesReducer = () => {
  switch (action.type) {
      case types.noActive:
          return{
              ...State,
              active:{
                  ...action
              }
          }
          
          break;
  
      default:
          break;
  }
}
