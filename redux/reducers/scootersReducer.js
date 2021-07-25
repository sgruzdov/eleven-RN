import produce from 'immer'
import * as axios from 'axios'

import { URL } from '../../assets/config'

import { LOADING } from './settingsReducer'

export const SET_SCOOTERS = 'SET_SCOOTERS'

const inittialState = {
    data: [],
}

// const getRandomIntInclusive = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

export const scootersReducer = (state = inittialState, action) => {
    switch (action.type) {
        case SET_SCOOTERS:
            return produce(state, draft => {
                draft.data = action.payload
            })
        default:
            return state
    }
}

export const getScootersThunk = () => async dispatch => {
    dispatch({ type: LOADING, payload: true })

    try {
        const { data } = await axios.get(`${URL}/scooter/getScooters`)

        dispatch({ type: SET_SCOOTERS, payload: data })
    } catch (e) {
        console.log('scooterReducer', e)
    }

    dispatch({ type: LOADING, payload: false })
}
