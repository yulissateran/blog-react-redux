import axios from "axios";
import {
  LOADING,
  ERROR,
  GET_PUBLICATIONS_OF_USER
} from "../types/publications.types";
import { GET_USERS } from "../types/users.types";

export const getPublicationsOfUser = key => async (dispatch, getState) => {
  const { users } = getState().usersReducer;
  const { publications } = getState().publicationsReducer;
  const userId = users[key].id;
  dispatch({ type: LOADING });
  try {
    let  { data: currentUserPublications } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    currentUserPublications = currentUserPublications.map((publication)=>({
      ...publication,
      comments: [],
      open: false
    }))
  
    const currentPublications = [...publications, currentUserPublications];
    dispatch({
      type: GET_PUBLICATIONS_OF_USER,
      payload: currentPublications
    });
    const currentUsers = [...users];
    currentUsers[key] = {
      ...currentUsers[key],
      publicationsId: currentPublications.length - 1
    };
    dispatch({
      type: GET_USERS,
      payload: currentUsers
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Publicaciones no disponibles"
    });
  }
};

export const openComments  = ()=>(dispatch)=>{
  alert('hola' )};
  // dispatch()
