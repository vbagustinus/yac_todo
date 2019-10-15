import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    login = (username, password) => {

    }

    render() {
        const {username, password} = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.title}>YAC To Do</Text>
                <TextInput
                    style={[styles.textInpuContainer, {marginTop: 100}]}
                    placeholder={'username'}
                    value={username}
                    onChangeText={username => this.setState({username})}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInpuContainer}
                    placeholder={'password'}
                    value={password}
                    onChangeText={password => this.setState({password})}
                />
                <TouchableOpacity
                    style={styles.loginButtonContainer}
                    onPress={() => this.login(username, password)}
                >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 30,
        color: '#75a61e',
        fontWeight: '600'
    },
    loginContainer: {
        borderWidth: 1,
    },
    textInpuContainer: {
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#75a61e',
        alignSelf: 'center'
    },
    loginButtonContainer: {
        alignSelf: 'center',
        width: 250,
        height: 40,
        backgroundColor: '#75a61e',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    loginText: {
        color: 'white'
    }
})
