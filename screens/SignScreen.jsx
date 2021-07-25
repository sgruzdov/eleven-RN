import React, { useContext, useState, useEffect } from 'react'
import {
    Text,
    Alert,
    View,
    Platform,
    SafeAreaView,
    TouchableWithoutFeedback,
    TextInput,
    Modal,
    ScrollView,
    Image,
    LayoutAnimation,
    UIManager,
    TouchableOpacity,
} from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { BlurView } from 'expo-blur'
import { useSelector, useDispatch } from 'react-redux'

import { Context } from '../assets/context'
import { confirmCodeThunk, REMOVE_ERRORS } from '../redux/reducers/authReducer'
import ModalCodeNumber from '../components/ModalCodeNumber'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

const SignScreen = ({ navigation }) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

    const { windowHeight, windowWidth, COLORS } = useContext(Context)

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [numberCode, setNumberCode] = useState('+375')
    const [modal, setModal] = useState(false)
    const [number, setNumber] = useState('')
    const [inputFocus, setInputFocus] = useState(false)
    const [radioButton, setRadioButton] = useState(false)

    const handleSubmit = () => {
        if (number.length > 0) {
            dispatch(confirmCodeThunk({ numberCode, number }))
        }
    }

    useEffect(() => {
        if (auth.errorCode === 2) {
            Alert.alert('Ошибка отправки запроса', 'Повторите попытку позже', [
                {
                    text: 'Ок',
                    style: 'default',
                    onPress: () => dispatch({ type: REMOVE_ERRORS }),
                },
            ])
        } else if (auth.errorCode === 0 && auth.confirmCode !== null) {
            navigation.navigate('ConfirmNumber')
        }
    }, [auth.errorCode, auth.confirmCode])

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.bgWhite,
            }}
        >
            <View
                style={{
                    alignItems: 'center',
                    position: 'absolute',
                    top: inputFocus ? (windowHeight / 100) * 30 - 30 : (windowHeight / 100) * 30,
                    width: windowWidth,
                    paddingHorizontal: 30,
                }}
            >
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 196 32"
                    width="210"
                    height="46"
                    fill={COLORS.first}
                >
                    <Path
                        d="M195.41 31.14V13.83c0-8.65-5-13.83-12.88-13.83a13.29 13.29 0 00-10 4.11V.85h-6.68v30.3h7V16c0-5.37 3.52-9 8.2-9 4.44 0 7.35 3.23 7.35 8.1v16.04zM62.24 16c0-8.84 6.45-15.91 16-15.91C88.55.06 95 8.41 94.13 18.77H69.48c.72 4 4.19 6.83 8.8 6.83 4.13 0 6.86-1.65 8.2-4.14h7.11C91.82 27.86 86.11 32 78.4 32c-9.84 0-16.16-6.95-16.16-16zm7.26-2.86h17.41c-.79-3.87-4.11-6.59-8.75-6.59s-7.92 2.68-8.66 6.56zM0 16C0 7.13 6.44.06 16 .06c10.26 0 16.7 8.35 15.85 18.71H7.24c.72 4 4.19 6.83 8.79 6.83 4.13 0 6.87-1.65 8.21-4.15h7.1C29.58 27.85 23.87 32 16.16 32 6.32 32 0 25.05 0 16zm7.26-2.9h17.4c-.79-3.87-4.1-6.58-8.75-6.58S8 9.23 7.26 13.1zM94.77.85h7.59l9.1 21.27h.26L120.65.85h7.47l-13.24 30.3H108zm34 15.12c0-8.84 6.45-15.91 16-15.91 10.27 0 16.71 8.35 15.85 18.71H136c.72 4 4.19 6.83 8.8 6.83 4.13 0 6.86-1.65 8.2-4.14h7.11c-1.76 6.4-7.46 10.54-15.18 10.54-9.84 0-16.16-6.95-16.16-16zm7.23-2.86h17.41c-.79-3.87-4.11-6.59-8.75-6.59s-7.89 2.71-8.66 6.59zM45.41.85l-13.24 30.3h28.75v-6.9H42.65L52.88.85z"
                        fillRule="evenodd"
                    ></Path>
                </Svg>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 40,
                    }}
                >
                    <TouchableWithoutFeedback onPress={() => setModal(true)}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: COLORS.borderColor,
                                borderRadius: 7,
                                marginRight: 15,
                                height: 40,
                            }}
                        >
                            <Svg style={{ width: 25, height: 25, marginLeft: 10 }} fill="#000" viewBox="0 0 24 24">
                                <Path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></Path>
                            </Svg>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: COLORS.first,
                                    marginRight: 15,
                                }}
                            >
                                {numberCode}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TextInput
                        placeholder="Ваш телефон"
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        returnKeyLabel="Готово"
                        returnKeyType="done"
                        textContentType="telephoneNumber"
                        value={number}
                        onChangeText={setNumber}
                        autoFocus
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                        style={{
                            flex: 2,
                            borderWidth: 1,
                            borderColor: COLORS.borderColor,
                            height: 40,
                            fontSize: 16,
                            paddingHorizontal: 10,
                            borderRadius: 7,
                            color: COLORS.first,
                            fontFamily: 'Roboto_400',
                        }}
                    />
                </View>
                <View
                    style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        width: windowWidth - 60,
                    }}
                >
                    <TouchableWithoutFeedback onPress={() => setRadioButton(!radioButton)}>
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                borderColor: radioButton ? COLORS.orange : '#000',
                                backgroundColor: radioButton ? COLORS.orange : '#fff',
                                borderWidth: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Svg style={{ width: 13, height: 13, fill: '#fff' }} viewBox="0 0 24 24">
                                <Path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></Path>
                            </Svg>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text
                        style={{
                            marginLeft: 20,
                            color: COLORS.firstLight,
                            fontSize: 13,
                        }}
                    >
                        Я принимаю условия Пользовательского соглашения, Политики конфиденциальности, Договора аренды и
                        подтверждаю, что мне исполнилось 18 лет
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    disabled={radioButton && number.length > 0 ? false : true}
                    onPress={handleSubmit}
                >
                    <View
                        style={{
                            width: 200,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            backgroundColor: radioButton && number.length > 0 ? COLORS.orange : COLORS.buttonDisabled,
                            marginTop: 40,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color: radioButton && number.length > 0 ? COLORS.first : COLORS.firstLight,
                            }}
                        >
                            Войти
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ModalCodeNumber modal={modal} setModal={setModal} setNumberCode={setNumberCode} />
        </SafeAreaView>
    )
}

export default SignScreen
