import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
const SomethingScreen =() =>{
        return (
            <View style={styles.container}>
                <Text>something</Text>
                <Button
                    title='back'
                    onPress={() => this.props.navigation.goBack()} />
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default SomethingScreen;
