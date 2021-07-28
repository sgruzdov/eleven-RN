import React, { useContext } from 'react'
import { Image, View, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { useSelector } from 'react-redux'

import { Context } from '../assets/context'
import ScreenWrapper from '../components/ScreenWrapper'

const PromoScreen = () => {
    const { COLORS, PADDING_HORIZONTAL } = useContext(Context)
    const user = useSelector(state => state.user.data)

    return (
        <ScreenWrapper>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                }}
            >
                <Image
                    source={require('../assets/images/promo.png')}
                    style={{
                        width: 200,
                        height: 244,
                        marginTop: 50,
                    }}
                />
                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: 'Roboto_700',
                        maxWidth: 300,
                        textAlign: 'center',
                        marginTop: 50,
                        color: COLORS.first,
                    }}
                >
                    Приглашайте друзей и получайте бесплатные старты!
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        fontFamily: 'Roboto_300',
                        maxWidth: 300,
                        textAlign: 'center',
                        marginTop: 15,
                        color: COLORS.firstLight,
                    }}
                >
                    Ваши друзья получат бесплатный старт на первую поездку. После того, как они совершат, вы тоже
                    получите бесплатный старт.
                </Text>
                <Text
                    style={{
                        fontSize: 13,
                        fontFamily: 'Roboto_300',
                        maxWidth: 300,
                        textAlign: 'center',
                        marginTop: 45,
                        color: COLORS.firstLight,
                        paddingHorizontal: PADDING_HORIZONTAL,
                    }}
                >
                    Поделитесь вашим промокодом
                </Text>
                <View
                    style={{
                        borderRadius: 50,
                        backgroundColor: COLORS.orange,
                        marginBottom: 25,
                        marginTop: 10,
                        paddingHorizontal: 10,
                        ...COLORS.buttonShadow,
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                            width: 230,
                            height: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Svg
                            style={{
                                position: 'absolute',
                                top: 13,
                                left: 0,
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 512 512"
                            fill={COLORS.first}
                        >
                            <Path d="M378,324a69.78,69.78,0,0,0-48.83,19.91L202,272.41a69.68,69.68,0,0,0,0-32.82l127.13-71.5A69.76,69.76,0,1,0,308.87,129l-130.13,73.2a70,70,0,1,0,0,107.56L308.87,383A70,70,0,1,0,378,324Z" />
                        </Svg>
                        <Text
                            style={{
                                fontFamily: 'Roboto_500',
                                fontSize: 16,
                                color: COLORS.first,
                                marginLeft: 10,
                                color: COLORS.first,
                            }}
                        >
                            {user.promo}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default PromoScreen
