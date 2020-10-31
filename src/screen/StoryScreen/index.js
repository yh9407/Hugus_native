import React, {useState} from 'react';
import StoryNavScreen from "../StoryScreens/storyNav"
import { View,ScrollView} from "react-native";
import StoryList from "../StoryScreens/storyList";

const StoryScreen = (props) => {
    const [changed, setChanged] = useState(false);
    const [storyType, setStoryType] = useState("hot");
    return (
        <>
            <View>
                <StoryNavScreen
                    storyType={storyType}
                    setStoryType={setStoryType}
                    setChanged={setChanged}/>
            </View>
            <ScrollView>
                <StoryList
                    storyType={storyType}
                    changed={changed}
                    setChanged={setChanged}/>
            </ScrollView>
        </>

    )
}
export default StoryScreen;
