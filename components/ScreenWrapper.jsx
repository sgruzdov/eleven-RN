import React, { useContext } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import { Context } from '../assets/context'

const ScreenWrapper = ({ children }) => {
    const { COLORS, PADDING_HORIZONTAL, windowWidth } = useContext(Context)

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.bgWhite,
            }}
        >
            <ScrollView
                style={{
                    flex: 1,
                    paddingHorizontal: PADDING_HORIZONTAL + 5,
                }}
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ScreenWrapper
