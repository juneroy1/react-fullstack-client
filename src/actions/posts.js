import * as api from '../api'

import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, END_LOADING, START_LOADING, FETCH_POST } from '../constants/actionTypes';
export const getPost = (id) => async (dispatch) => {

    try {
        dispatch({type: START_LOADING});
        const {data} = await api.fetchPost(id);
        console.log(data);

        dispatch({type: FETCH_POST, payload: data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error.message)
    }
    // const action = {type: 'FETCH_ALL', payload: []}

  
}
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

        console.log('getPostBySearch',data);
        dispatch({type: FETCH_BY_SEARCH, payload: data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post, history) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const {data} = await api.createPost(post);
        history.push(`/posts/${data._id}`);
        dispatch({type: CREATE, payload: data})
        dispatch({type: END_LOADING});

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
