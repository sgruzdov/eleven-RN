import produce from 'immer'

export const LOADING = 'LOADING'
export const SET_PERMITIONS = 'SET_PERMITIONS'

const inittialState = {
    onboarding: true,
    loading: false,
    location: {
        status: 'denied'
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
        default: 
            return state
    }
}