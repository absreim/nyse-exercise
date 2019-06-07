import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import companies from './companies'
import upload from './upload'

const reducer = combineReducers({companies, upload})
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(reducer, middleware)

export default store
export { getCompanies } from './companies'
export { uploadFile } from './upload'
