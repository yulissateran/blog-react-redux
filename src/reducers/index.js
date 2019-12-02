import { combineReducers } from 'redux';
import usersReducer from './usersReducer'
import publicationsReducer from './publications.reducer'
export default combineReducers({
    usersReducer,
    publicationsReducer
})