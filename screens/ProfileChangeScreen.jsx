import React, { useContext, useState, useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Alert,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Svg, { Path } from 'react-native-svg'

import { Context } from '../assets/context'
import { changeUserSettingsThunk } from '../redux/reducers/userReducer'
import ModalCodeNumber from '../components/ModalCodeNumber'
import Button from '../components/Button'

const ProfileChangeScreen = () => {
    const { COLORS, PADDING_HORIZONTAL } = useContext(Context)
    const user = useSelector(state => state.user.data)
    const dispatch = useDispatch()

    const [userInput, setUserInput] = useState(() => {
        return {
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            email: user.email || '',
            code: user.phone.code,
            number: user.phone.number,
        }
    })
    const [numberCode, setNumberCode] = useState(() => userInput.code)
    const [modal, setModal] = useState(false)

    const handleChangeInput = (type, value) => {
        setUserInput({ ...userInput, [type]: value })
    }

    const handleClick = () => {
        if (userInput.number.length === 0) {
            Alert.alert('Ошибка', 'Номер телефона не может быть пустым', [
                {
                    text: 'Ок',
                    style: 'default',
                },
            ])
        } else {
            if (user.username === `${numberCode}${userInput.number}`) {
                dispatch(
                    changeUserSettingsThunk({
                        firstName: userInput.firstName,
                        lastName: userInput.lastName,
                        email: userInput.email,
                        username: user.username,
                    })
                )
            } else {
                dispatch(
                    changeUserSettingsThunk({
                        firstName: userInput.firstName,
                        lastName: userInput.lastName,
                        email: userInput.email,
                        code: numberCode,
                        number: userInput.number,
                        username: user.username,
                    })
                )
            }
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.bgWhite,
            }}
        >
            <ScrollView style={{ flex: 1, paddingHorizontal: PADDING_HORIZONTAL }}>
                <Text
                    style={{
                        fontSize: 15,
                        color: COLORS.firstLight,
                        fontFamily: 'Roboto_500',
                        marginTop: 20,
                    }}
                >
                    Добавьте информацию о вас.
                </Text>
                <View
                    style={{
                        marginTop: 20,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            color: COLORS.firstLight,
                        }}
                    >
                        Имя
                    </Text>
                    <View style={{ position: 'relative' }}>
                        <TextInput
                            style={{
                                marginTop: 8,
                                borderWidth: 2,
                                borderColor: COLORS.borderColor,
                                borderRadius: 10,
                                paddingLeft: 10,
                                paddingRight: 40,
                                paddingVertical: 8,
                                fontSize: 20,
                            }}
                            value={userInput.firstName}
                            onChangeText={e => handleChangeInput('firstName', e)}
                        />
                        {userInput.firstName.length !== 0 ? (
                            <Svg
                                style={{ position: 'absolute', right: 8, top: 14 }}
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                            >
                                <Path
                                    fill={userInput.firstName.length !== 0 ? COLORS.green : COLORS.red}
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                ></Path>
                            </Svg>
                        ) : (
                            <Svg
                                viewBox="0 0 24 24"
                                style={{ position: 'absolute', right: 8, top: 14 }}
                                width="30"
                                height="30"
                            >
                                <Path
                                    fill={COLORS.red}
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                ></Path>
                            </Svg>
                        )}
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            color: COLORS.firstLight,
                        }}
                    >
                        Фамилия
                    </Text>
                    <View style={{ position: 'relative' }}>
                        <TextInput
                            style={{
                                marginTop: 8,
                                borderWidth: 2,
                                borderColor: COLORS.borderColor,
                                borderRadius: 10,
                                paddingLeft: 10,
                                paddingRight: 40,
                                paddingVertical: 8,
                                fontSize: 20,
                            }}
                            value={userInput.lastName}
                            onChangeText={e => handleChangeInput('lastName', e)}
                        />
                        {userInput.lastName.length !== 0 ? (
                            <Svg
                                style={{ position: 'absolute', right: 8, top: 14 }}
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                            >
                                <Path
                                    fill={userInput.lastName.length !== 0 ? COLORS.green : COLORS.red}
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                ></Path>
                            </Svg>
                        ) : (
                            <Svg
                                viewBox="0 0 24 24"
                                style={{ position: 'absolute', right: 8, top: 14 }}
                                width="30"
                                height="30"
                            >
                                <Path
                                    fill={COLORS.red}
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                ></Path>
                            </Svg>
                        )}
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            color: COLORS.firstLight,
                        }}
                    >
                        Email
                    </Text>
                    <View style={{ position: 'relative' }}>
                        <TextInput
                            style={{
                                marginTop: 8,
                                borderWidth: 2,
                                borderColor: COLORS.borderColor,
                                borderRadius: 10,
                                paddingLeft: 10,
                                paddingRight: 40,
                                paddingVertical: 8,
                                fontSize: 20,
                            }}
                            value={userInput.email}
                            onChangeText={e => handleChangeInput('email', e)}
                        />
                        {userInput.email.length !== 0 ? (
                            <Svg
                                style={{ position: 'absolute', right: 8, top: 14 }}
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                            >
                                <Path
                                    fill={userInput.email.length !== 0 ? COLORS.green : COLORS.red}
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                ></Path>
                            </Svg>
                        ) : (
                            <Svg
                                viewBox="0 0 24 24"
                                style={{ position: 'absolute', right: 8, top: 14 }}
                                width="30"
                                height="30"
                            >
                                <Path
                                    fill={COLORS.red}
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                ></Path>
                            </Svg>
                        )}
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            color: COLORS.firstLight,
                        }}
                    >
                        Телефон
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 1,
                        }}
                    >
                        <TouchableWithoutFeedback onPress={() => setModal(true)}>
                            <View
                                style={{
                                    flex: 1.2,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderWidth: 2,
                                    borderColor: COLORS.borderColor,
                                    borderRadius: 10,
                                    marginRight: 15,
                                    height: 52,
                                }}
                            >
                                <Svg style={{ width: 25, height: 25, marginLeft: 10 }} fill="#000" viewBox="0 0 24 24">
                                    <Path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></Path>
                                </Svg>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        color: COLORS.first,
                                        marginRight: 15,
                                    }}
                                >
                                    {numberCode}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TextInput
                            autoCapitalize="none"
                            keyboardType="number-pad"
                            returnKeyLabel="Готово"
                            returnKeyType="done"
                            textContentType="telephoneNumber"
                            value={userInput.number}
                            onChangeText={e => setUserInput({ ...userInput, number: e })}
                            style={{
                                flex: 2,
                                borderWidth: 2,
                                borderColor: COLORS.borderColor,
                                height: 52,
                                fontSize: 18,
                                paddingHorizontal: 10,
                                borderRadius: 10,
                                color: COLORS.first,
                                fontFamily: 'Roboto_400',
                            }}
                        />
                        {userInput.number.length !== 0 ? (
                            <Svg style={{ marginHorizontal: 8 }} width="30" height="30" viewBox="0 0 24 24">
                                <Path fill={COLORS.green} d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></Path>
                            </Svg>
                        ) : (
                            <Svg viewBox="0 0 24 24" style={{ marginHorizontal: 8 }} width="30" height="30">
                                <Path
                                    fill={COLORS.red}
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                ></Path>
                            </Svg>
                        )}
                    </View>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Button onPress={handleClick} viewStyle={{ width: 160, height: 48 }}>
                        <Text
                            style={{
                                fontFamily: 'Roboto_500',
                                fontSize: 18,
                                color: COLORS.first,
                                marginLeft: 10,
                            }}
                        >
                            Сохранить
                        </Text>
                    </Button>
                </View>
            </ScrollView>
            <ModalCodeNumber modal={modal} setModal={setModal} setNumberCode={setNumberCode} />
        </SafeAreaView>
    )
}

export default ProfileChangeScreen
