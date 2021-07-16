import produce from 'immer'
import * as axios from 'axios'


const inittialState = {
    data: [],
}

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export const authReducer = (state = inittialState, action) => {
    switch(action.type) {

        default: 
            return state
    }
}

// export const authThunk = (code, number) => async dispatch => {
//     dispatch({type: LOADING, payload: true})
//     try {

//         const confirmCode = getRandomIntInclusive(100000, 999999)
//         const res = await axios.post(`${URL}/auth/login`, {confirmCode})

//         dispatch({type: AUTH_CODE, payload: confirmCode})

//     } catch(errors) {
//         console.log('AUTH', errors)
//         dispatch({type: ADD_ERROR, payload: 2})
//     }

//     dispatch({type: LOADING, payload: false})
// }