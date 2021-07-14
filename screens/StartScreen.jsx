import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

import SignScreen from './SignScreen'
import ConfirmNumberScreen from './ConfirmNumberScreen'
import HomeScreen from './HomeScreen'
import Loading from '../components/Loading'
import PromoScreen from './PromoScreen'
import ProfileScreen from './ProfileScreen'
import InstructionScreen from './InstructionScreen'

const Stack = createStackNavigator()


const StartScreen = () => {
    const settings = useSelector(state => state.settings)

    const initialScreen = 'Home'

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={initialScreen}
                >
                    <Stack.Screen
                        options={{ 
                            title: 'Войти', 
                            headerShown: false,
                            headerBackTitleStyle: {
                                color: '#000'
                            }
                        }}
                        name="Sign" 
                        component={SignScreen} 
                    />
                    <Stack.Screen
                        name="ConfirmNumber" 
                        component={ConfirmNumberScreen} 
                        options={{
                            title: 'Подтвердите номер',
                            headerBackTitleVisible: false
                        }}
                    />
                    <Stack.Screen 
                        name="Home" 
                        component={HomeScreen}
                        options={{ 
                            title: 'Главная', 
                            headerShown: false,
                            animationEnabled: false
                        }} 
                    />
                    <Stack.Screen 
                        name="Promo" 
                        component={PromoScreen} 
                        options={{
                            title: 'Промо',
                            headerBackTitleVisible: false,
                            headerTitleStyle: {
                                opacity: 0
                            }
                        }}
                    />
                    <Stack.Screen 
                        name="Profile" 
                        component={ProfileScreen} 
                        options={{
                            title: 'Аккаунт',
                            headerBackTitleVisible: false,
                        }}
                    />
                    <Stack.Screen
                        options={{ 
                            headerShown: false,
                            animationEnabled: false
                        }}
                        name="Instruction" 
                        component={InstructionScreen} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
            {settings.loading && <Loading />}
        </>
    )
}

export default StartScreen
