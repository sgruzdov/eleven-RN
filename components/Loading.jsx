import React, { useContext } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import { Context } from '../assets/context'

const Loading = () => {
    const {windowHeight, windowWidth, COLORS} = useContext(Context)


    return (
        <View
            style={{
                flex: 1,
                position: 'absolute',
                width: windowWidth,
                height: windowHeight,
                backgroundColor: '#00000030',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
            }}
        >
            <ActivityIndicator style={{
                transform: [
                    {scale: 2.5}
                ]
            }} size="large" color={COLORS.orange} />
        </View>
    )
}

export default Loading
