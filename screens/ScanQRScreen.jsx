import React, { useEffect, useState, useContext } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, StatusBar, ScrollView, Image, Linking } from 'react-native'
import { Camera } from 'expo-camera'

import { Context } from '../assets/context'


const ScanQRScreen = ({navigation}) => {
    const {COLORS, PADDING_HORIZONTAL, windowWidth} = useContext(Context)
    const [hasPermission, setHasPermission] = useState(null)

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync()
        setHasPermission(status === 'granted')
        })()
    }, [])


    if (hasPermission === null) {
        return <View />
    }
    if (hasPermission === false) {
        return (
            <SafeAreaView
                style={{
                    flex: 1, 
                    backgroundColor: '#000'
                }}
            >
                <View
                    style={{
                        alignItems: 'flex-end',
                        paddingBottom: 20
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                    >
                        <Text
                            style={{
                                color: COLORS.firstLight,
                                marginTop: 25,
                                paddingHorizontal: PADDING_HORIZONTAL,
                                fontSize: 16,
                                fontFamily: 'Roboto_300'
                            }}
                        >Пропустить</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View
                        style={{
                            paddingTop: 80,
                            alignItems: 'center',
                            paddingHorizontal: 40
                        }}
                    >
                        <Image 
                            style={{
                                width: 230,
                                height: 230
                            }}
                            source={require('../assets/images/scan.png')}
                        />
                        <Text
                            style={{
                                marginTop: 55,
                                fontSize: 18, 
                                color: COLORS.first,
                                fontFamily: 'Roboto_700',
                                textAlign: 'center'
                            }}
                        >Дайте доступ к камере,{'\n'}для работы QR-сканера</Text>
                        <Text
                            style={{
                                marginTop: 65,
                                fontSize: 16, 
                                color: COLORS.first,
                                fontFamily: 'Roboto_300',
                                textAlign: 'center',
                            }}
                        >Доступ к камере нужен для{'\n'}работы QR-сканера, что{'\n'}поможет быстро активировать{'\n'}самокат.</Text>
                        <View
                            style={{
                                width: windowWidth - 80,
                                height: 40,
                                backgroundColor: COLORS.orange,
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 75,
                            }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => Linking.openSettings()}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontFamily: 'Roboto_500',
                                        color: COLORS.first
                                    }}
                                >Дать доступ к камере</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    
    return (
        <View 
            style={{
                flex: 1,
            }}
        >
            <StatusBar hidden animated={true}/>
            <Camera
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
                type={Camera.Constants.Type.back}
            >

            </Camera>
        </View>
    )
}

export default ScanQRScreen
