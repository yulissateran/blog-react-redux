import { GET_PUBLICATIONS, GET_PUBLICATIONS_OF_USER } from "../types/publications.types";
import { LOADING, ERROR } from "../types/publications.types";

// import { GET_USERS, LOADING, ERROR } from "../types/users.types";

const INITIAL_STATE = {
    publications: [],
    loading: false,
    error: ''
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_PUBLICATIONS_OF_USER:
        return  {
            ... state, 
            publications: action.payload,
            loading: false,
            error: ''
        };
        case LOADING:
            return {... state, loading: true};
      
        case ERROR:
        return {... state, error: action.payload, loading: false}
        default: return state;
    }
}