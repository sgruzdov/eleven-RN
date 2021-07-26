import produce from 'immer'
import * as axios from 'axios'

import { LOADING } from './settingsReducer'

const AUTH_CODE = 'AUTH_CODE'
export const CONFIRM_CODE = 'CONFIRM_CODE'
export const REMOVE_ERRORS = 'REMOVE_ERRORS'
export const ADD_ERROR = 'ADD_ERROR'
export const SET_USER_NUMBER = 'SET_USER_NUMBER'

import { URL } from '../../assets/config'

const inittialState = {
    auth: false,
    confirmCode: null,
    userNumber: {
        code: null,
        number: null,
    },
    errorCode: 0,
}

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const authReducer = (state = inittialState, action) => {
    switch (action.type) {
        case AUTH_CODE:
            return produce(state, draft => {
                draft.confirmCode = +action.payload
            })
        case CONFIRM_CODE:
            return produce(state, draft => {
                if (state.confirmCode === action.payload) {
                    draft.auth = state.confirmCode === action.payload ? true : false
                    draft.confirmCode = state.confirmCode === action.payload ? '' : draft.confirmCode
                } else {
                    draft.errorCode = 1
                }
            })
        case SET_USER_NUMBER:
            return produce(state, draft => {
                draft.userNumber.code = action.payload.numberCode
                draft.userNumber.number = action.payload.number
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

export const confirmCodeThunk = userNumber => async dispatch => {
    dispatch({ type: LOADING, payload: true })
    try {
        const confirmCode = getRandomIntInclusive(100000, 999999)
        // await axios.post(`${URL}/auth/confirmCode`, { confirmCode })

        dispatch({ type: AUTH_CODE, payload: 111111 })
        dispatch({ type: SET_USER_NUMBER, payload: userNumber })
    } catch (errors) {
        console.log('AUTH', errors)
        dispatch({ type: ADD_ERROR, payload: 2 })
    }

    dispatch({ type: LOADING, payload: false })
}

export const loginThunk = userNumber => async dispatch => {
    dispatch({ type: LOADING, payload: true })
    try {
        const user = await axios.post(`${URL}/auth/login`, userNumber)
    } catch (errors) {
        console.log('AUTH', errors)
        dispatch({ type: ADD_ERROR, payload: 3 })
    }

    dispatch({ type: LOADING, payload: false })
}
