import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Animated,
    Dimensions,
    Platform,
    Linking, Text
} from "react-native";
import Config from "react-native-config"
class SplashScreen extends Component {
    constructor(props) {
        super(props);
        console.log(Config,"Config Values")
    }
    render() {
        return (
            <View>
                <Text>HELLO</Text>
            </View>
        )
    }
}
export default SplashScreen;