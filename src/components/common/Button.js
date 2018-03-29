import React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = ({ children, onPressAction, style }) => {
    return (
        <TouchableOpacity
                        // onPress={event => this.props.navigation.navigate('Logout')}
                    //onPress=c
                    onPress={onPressAction}
                    style={[{
                        margin: 10, 
                        borderColor: 'gray',
                        borderWidth: 0.5,
                        borderRadius: 5
                    }, style]}
        >
            {children}
        </TouchableOpacity>
    )
}

export default Button
