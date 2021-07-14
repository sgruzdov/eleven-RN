import React from 'react'
import { Dimensions, Text } from 'react-native'
import { useFonts } from '@expo-google-fonts/roboto'
import { Provider } from 'react-redux'

import StartScreen from './screens/StartScreen'
import { lightTheme } from './assets/constants'
import { Context } from './assets/context'
import { store } from './redux/store'

export default function App() {
    const [fontsLoaded] = useFonts({
        'Roboto_100': require('./assets/fonts/Roboto-Thin.ttf'),
        'Roboto_100_Italic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
        'Roboto_300': require('./assets/fonts/Roboto-Light.ttf'),
        'Roboto_300_Italic': require('./assets/fonts/Roboto-LightItalic.ttf'),
        'Roboto_400': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto_400_Italic': require('./assets/fonts/Roboto-RegularItalic.ttf'),
        'Roboto_500': require('./assets/fonts/Roboto-Medium.ttf'),
        'Roboto_500_Italic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
        'Roboto_700': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto_700_Italic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
        'Roboto_900': require('./assets/fonts/Roboto-Black.ttf'),
        'Roboto_900_Italic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
    }) 

    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height


    const context = {
        windowWidth,
        windowHeight,
        COLORS: lightTheme,
        PADDING_HORIZONTAL: 15
    }

    if(!fontsLoaded) {
        return <Text>Загрузка...</Text>
    }

    return (
        <Provider store={store}>
            <Context.Provider value={{...context}}>
                <StartScreen />
            </Context.Provider>
        </Provider>
    )
}
