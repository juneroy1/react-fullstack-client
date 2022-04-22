import * as api from '../api'
import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, END_LOADING, START_LOADING } from '../constants/actionTypes';
export const getPosts = (page) => async (dispatch) => {

    try {
        dispatch({type: START_LOADING});
        const {data} = await api.fetchPosts(page);
        console.log(data);

        dispatch({type: FETCH_ALL, payload: data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message)
    }
    // const action = {type: 'FETCH_ALL', payload: []}

  
}

export const getPostBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.fetchPostsBySearch(searchQuery);

        console.log(data);
        dispatch({type: FETCH_BY_SEARCH, payload: data});
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.createPost(post);
        dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}


export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) =>  async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({type: UPDATE, payload: data})
    } catch (error) {
        console.log(error)
        
    }
}
