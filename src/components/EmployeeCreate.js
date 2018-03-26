import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {

    onCreateButtonPressed() {
        const { name, phone, shift } = this.props
        this.props.employeeCreate({ name, phone, shift })
    }

    render() {
        return (
            <View>
                
                <EmployeeForm {...this.props} />

                <TouchableHighlight
                    onPress={this.onCreateButtonPressed.bind(this)}
                    style={{
                        margin: 10, 
                        borderColor: 'black',
                        borderWidth: 0.5,
                        borderRadius: 5
                    }}
                >
                    <Text style={{ textAlign: 'center', padding: 10 }} >Create</Text> 
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

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate)
