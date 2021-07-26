import produce from 'immer'
import * as axios from 'axios'

import { LOADING } from './settingsReducer'
import { URL } from '../../assets/config'

export const SET_USER = 'SET_USER'
export const ADD_ERROR_USER = 'ADD_ERROR_USER'

const initialState = {
    data: {},
    errorCode: 0,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return produce(state, draft => {
                draft.data = action.payload
            })
        case ADD_ERROR_USER:
            return produce(state, draft => {
                draft.errorCode = action.payload
            })
        default:
            return state
    }
}

export const getUserThunk = username => async dispatch => {
    dispatch({ type: LOADING, payload: true })
    try {
        const user = await axios.get(`${URL}/user/getUser?username=${username}`)
        dispatch({ type: SET_USER, payload: user.data })
    } catch (errors) {
        console.log('getUserThunk', errors)
        dispatch({ type: ADD_ERROR_USER, payload: 3 })
    }

    dispatch({ type: LOADING, payload: false })
}

export const changeUserSettingsThunk = data => async dispatch => {
    dispatch({ type: LOADING, payload: true })
    try {
        const result = await axios.patch(`${URL}/user/changeUserSettings`, data)
        dispatch({ type: SET_USER, payload: result.data })
    } catch (errors) {
        console.log('changeUserSettings', errors)
        dispatch({ type: ADD_ERROR_USER, payload: 3 })
    }

    dispatch({ type: LOADING, payload: false })
}

export const changeDefaultCardThunk = (username, cardId) => async dispatch => {
    dispatch({ type: LOADING, payload: true })
    try {
        const result = await axios.patch(`${URL}/user/changeDefaultCard`, { username, cardId })
        dispatch({ type: SET_USER, payload: result.data })
    } catch (errors) {
        console.log('changeDefaultCardThunk', errors)
        dispatch({ type: ADD_ERROR_USER, payload: 3 })
    }

    dispatch({ type: LOADING, payload: false })
}
