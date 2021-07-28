import React, { useContext, useState, useEffect } from 'react'
import { Alert, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Context } from '../assets/context'
import { CONFIRM_CODE, REMOVE_ERRORS, loginThunk } from '../redux/reducers/authReducer'
import Button from '../components/Button'

const ConfirmNumberScreen = ({ navigation }) => {
    const { COLORS } = useContext(Context)

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const [code, setCode] = useState('')

    useEffect(() => {
        auth.auth && navigation.navigate('Home')
    }, [auth.auth])

    useEffect(() => {
        if (code.length === 6) {
            dispatch({ type: CONFIRM_CODE, payload: +code })
            dispatch(loginThunk({ code: auth.userNumber.code, number: auth.userNumber.number }))
        }
    }, [code])

    useEffect(() => {
        if (auth.errorCode === 1) {
            Alert.alert('Ошибка', 'Неправильный код', [
                {
                    text: 'Ок',
                    style: 'default',
                    onPress: () => dispatch({ type: REMOVE_ERRORS }),
                },
            ])
        }
    }, [auth.errorCode])

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: COLORS.bgWhite,
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    color: COLORS.first,
                    marginTop: 40,
                }}
            >
                Введите код, высланный на {'\n'}ваш телефон
            </Text>
            <TextInput
                autoCapitalize="none"
                keyboardType="number-pad"
                returnKeyLabel="Готово"
                returnKeyType="done"
                textAlign="center"
                value={code}
                onChangeText={setCode}
                autoFocus
                style={{
                    marginTop: 25,
                    width: 200,
                    height: 50,
                    borderWidth: 1,
                    borderColor: COLORS.borderColor,
                    fontSize: 16,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    color: COLORS.first,
                    fontFamily: 'Roboto_400',
                }}
            />
            <Button
                viewStyle={{
                    marginTop: 25,
                    width: 200,
                    height: 48,
                    borderWidth: 1,
                    borderColor: COLORS.borderColor,
                    paddingHorizontal: 10,
                    backgroundColor: '#fff',
                }}
            >
                <Text>Отправить код повторно</Text>
            </Button>
        </View>
    )
}

export default ConfirmNumberScreen
