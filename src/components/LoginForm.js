import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import TextField from './common/TextField'
import Button from './common/Button'
import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../actions'

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onLoginButtonPressed() {
        const { email, password } = this.props
        this.props.loginUser({ email, password })
    }

    renderError() {
        if (this.props.error) {
            return (
                <Text
                    style={{
                        color: 'red', 
                        textAlign: 'center', 
                        padding: 5 }}
                >{this.props.error}</Text>
            )
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <ActivityIndicator style={{ padding: 10 }} />
        }
        return (
            <Text style={{ textAlign: 'center', padding: 10 }} >Log In</Text> 
        )
    }

    render() {
        return (
            <View>
                <TextField
                    title='Email' 
                    placeholder='Enter Email'
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />
                <TextField
                    title='Password'
                    placeholder='Enter Password'
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    secureTextEntry
                />
                {this.renderError()}

                <Button onPressAction={this.onLoginButtonPressed.bind(this)} >
                    {this.renderButton()}
                </Button>
                
            </View>
        )
    }
}

const mapStateToProps = state => {
    const {
        email,
        password,
        error,
        loading
    } = state.auth
    
    return {
        email,
        password,
        error,
        loading
    }
}

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm)
