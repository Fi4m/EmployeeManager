import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'
import EmployeeForm from './EmployeeForm'
import Button from './common/Button'

class EmployeeCreate extends Component {

    onCreateButtonPressed() {
        const { name, phone, shift } = this.props
        this.props.employeeCreate({ name, phone, shift })
    }

    render() {
        return (
            <View>
                
                <EmployeeForm {...this.props} />

                <Button onPressAction={this.onCreateButtonPressed.bind(this)}>
                    <Text style={{ textAlign: 'center', padding: 10 }} >
                        Create
                    </Text> 
                </Button>

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
