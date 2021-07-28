import React, { useContext, useState } from 'react'
import { Text, TouchableWithoutFeedback, View, Image, TextInput } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import ScreenWrapper from '../components/ScreenWrapper'

import { Context } from '../assets/context'
import { useSelector, useDispatch } from 'react-redux'

const SertificatesScreen = () => {
    const { COLORS, PADDING_HORIZONTAL } = useContext(Context)
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.data)

    const handleChangeInput = value => {
        if (value.length !== 7) {
            setInputValue(value)
        } else {
            setInputValue(value)
            console.log(value)
        }
    }

    return (
        <ScreenWrapper>
            <TouchableWithoutFeedback>
                <View
                    style={{
                        backgroundColor: COLORS.orange,
                        borderRadius: 20,
                        paddingHorizontal: PADDING_HORIZONTAL,
                        paddingVertical: 20,
                        marginTop: 20,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.first,
                        }}
                    >
                        Приглашайте {'\n'}друзей и получайте
                    </Text>
                    <Text
                        style={{
                            color: COLORS.first,
                            fontSize: 40,
                            fontFamily: 'Roboto_700',
                            marginTop: 10,
                        }}
                    >
                        1 старт
                    </Text>
                    <Image
                        style={{
                            position: 'absolute',
                            width: 140,
                            height: 171,
                            right: 20,
                            top: -25,
                        }}
                        source={require('../assets/images/promo.png')}
                    />
                </View>
            </TouchableWithoutFeedback>
            <View
                style={{
                    backgroundColor: COLORS.red,
                    borderRadius: 20,
                    paddingHorizontal: PADDING_HORIZONTAL,
                    paddingTop: 20,
                    paddingBottom: 25,
                    marginTop: 20,
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 18,
                        fontFamily: 'Roboto_500',
                    }}
                >
                    У вас есть {'\n'}промокод?
                </Text>
                <Text
                    style={{
                        color: '#fff',
                        marginTop: 10,
                    }}
                >
                    Введите и получите {'\n'}сертификат
                </Text>
                <TextInput
                    autoCorrect={false}
                    placeholder="Введите промокод"
                    textAlign="center"
                    value={inputValue}
                    onChangeText={handleChangeInput}
                    style={{
                        backgroundColor: '#fff',
                        width: 180,
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 5,
                        fontSize: 16,
                        fontFamily: 'Roboto_700',
                        color: COLORS.first,
                        ...COLORS.buttonShadow,
                    }}
                />
            </View>
            {user.sertificates.active.length !== 0 && (
                <View
                    style={{
                        marginTop: 38,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 22,
                            color: COLORS.first,
                            fontFamily: 'Roboto_700',
                        }}
                    >
                        Активированные
                    </Text>
                    {user.sertificates.active.map(item => {
                        return (
                            <View
                                key={item._id}
                                style={{
                                    position: 'relative',
                                    marginTop: 20,
                                    borderRadius: 20,
                                    backgroundColor: '#fff',
                                    ...COLORS.buttonShadow,
                                    shadowOpacity: 0.15,
                                    shadowRadius: 10,
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        paddingHorizontal: PADDING_HORIZONTAL + 5,
                                        paddingTop: 17,
                                        paddingBottom: 27,
                                        overflow: 'hidden',
                                        borderRadius: 20,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: COLORS.first,
                                            fontFamily: 'Roboto_700',
                                            fontSize: 21,
                                        }}
                                    >
                                        1 старт
                                    </Text>
                                    <Text
                                        style={{
                                            color: COLORS.first,
                                            marginTop: 10,
                                            fontSize: 16,
                                        }}
                                    >
                                        Код: {item.code}
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: 20,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.first,
                                                fontSize: 16,
                                            }}
                                        >
                                            Осталось:
                                        </Text>
                                        <Text
                                            style={{
                                                color: COLORS.first,
                                                fontSize: 17,
                                                fontFamily: 'Roboto_500',
                                            }}
                                        >
                                            {item.amount}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: 22,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.first,
                                                fontSize: 16,
                                            }}
                                        >
                                            Действителен до:
                                        </Text>
                                        <Text
                                            style={{
                                                color: COLORS.first,
                                                fontSize: 17,
                                                fontFamily: 'Roboto_500',
                                            }}
                                        >
                                            {item.end}
                                        </Text>
                                    </View>
                                    <Svg
                                        style={{
                                            width: 90,
                                            height: 90,
                                            position: 'absolute',
                                            zIndex: -1,
                                            bottom: -5,
                                            right: -6,
                                        }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <Path
                                            fill={COLORS.borderColor}
                                            d="M464 144h-26.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H48c-26.5 0-48 21.5-48 48v128c0 8.8 7.2 16 16 16h16v107.4c0 29 23.6 52.6 52.6 52.6h342.8c29 0 52.6-23.6 52.6-52.6V336h16c8.8 0 16-7.2 16-16V192c0-26.5-21.5-48-48-48zM232 448H84.6c-2.5 0-4.6-2-4.6-4.6V336h112v-48H48v-96h184v256zm-78.1-304c-22.1 0-40-17.9-40-40s17.9-40 40-40c22 0 37.5 7.6 84.1 77l2 3h-86.1zm122-3C322.5 71.6 338 64 360 64c22.1 0 40 17.9 40 40s-17.9 40-40 40h-86.1l2-3zM464 288H320v48h112v107.4c0 2.5-2 4.6-4.6 4.6H280V192h184v96z"
                                        ></Path>
                                    </Svg>
                                </View>
                            </View>
                        )
                    })}
                </View>
            )}
            {user.sertificates.noActive.length !== 0 && (
                <View
                    style={{
                        marginTop: 22,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 22,
                            color: COLORS.first,
                            fontFamily: 'Roboto_700',
                        }}
                    >
                        Больше не действуют
                    </Text>
                    {user.sertificates.noActive.map(item => {
                        return (
                            <View
                                key={item._id}
                                style={{
                                    marginTop: 20,
                                    borderRadius: 20,
                                    paddingHorizontal: PADDING_HORIZONTAL + 5,
                                    paddingTop: 17,
                                    paddingBottom: 27,
                                    backgroundColor: COLORS.borderColor,
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.firstLight,
                                        fontFamily: 'Roboto_700',
                                        fontSize: 21,
                                    }}
                                >
                                    1 старт
                                </Text>
                                <Text
                                    style={{
                                        color: COLORS.firstLight,
                                        marginTop: 10,
                                        fontSize: 16,
                                    }}
                                >
                                    Код: {item.code}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginTop: 20,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: COLORS.firstLight,
                                            fontSize: 16,
                                        }}
                                    >
                                        Осталось:
                                    </Text>
                                    <Text
                                        style={{
                                            color: COLORS.firstLight,
                                            fontSize: 17,
                                            fontFamily: 'Roboto_500',
                                        }}
                                    >
                                        {item.amount}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginTop: 22,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: COLORS.firstLight,
                                            fontSize: 16,
                                        }}
                                    >
                                        Действителен до:
                                    </Text>
                                    <Text
                                        style={{
                                            color: COLORS.firstLight,
                                            fontSize: 17,
                                            fontFamily: 'Roboto_500',
                                        }}
                                    >
                                        {item.end}
                                    </Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            )}
        </ScreenWrapper>
    )
}

export default SertificatesScreen
