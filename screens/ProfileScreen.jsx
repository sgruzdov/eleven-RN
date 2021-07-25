import React, { useContext } from 'react'
import { SafeAreaView, Text, View, TouchableWithoutFeedback } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { useSelector } from 'react-redux'

import { Context } from '../assets/context'

const ProfileScreen = () => {
    const { COLORS, PADDING_HORIZONTAL } = useContext(Context)

    const user = useSelector(state => state.auth.user)

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.bgWhite,
            }}
        >
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: PADDING_HORIZONTAL + 5,
                }}
            >
                <View
                    style={{
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Roboto_300',
                            color: COLORS.first,
                            fontSize: 12,
                        }}
                    >
                        Имя Фамилия
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Roboto_700',
                            color: COLORS.firstLight,
                            fontSize: 18,
                            marginTop: 7,
                        }}
                    >
                        {user.firstName || user.lastName
                            ? `${user.firstName ? `${user.firstName} ` : ''}${user.lastName ? `${user.lastName} ` : ''}`
                            : ''}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Roboto_300',
                            color: COLORS.first,
                            fontSize: 12,
                        }}
                    >
                        Email
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Roboto_700',
                            color: COLORS.firstLight,
                            fontSize: 18,
                            marginTop: 5,
                        }}
                    >
                        {user.email ? user.email : ''}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'Roboto_300',
                            color: COLORS.first,
                            fontSize: 12,
                        }}
                    >
                        Телефон
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Roboto_700',
                            color: COLORS.firstLight,
                            fontSize: 18,
                            marginTop: 5,
                        }}
                    >
                        {user.username}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 'auto',
                        marginBottom: 40,
                    }}
                >
                    <TouchableWithoutFeedback>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Svg width="20" height="20" viewBox="0 0 24 24">
                                <Path
                                    fill={COLORS.first}
                                    d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
                                ></Path>
                            </Svg>
                            <Text
                                style={{
                                    color: COLORS.first,
                                    marginLeft: 5,
                                }}
                            >
                                Выйти
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen
