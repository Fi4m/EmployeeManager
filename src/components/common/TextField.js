import React from 'react'
import { View, Text, TextInput } from 'react-native'

export default TextField = (props) => {
    return (
        <View 
            style={{ flexDirection: 'row',
                padding: 5,
                 alignItems: 'center'
            }}
        >
            <Text
                style={{ width: '30%',
                    paddingLeft: 20 
                    }}
            >{props.title}</Text>
            <TextInput
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder} 
                onChangeText={props.onChangeText}
                value={props.value}
                style={{ flex: 1, 
                    borderColor: '#dddddd', 
                    borderWidth: 0.5, 
                    borderRadius: 5, 
                    padding: 5, 
                    marginRight: 20
                }}
            />
        </View>
    )
}
