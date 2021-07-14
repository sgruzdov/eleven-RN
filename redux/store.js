import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

import { authReducer } from "./reducers/authReducer"
import { settingsReducer } from "./reducers/settingsReducer"

const reducer = combineReducers({
    auth: authReducer,
    settings: settingsReducer,

})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))