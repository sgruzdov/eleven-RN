import produce from 'immer'

export const LOADING = 'LOADING'

const inittialState = {
    onboarding: true,
    loading: false
}

export const settingsReducer = (state = inittialState, action) => {
    switch(action.type) {
        case LOADING:
            return produce(state, draft => {
                draft.loading = action.payload
            })
        default: 
            return state
    }
}