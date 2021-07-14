import produce from 'immer'
import * as axios from 'axios'

import { LOADING } from './settingsReducer'

const AUTH_CODE = 'AUTH_CODE'
export const CONFIRM_CODE = 'CONFIRM_CODE'
export const REMOVE_ERRORS = 'REMOVE_ERRORS'
export const ADD_ERROR = 'ADD_ERROR'

const URL = 'http://localhost:3000'

const inittialState = {
    auth: false,
    confirmCode: null,
    errorCode: 0,
    user: {}
}

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export const authReducer = (state = inittialState, action) => {
    switch(action.type) {
        case AUTH_CODE:
            return produce(state, draft => {
                draft.confirmCode = +action.payload
            })
        case CONFIRM_CODE: 
            return produce(state, draft => {
                if(state.confirmCode === action.payload) {
                    draft.auth = state.confirmCode === action.payload ? true : false
                    draft.confirmCode = state.confirmCode === action.payload ? '' : draft.confirmCode
                } else {
                    draft.errorCode = 1
                }
            })
        case ADD_ERROR:
            return produce(state, draft => {
                draft.errorCode = action.payload
            })
        case REMOVE_ERRORS:
            return produce(state, draft => {
                draft.errorCode = 0
            })
        default: 
            return state
    }
}

export const authThunk = (code, number) => async dispatch => {
    dispatch({type: LOADING, payload: true})
    try {

        const confirmCode = getRandomIntInclusive(100000, 999999)
        const res = await axios.post(`${URL}/auth/login`, {confirmCode})

        dispatch({type: AUTH_CODE, payload: confirmCode})

    } catch(errors) {
        console.log('AUTH', errors)
        dispatch({type: ADD_ERROR, payload: 2})
    }

    dispatch({type: LOADING, payload: false})
}