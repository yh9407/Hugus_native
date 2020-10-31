import axios from 'axios'

export const STORY_LOAD = "STORY_LIST_LOAD";
export const STORY_LOAD_SUCCESS = "STORY_LIST_LOAD_SUCCESS";
export const STORY_LOAD_FAILURE = "STORY_LIST_LOAD_FAILURE";

export const storyLoadStart = () => {
    return {type: STORY_LOAD}
}
export const storyLoadSuccess = () => {
    return {type: STORY_LOAD_SUCCESS}
}
export const storyLoadFailure = () => {
    return {type: STORY_LOAD_FAILURE}
}

export const storyLoader = (id) => async (dispatch) => {
    dispatch(storyLoadStart());
    await axios
        .get(`http://192.168.0.59:3000/story/${id}`)
        .then((response) => {
            dispatch(storyLoadSuccess(response.data));
        })
        .catch((error) => {
            dispatch(storyLoadFailure());
            console.log(error)
        })
}




