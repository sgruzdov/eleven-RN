import React, { useContext } from 'react'
import { View, TouchableOpacity } from 'react-native'

import { Context } from '../assets/context'

const Button = ({ children, onPress, disabled = false, activeOpacity = 0.7, viewStyle, touchableStyle }) => {
    const { COLORS } = useContext(Context)

    if (onPress === undefined) {
        onPress = () => console.log('Button undefined')
    }

    return (
        <View
            style={{
                borderRadius: 50,
                backgroundColor: COLORS.orange,
                marginVertical: 25,
                paddingHorizontal: 20,
                ...viewStyle,
            }}
        >
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                activeOpacity={activeOpacity}
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...touchableStyle,
                }}
            >
                {children}
            </TouchableOpacity>
        </View>
    )
}

export default Button
