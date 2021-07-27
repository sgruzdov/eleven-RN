import React, { useContext } from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity, Linking } from 'react-native'

import { Context } from '../assets/context'

const CourseScreen = () => {
    const { COLORS, PADDING_HORIZONTAL, windowWidth } = useContext(Context)

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.bgWhite,
                position: 'relative',
            }}
        >
            <View
                style={{
                    width: windowWidth,
                    flex: 1,
                    paddingHorizontal: 35,
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                        marginTop: 90,
                    }}
                >
                    <Image
                        style={{
                            width: 210,
                            height: 210,
                        }}
                        source={require('../assets/images/course_1.png')}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 20,
                            fontFamily: 'Roboto_700',
                            color: COLORS.first,
                            marginTop: 35,
                        }}
                    >
                        Пройдите курс парковки и получите бесплатные старты
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: COLORS.firstLight,
                            marginTop: 10,
                        }}
                    >
                        15 вопросов о том, как правильно парковать самокаты. Порядок в городе в наших с вами руках!
                    </Text>
                </View>
            </View>
            <View
                style={{
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        borderRadius: 50,
                        backgroundColor: COLORS.orange,
                        paddingHorizontal: 20,
                        marginBottom: 35,
                        width: 200,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://eleven.city/test/?utm_source=app')}
                        activeOpacity={0.7}
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Roboto_500',
                                color: COLORS.first,
                            }}
                        >
                            Пройти
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CourseScreen
