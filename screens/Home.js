import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground style={styles.backgrounImage}
                    source={require("../assets/bg_image.png")}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Iss Tracker App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() => {
                        this.props.navigation.navigate("IssLocation")
                    }}>
                        <Text style={styles.routeText}>
                            Iss Location
                        </Text>
                        <Text style={styles.knowMore}>
                            {"Know more --->"}
                        </Text>
                        <Text style={styles.bgDigit}>
                            1
                        </Text>
                        <Image style={styles.iconImage} source={require("../assets/iss_icon.png")}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() => {
                        this.props.navigation.navigate("Meteors")
                    }}>
                        <Text style={styles.routeText}>
                            Meteors
                        </Text>
                        <Text style={styles.knowMore}>
                            {"Know more --->"}
                        </Text>
                        <Text style={styles.bgDigit}>
                            2
                        </Text>
                        <Image style={styles.iconImage} source={require("../assets/meteor_icon.png")}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: "center",
        color:"white",
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgrounImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginTop: 50,
        marginRight: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "black",
        marginTop: 70,
        paddingLeft: 30,
    },
    knowMore: {
        fontSize: 15,
        color: "red",
        paddingLeft: 30
    },
    bgDigit: {
        position: "absolute",
        color: 'rgba(183, 183,183,0.5)',
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1,
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80,

    }
})