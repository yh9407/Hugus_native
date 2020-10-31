import React, {useEffect} from 'react'
import {storyLoader} from "../../action/story";
import {useDispatch} from "react-redux";

const StoryDetail = (storyId,setStoryId) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(storyLoader(storyId))

    },[storyId])
}
export default StoryDetail;
