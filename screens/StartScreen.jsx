import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

import SignScreen from './SignScreen'
import ConfirmNumberScreen from './ConfirmNumberScreen'
import HomeScreen from './HomeScreen'
import Loading from '../components/Loading'
import PromoScreen from './PromoScreen'
import ProfileScreen from './ProfileScreen'
import InstructionScreen from './InstructionScreen'
import ScanQRScreen from './ScanQRScreen'
import ProfileChangeScreen from './ProfileChangeScreen'
import PaymentScreen from './PaymentScreen'
import AddCardScreen from './AddCardScreen'
import HistoryScreen from './HistoryScreen'
import HelpScreen from './HelpScreen'
import CourseScreen from './CourseScreen'

const Stack = createStackNavigator()

const StartScreen = () => {
    const settings = useSelector(state => state.settings)

    const initialScreen = 'Home'

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={initialScreen}>
                    <Stack.Screen
                        options={{
                            title: 'Войти',
                            headerShown: false,
                            headerBackTitleStyle: {
                                color: '#000',
                            },
                        }}
                        name="Sign"
                        component={SignScreen}
                    />
                    <Stack.Screen
                        name="ConfirmNumber"
                        component={ConfirmNumberScreen}
                        options={{
                            title: 'Подтвердите номер',
                            headerBackTitleVisible: false,
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'Главная',
                            headerShown: false,
                            swipeEnabled: true,
                        }}
                    />
                    <Stack.Screen
                        name="Promo"
                        component={PromoScreen}
                        options={{
                            title: 'Промо',
                            headerBackTitleVisible: false,
                            headerTitleStyle: {
                                opacity: 0,
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={ProfileScreen}
                        options={({ navigation }) => ({
                            title: 'Аккаунт',
                            headerBackTitleVisible: false,
                            headerRight: e => (
                                <Svg
                                    onPress={() => navigation.navigate('ProfileChange')}
                                    style={{ marginRight: 15 }}
                                    width="25"
                                    height="25"
                                    viewBox="0 0 24 24"
                                >
                                    <Path
                                        fill="#2d3436"
                                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                                    ></Path>
                                </Svg>
                            ),
                        })}
                    />
                    <Stack.Screen
                        options={{
                            headerShown: false,
                            swipeEnabled: true,
                        }}
                        name="Instruction"
                        component={InstructionScreen}
                    />
                    <Stack.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="ScanQR"
                        component={ScanQRScreen}
                    />
                    <Stack.Screen
                        options={{
                            title: 'Аккаунт',
                            headerBackTitleVisible: false,
                        }}
                        name="ProfileChange"
                        component={ProfileChangeScreen}
                    />
                    <Stack.Screen
                        options={{
                            title: 'Оплата',
                            headerBackTitleVisible: false,
                        }}
                        name="Payment"
                        component={PaymentScreen}
                    />
                    <Stack.Screen
                        options={{
                            title: 'Добавление карты',
                            headerBackTitleVisible: false,
                        }}
                        name="AddCard"
                        component={AddCardScreen}
                    />
                    <Stack.Screen
                        options={{
                            title: 'История поездок',
                            headerBackTitleVisible: false,
                        }}
                        name="History"
                        component={HistoryScreen}
                    />
                    <Stack.Screen
                        options={{
                            title: 'Помощь',
                            headerBackTitleVisible: false,
                        }}
                        name="Help"
                        component={HelpScreen}
                    />
                    <Stack.Screen
                        options={{
                            title: 'Курс парковки',
                            headerBackTitleVisible: false,
                            headerTitleStyle: {
                                opacity: 0,
                            },
                        }}
                        name="Course"
                        component={CourseScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            {settings.loading && <Loading />}
        </>
    )
}

export default StartScreen
