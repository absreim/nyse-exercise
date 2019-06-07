import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import companies from './companies'

const reducer = combineReducers({companies})
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(reducer, middleware)

export default store
export { getCompanies } from './companies'
