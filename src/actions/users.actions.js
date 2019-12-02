import axios from 'axios';
import { GET_USERS, LOADING, ERROR } from '../types/users.types';

export const getUsers = () => async (dispatch) => {
    dispatch({ type: LOADING })
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: GET_USERS,
            payload: data
        })
     }
    catch(error){
        dispatch({ 
            type: ERROR,
            payload: 'User information is not available'
            })
    }

}