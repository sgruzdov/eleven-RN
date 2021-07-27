import React, { useContext } from 'react'
import { Text, SafeAreaView, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Linking } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { Context } from '../assets/context'

const HelpScreen = () => {
    const { COLORS, PADDING_HORIZONTAL } = useContext(Context)

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
            >
                <Text
                    style={{
                        color: COLORS.firstLight,
                        marginTop: 20,
                    }}
                >
                    Здесь вы можете получить отвуты на часто задаваемые вопросы и сообщить о проблеме. {'\n \n'}Если вы
                    не нашли ответа - свяжитесь с нашей службой поддержки.
                </Text>
                <View
                    style={{
                        marginTop: 28,
                        flexDirection: 'row',
                    }}
                >
                    <View
                        style={{
                            borderRadius: 50,
                            backgroundColor: COLORS.orange,
                            paddingHorizontal: 20,
                            flex: 1,
                            marginRight: 10,
                        }}
                    >
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('ScanQR')}
                            activeOpacity={0.7}
                            style={{
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'Roboto_500',
                                    // fontSize: 16,
                                    color: COLORS.firstLight,
                                }}
                            >
                                Заказать звонок
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            borderRadius: 50,
                            backgroundColor: COLORS.orange,
                            paddingHorizontal: 20,
                            flex: 1,
                        }}
                    >
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('ScanQR')}
                            activeOpacity={0.7}
                            style={{
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'Roboto_500',
                                    color: COLORS.firstLight,
                                }}
                            >
                                Открыть чат
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        borderColor: COLORS.borderColor,
                        borderWidth: 1,
                        borderRadius: 50,
                        marginTop: 15,
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                            height: 48,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text>FAQ</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        color: COLORS.firstLight,
                        marginTop: 20,
                    }}
                >
                    Подробную информацию Вы найдете в юридических документах Eleven:
                </Text>
                <View style={{ marginTop: 10 }}>
                    <TouchableWithoutFeedback onPress={() => Linking.openURL('https://eleven.city/legal/')}>
                        <Text
                            style={{
                                textDecorationLine: 'underline',
                            }}
                        >
                            Договор аренды Eleven
                        </Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => Linking.openURL('https://eleven.city/legal/terms-of-use/')}
                    >
                        <Text
                            style={{
                                textDecorationLine: 'underline',
                                marginTop: 20,
                            }}
                        >
                            Пользовательское соглашение Eleven
                        </Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => Linking.openURL('https://eleven.city/legal/privacy-policy')}
                    >
                        <Text
                            style={{
                                textDecorationLine: 'underline',
                                marginTop: 15,
                            }}
                        >
                            Политика конфиденциальности и обработки данных Eleven
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HelpScreen
