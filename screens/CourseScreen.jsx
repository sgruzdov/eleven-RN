import React, { useContext } from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity, Linking } from 'react-native'

import { Context } from '../assets/context'
import Button from '../components/Button'

const CourseScreen = () => {
    const { COLORS, windowWidth } = useContext(Context)

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
                <Button
                    onPress={() => Linking.openURL('https://eleven.city/test/?utm_source=app')}
                    viewStyle={{ marginVertical: 0, marginBottom: 35, width: 200, height: 50 }}
                >
                    <Text
                        style={{
                            fontFamily: 'Roboto_500',
                            color: COLORS.first,
                        }}
                    >
                        Пройти
                    </Text>
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default CourseScreen
