import React, { useContext } from 'react'
import { Text, SafeAreaView, View, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Svg, { G, Path } from 'react-native-svg'

import { Context } from '../assets/context'
const AddCardScreen = () => {
    const { COLORS, PADDING_HORIZONTAL } = useContext(Context)

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.data)
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
            ></ScrollView>
        </SafeAreaView>
    )
}

export default AddCardScreen
