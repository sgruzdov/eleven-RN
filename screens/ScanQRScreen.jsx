import React, { useEffect, useState, useContext } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Image,
    Linking,
    TouchableWithoutFeedback,
    Modal,
    TextInput,
    UIManager,
    LayoutAnimation,
} from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg'
import { Camera } from 'expo-camera'

import { Context } from '../assets/context'
import Button from '../components/Button'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

const ScanQRScreen = ({ navigation }) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

    const { COLORS, PADDING_HORIZONTAL, windowWidth, windowHeight } = useContext(Context)
    const [hasPermission, setHasPermission] = useState(null)
    const [flash, setFlash] = useState(false)
    const [modal, setModal] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [inputFocus, setInputFocus] = useState(false)

    const handleChangeInput = value => {
        if (value.length !== 7) {
            setInputValue(value)
        } else {
            setInputValue(value)
            console.log(value)
        }
    }

    useEffect(() => {
        ;(async () => {
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
                    backgroundColor: '#000',
                }}
            >
                <View
                    style={{
                        alignItems: 'flex-end',
                        paddingBottom: 20,
                    }}
                >
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Text
                            style={{
                                color: COLORS.firstLight,
                                marginTop: 25,
                                paddingHorizontal: PADDING_HORIZONTAL,
                                fontSize: 16,
                                fontFamily: 'Roboto_300',
                            }}
                        >
                            Пропустить
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            paddingTop: 80,
                            alignItems: 'center',
                            paddingHorizontal: 40,
                        }}
                    >
                        <Image
                            style={{
                                width: 230,
                                height: 230,
                            }}
                            source={require('../assets/images/scan.png')}
                        />
                        <Text
                            style={{
                                marginTop: 55,
                                fontSize: 18,
                                color: COLORS.first,
                                fontFamily: 'Roboto_700',
                                textAlign: 'center',
                            }}
                        >
                            Дайте доступ к камере,{'\n'}для работы QR-сканера
                        </Text>
                        <Text
                            style={{
                                marginTop: 65,
                                fontSize: 16,
                                color: COLORS.first,
                                fontFamily: 'Roboto_300',
                                textAlign: 'center',
                            }}
                        >
                            Доступ к камере нужен для{'\n'}работы QR-сканера, что{'\n'}поможет быстро активировать{'\n'}
                            самокат.
                        </Text>
                        <Button
                            onPress={() => Linking.openSettings()}
                            viewStyle={{
                                width: windowWidth - 80,
                                marginTop: 75,

                                height: 40,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontFamily: 'Roboto_500',
                                    color: COLORS.first,
                                }}
                            >
                                Дать доступ к камере
                            </Text>
                        </Button>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <StatusBar hidden animated={true} />
            <Camera
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
                flashMode={flash ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.on}
                type={Camera.Constants.Type.back}
            >
                <Svg
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: windowWidth,
                        height: windowHeight,
                    }}
                    viewBox="0 0 375 812"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Rect width="78" height="220" transform="matrix(1 0 0 -1 297 516)" fill="black" fillOpacity="0.7" />
                    <Rect width="78" height="220" transform="matrix(1 0 0 -1 0 516)" fill="black" fillOpacity="0.7" />
                    <Rect y="516" width="375" height="296" fill="black" fillOpacity="0.7" />
                    <Rect width="375" height="296" fill="black" fillOpacity="0.7" />
                    <Path
                        d="M279.056 523.276L298.31 523.276C301.624 523.276 304.311 520.59 304.311 517.276L304.311 497.775"
                        stroke="white"
                        strokeWidth="4.5"
                    />
                    <Path
                        d="M70.6194 498.056L70.6194 517.31C70.6193 520.624 73.3056 523.311 76.6193 523.311L96.1205 523.311"
                        stroke="white"
                        strokeWidth="4.5"
                    />
                    <Path
                        d="M95.997 288.619L76.7429 288.619C73.4291 288.619 70.7428 291.306 70.7428 294.619L70.7428 314.121"
                        stroke="white"
                        strokeWidth="4.5"
                    />
                    <Path
                        d="M304.496 313.944L304.496 294.69C304.496 291.376 301.81 288.689 298.496 288.689L278.995 288.689"
                        stroke="white"
                        strokeWidth="4.5"
                    />
                </Svg>

                <View
                    style={{
                        alignItems: 'center',
                    }}
                ></View>
            </Camera>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                }}
            >
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: '#fff',
                            marginTop: 40,
                            fontFamily: 'Roboto_700',
                            fontSize: 16,
                            textAlign: 'center',
                        }}
                    >
                        Отсканируйте QR-{'\n'}код на руле самоката
                    </Text>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            marginTop: 20,
                        }}
                        source={require('../assets/images/scooterQR.png')}
                    />
                </View>
                <View
                    style={{
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: 170,
                            marginBottom: 10,
                        }}
                    >
                        <View
                            style={{
                                borderRadius: 50,
                                backgroundColor: '#fff',
                                padding: 8,
                                marginBottom: 27,
                                width: 55,
                                height: 55,
                            }}
                        >
                            <TouchableOpacity activeOpacity={0.7} onPress={() => setModal(true)} style={{ flex: 1 }}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'Roboto_700', fontSize: 16 }}>123|</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                borderRadius: 50,
                                backgroundColor: '#fff',
                                padding: 8,
                                marginBottom: 27,
                                width: 55,
                                height: 55,
                            }}
                        >
                            <TouchableOpacity activeOpacity={0.7} onPress={() => setFlash(!flash)} style={{ flex: 1 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Svg width="30" height="30" viewBox="0 0 24 24">
                                        <Path
                                            fill="#000"
                                            d="M6 14l3 3v5h6v-5l3-3V9H6v5zm5-12h2v3h-2V2zM3.5 5.88l1.41-1.41 2.12 2.12L5.62 8 3.5 5.88zm13.46.71l2.12-2.12 1.41 1.41L18.38 8l-1.42-1.41z"
                                        ></Path>
                                    </Svg>
                                    <Text style={{ fontFamily: 'Roboto_700' }}>{flash ? 'off' : 'on'}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <View
                            style={{
                                borderRadius: 50,
                                borderWidth: 4,
                                borderColor: '#fff',
                                padding: 8,
                                marginBottom: 27,
                            }}
                        >
                            <Svg width="20" height="20" viewBox="0 0 24 24">
                                <Path
                                    fill="#fff"
                                    strokeWidth="2"
                                    stroke="#fff"
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                />
                            </Svg>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
            <Modal animationType="slide" transparent={true} visible={modal}>
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: windowWidth,
                        height: windowHeight,
                        backgroundColor: '#0000005f',
                        paddingHorizontal: 30,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            height: 240,
                            position: 'relative',
                            top: inputFocus ? 80 : windowHeight / 2 - 120,
                            padding: 20,
                        }}
                    >
                        <View
                            style={{
                                alignItems: 'flex-end',
                            }}
                        >
                            <TouchableWithoutFeedback onPress={() => setModal(false)}>
                                <View>
                                    <Svg width="20" height="20" viewBox="0 0 24 24">
                                        <Path
                                            fill={COLORS.first}
                                            strokeWidth="2"
                                            stroke={COLORS.first}
                                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                        />
                                    </Svg>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                style={{ width: 100, height: 117 }}
                                source={require('../assets/images/QR-number.png')}
                            />
                            <View
                                style={{
                                    marginLeft: 10,
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'Roboto_700',
                                        color: COLORS.first,
                                    }}
                                >
                                    Введите{'\n'}код вручную
                                </Text>
                                <Text
                                    style={{
                                        color: COLORS.first,
                                        marginTop: 20,
                                    }}
                                >
                                    Введите номер{'\n'}под qr-кодом для{'\n'}начала поездки.
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginVertical: 10,
                                paddingLeft: 20,
                            }}
                        >
                            <TextInput
                                autoCapitalize="none"
                                keyboardType="number-pad"
                                returnKeyLabel="Готово"
                                returnKeyType="done"
                                autoFocus
                                autoCorrect={false}
                                value={inputValue}
                                onChangeText={handleChangeInput}
                                onFocus={() => setInputFocus(true)}
                                onBlur={() => setInputFocus(false)}
                                style={{
                                    borderColor: COLORS.borderColor,
                                    borderWidth: 1,
                                    width: 180,
                                    height: 40,
                                    padding: 10,
                                    borderRadius: 5,
                                    fontSize: 16,
                                    color: COLORS.first,
                                }}
                            />
                            <View
                                style={{
                                    borderRadius: 50,
                                    backgroundColor: COLORS.orange,
                                    marginLeft: 30,
                                    width: 40,
                                    height: 40,
                                }}
                            >
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => setFlash(!flash)}
                                    style={{ flex: 1 }}
                                >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Svg width="25" height="25" viewBox="0 0 24 24">
                                            <Path
                                                fill="#000"
                                                d="M6 14l3 3v5h6v-5l3-3V9H6v5zm5-12h2v3h-2V2zM3.5 5.88l1.41-1.41 2.12 2.12L5.62 8 3.5 5.88zm13.46.71l2.12-2.12 1.41 1.41L18.38 8l-1.42-1.41z"
                                            ></Path>
                                        </Svg>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default ScanQRScreen
