import React, { useContext } from 'react'
import { Text, SafeAreaView, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Linking } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { Context } from '../assets/context'
import ScreenWrapper from '../components/ScreenWrapper'
import Button from '../components/Button'

const HelpScreen = () => {
    const { COLORS, PADDING_HORIZONTAL } = useContext(Context)

    return (
        <ScreenWrapper>
            <Text
                style={{
                    color: COLORS.firstLight,
                    marginTop: 20,
                }}
            >
                Здесь вы можете получить отвуты на часто задаваемые вопросы и сообщить о проблеме. {'\n \n'}Если вы не
                нашли ответа - свяжитесь с нашей службой поддержки.
            </Text>
            <View
                style={{
                    marginTop: 28,
                    flexDirection: 'row',
                }}
            >
                <Button viewStyle={{ marginVertical: 0, flex: 1, height: 40, marginRight: 10 }}>
                    <Text
                        style={{
                            fontFamily: 'Roboto_500',
                            color: COLORS.firstLight,
                        }}
                    >
                        Заказать звонок
                    </Text>
                </Button>
                <Button viewStyle={{ marginVertical: 0, flex: 1, height: 40 }}>
                    <Text
                        style={{
                            fontFamily: 'Roboto_500',
                            color: COLORS.firstLight,
                        }}
                    >
                        Открыть чат
                    </Text>
                </Button>
            </View>
            <Button
                viewStyle={{
                    borderColor: COLORS.borderColor,
                    borderWidth: 1,
                    backgroundColor: '#fff',
                    marginVertical: 0,
                    marginTop: 15,
                    height: 50,
                }}
            >
                <Text>FAQ</Text>
            </Button>
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
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://eleven.city/legal/terms-of-use/')}>
                    <Text
                        style={{
                            textDecorationLine: 'underline',
                            marginTop: 20,
                        }}
                    >
                        Пользовательское соглашение Eleven
                    </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://eleven.city/legal/privacy-policy')}>
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
        </ScreenWrapper>
    )
}

export default HelpScreen
