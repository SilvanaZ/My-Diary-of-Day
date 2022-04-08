import React, { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [state, setState] = useState(initialState);

    const handleinputChange = ({target}) =>{
        setState({
            ...state,
            [target.name]: target.value,
        })
    }
    const reset = (newState = initialState)
}
