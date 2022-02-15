import {combineReducers, createStore} from 'redux'
import {blockReducer} from './reducer/block-reducer'

const store = createStore(blockReducer)
export default store