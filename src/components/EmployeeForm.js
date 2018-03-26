import React, { Component } from 'react'
import { Picker, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import TextField from './common/TextField'

class EmployeeForm extends Component {
    render() {
        console.log(this.props)
        return (
            <View>
                <TextField
                    title='Name' 
                    placeholder='Enter Name'
                    onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    value={this.props.name}
                />
                <TextField
                    title='Phone' 
                    placeholder='Enter Number'
                    onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    value={this.props.phone}
                />
                <Text style={styles.pickerLabelStyle}>Shift</Text>
                <Picker
                    selectedValue={this.props.shift}
                    onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                >
                    <Picker.Item label='Monday' value='Monday' />
                    <Picker.Item label='Tuesday' value='Tuesday' />
                    <Picker.Item label='Wednesday' value='Wednesday' />
                    <Picker.Item label='Thursday' value='Thursday' />
                    <Picker.Item label='Friday' value='Friday' />
                    <Picker.Item label='Saturday' value='Saturday' />
                    <Picker.Item label='Sunday' value='Sunday' />
                </Picker>
            </View>
        )
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 20
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

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm)
