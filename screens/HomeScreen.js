import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import firebase from 'firebase'

export default class HomeScreen extends Component {

    state = {
        email: "",
        displayName: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };
    render() {
        return (
            <View>
                <View>
                    <Text> Hello {this.state.displayName} </Text>
                    <Text> {this.state.email} </Text>
                </View>
                
                
                <TouchableOpacity onPress={this.signOutUser} style={styles.button} >
                    <Text>Logout</Text>
                </TouchableOpacity>
                <Button>ออกจากระบบ</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#FF3399",
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10

    },
}

)


