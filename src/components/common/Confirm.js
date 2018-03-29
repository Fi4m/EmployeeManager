import React from 'react'
import { View, Text, Modal } from 'react-native'
import Button from './Button'

const Confirm = ({ visible, children, onAccept, onDecline }) => {
    return (
        <Modal
            visible={visible}
            animationType='fade'
            onRequestClose={() => {}}
            transparent
        >
            <View
                style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <View style={{ backgroundColor: 'white', width: '90%', borderRadius: 5 }}>

                    <Text style={{ textAlign: 'center', padding: 10 }}>{children}</Text>

                    <View style={{ flexDirection: 'row' }}>
                    
                        <Button
                            onPressAction={onAccept}
                            style={{
                                margin: 10, 
                                borderColor: 'black',
                                borderWidth: 0.5,
                                borderRadius: 5,
                                flex: 1
                            }}
                        >
                            <Text style={{ textAlign: 'center', padding: 10 }} >Yes</Text>
                        </Button>

                        <Button 
                            onPressAction={onDecline}
                            style={{
                                margin: 10, 
                                borderColor: 'black',
                                borderWidth: 0.5,
                                borderRadius: 5,
                                flex: 1
                            }}
                        >
                            <Text style={{ textAlign: 'center', padding: 10 }} >No</Text>
                        </Button>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export { Confirm }
