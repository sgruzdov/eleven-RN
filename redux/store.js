import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authReducer } from './reducers/authReducer'
import { settingsReducer } from './reducers/settingsReducer'
import { scootersReducer } from './reducers/scootersReducer'
import { userReducer } from './reducers/userReducer'

const reducer = combineReducers({
    auth: authReducer,
    settings: settingsReducer,
    scooters: scootersReducer,
    user: userReducer,
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
