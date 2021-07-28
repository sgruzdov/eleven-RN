import React, { useContext } from 'react'
import { Text, SafeAreaView, View, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Svg, { G, Path } from 'react-native-svg'

import { Context } from '../assets/context'
import ScreenWrapper from '../components/ScreenWrapper'

const AddCardScreen = () => {
    const { COLORS, PADDING_HORIZONTAL } = useContext(Context)

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.data)
    return (
        <ScreenWrapper>
            <Text>sfgsgbdsgvs</Text>
        </ScreenWrapper>
    )
}

export default AddCardScreen
