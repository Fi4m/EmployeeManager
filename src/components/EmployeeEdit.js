import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { text } from 'react-native-communications'
import { employeeUpdate, employeeEdit, employeeDelete } from '../actions'
import EmployeeForm from './EmployeeForm'
import { Confirm } from './common/Confirm'

class EmployeeEdit extends Component {

    state = {
        showModal: false
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }

    onEditButtonPressed() {
        const { name, phone, shift } = this.props
        // console.log(name, phone, shift)
        this.props.employeeEdit({ name, phone, shift, uid: this.props.employee.uid })
    }

    onTextButtonPressed() {
        const { phone, shift } = this.props

        text(phone, `Your upcoming shift is on ${shift}`)
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid })
    }

    onDecline() {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <View>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
                
                <EmployeeForm {...this.props.employee} />

                <TouchableHighlight
                    onPress={this.onEditButtonPressed.bind(this)}
                    style={{
                        margin: 10, 
                        borderColor: 'black',
                        borderWidth: 0.5,
                        borderRadius: 5
                    }}
                >
                    <Text style={{ textAlign: 'center', padding: 10 }} >Edit</Text> 
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this.onTextButtonPressed.bind(this)}
                    style={{
                        margin: 10, 
                        borderColor: 'black',
                        borderWidth: 0.5,
                        borderRadius: 5
                    }}
                >
                    <Text style={{ textAlign: 'center', padding: 10 }} >Text</Text> 
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => this.setState({ showModal: true })}
                    style={{
                        margin: 10, 
                        borderColor: 'black',
                        borderWidth: 0.5,
                        borderRadius: 5
                    }}
                >
                    <Text style={{ textAlign: 'center', padding: 10 }} >Fire</Text> 
                </TouchableHighlight>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm
    return {
        name,
        phone,
        shift
    }
}

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeEdit,
    employeeDelete
})(EmployeeEdit)
