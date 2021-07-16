import produce from 'immer'

export const LOADING = 'LOADING'
export const SET_PERMITIONS = 'SET_PERMITIONS'
export const SET_LOCATION = 'SET_LOCATION'

const inittialState = {
    onboarding: true,
    loading: false,
    location: {
        status: 'denied',
        position: false,
        latitude: 53.90098176536905,
        longitude: 27.559314526339616
    }
}

export const settingsReducer = (state = inittialState, action) => {
    switch(action.type) {
        case LOADING:
            return produce(state, draft => {
                draft.loading = action.payload
            })
        case SET_PERMITIONS:
            return produce(state, draft => {
                draft.location.status = action.payload
            })
        case SET_LOCATION:
            return produce(state, draft => {
                draft.location.latitude = action.payload.latitude
                draft.location.longitude = action.payload.longitude
                draft.location.position = true
            })
        default: 
            return state
    }
}