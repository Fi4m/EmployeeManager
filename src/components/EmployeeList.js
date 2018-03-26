import React, { Component } from 'react'
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Actions } from 'react-native-router-flux';
import { employeesFetch } from '../actions'

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch()
    }

    renderFlatListItem(item) {
        return (
            <TouchableWithoutFeedback
                onPress={() => Actions.employeeEdit({ employee: item })}
                
            >
            <View
                style={{ 
                    paddingVertical: 5, 
                    paddingHorizontal: 20 
                }}
            >
                <Text
                    style={{
                        padding: 5,
                        textAlign: 'center',
                        backgroundColor: 'white'
                    }}
                >{item.name}</Text>
            </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        console.log(this.props.employees)
        return (
            <FlatList 
                data={this.props.employees}
                renderItem={({ item }) => this.renderFlatListItem(item)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return (
            { ...val, uid }
        )
    })
    return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
