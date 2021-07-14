import React, { useContext, useState, useRef } from 'react'
import { SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View, Platform, UIManager, LayoutAnimation, Animated, PanResponder } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Svg, { Path, Mask, Rect } from 'react-native-svg'


import { Context } from '../assets/context'

if(Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}


const MapScreen = ({ navigation }) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

    const {windowWidth, windowHeight, COLORS, PADDING_HORIZONTAL} = useContext(Context)

    // const [menu, setMenu] = useState(false)


    return (
        <SafeAreaView
            style={{
                alignItems: 'center',
                flex: 1
            }}
        >
            <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={{
                    flex: 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: windowWidth,
                    height: windowHeight,
                }}
            />
            <View
                style={{
                    width: windowWidth,
                    marginTop: 10,
                    paddingHorizontal: PADDING_HORIZONTAL,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableWithoutFeedback
                    onPress={() => navigation.openDrawer()}
                >
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#fff',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            ...COLORS.buttonShadow
                        }}
                    >
                        <Svg width="19" height="13" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><Path fill={COLORS.first} d="M0 11C0 11.5523 0.447715 12 1 12H17C17.5523 12 18 11.5523 18 11V11C18 10.4477 17.5523 10 17 10H1C0.447716 10 0 10.4477 0 11V11ZM0 6C0 6.55228 0.447715 7 1 7H17C17.5523 7 18 6.55228 18 6V6C18 5.44772 17.5523 5 17 5H1C0.447716 5 0 5.44772 0 6V6ZM1 0C0.447716 0 0 0.447715 0 1V1C0 1.55228 0.447715 2 1 2H17C17.5523 2 18 1.55228 18 1V1C18 0.447715 17.5523 0 17 0H1Z"/></Svg>
                    </View>
                </TouchableWithoutFeedback>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196 32" width="90" height="20" fill={COLORS.first}><Path fillRule="evenodd" d="M195.41 31.14V13.83c0-8.65-5-13.83-12.88-13.83a13.29 13.29 0 00-10 4.11V.85h-6.68v30.3h7V16c0-5.37 3.52-9 8.2-9 4.44 0 7.35 3.23 7.35 8.1v16.04zM62.24 16c0-8.84 6.45-15.91 16-15.91C88.55.06 95 8.41 94.13 18.77H69.48c.72 4 4.19 6.83 8.8 6.83 4.13 0 6.86-1.65 8.2-4.14h7.11C91.82 27.86 86.11 32 78.4 32c-9.84 0-16.16-6.95-16.16-16zm7.26-2.86h17.41c-.79-3.87-4.11-6.59-8.75-6.59s-7.92 2.68-8.66 6.56zM0 16C0 7.13 6.44.06 16 .06c10.26 0 16.7 8.35 15.85 18.71H7.24c.72 4 4.19 6.83 8.79 6.83 4.13 0 6.87-1.65 8.21-4.15h7.1C29.58 27.85 23.87 32 16.16 32 6.32 32 0 25.05 0 16zm7.26-2.9h17.4c-.79-3.87-4.1-6.58-8.75-6.58S8 9.23 7.26 13.1zM94.77.85h7.59l9.1 21.27h.26L120.65.85h7.47l-13.24 30.3H108zm34 15.12c0-8.84 6.45-15.91 16-15.91 10.27 0 16.71 8.35 15.85 18.71H136c.72 4 4.19 6.83 8.8 6.83 4.13 0 6.86-1.65 8.2-4.14h7.11c-1.76 6.4-7.46 10.54-15.18 10.54-9.84 0-16.16-6.95-16.16-16zm7.23-2.86h17.41c-.79-3.87-4.11-6.59-8.75-6.59s-7.89 2.71-8.66 6.59zM45.41.85l-13.24 30.3h28.75v-6.9H42.65L52.88.85z"></Path></Svg>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Promo')}
                >
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#fff',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            ...COLORS.buttonShadow
                        }}
                    >
                        <Svg width="18" height="22" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path stroke={COLORS.first} strokeWidth="3" d="M18.5 6.15625V11.125H13.5313C12.5485 11.125 11.5879 10.8336 10.7708 10.2876C9.95366 9.74164 9.3168 8.96563 8.94073 8.05771C8.56465 7.14979 8.46626 6.15074 8.65798 5.18689C8.8497 4.22305 9.32292 3.33771 10.0178 2.64282C10.7127 1.94792 11.5981 1.4747 12.5619 1.28298C13.5257 1.09126 14.5248 1.18965 15.4327 1.56573C16.3406 1.9418 17.1166 2.57866 17.6626 3.39576C18.2086 4.21287 18.5 5.17352 18.5 6.15625ZM24.4688 11.125H19.5V6.15625C19.5 5.17352 19.7914 4.21287 20.3374 3.39576C20.8834 2.57866 21.6594 1.9418 22.5673 1.56573C23.4752 1.18965 24.4743 1.09126 25.4381 1.28298C26.402 1.4747 27.2873 1.94792 27.9822 2.64282C28.6771 3.33771 29.1503 4.22305 29.342 5.18689C29.5338 6.15074 29.4354 7.14979 29.0593 8.05771C28.6832 8.96563 28.0464 9.74164 27.2292 10.2876C26.4121 10.8336 25.4515 11.125 24.4688 11.125Z"/>
                            <Path stroke={COLORS.first} strokeWidth="3" d="M3.375 12.125H34.625C36.0747 12.125 37.25 13.3003 37.25 14.75V19.4375C37.25 20.8872 36.0747 22.0625 34.625 22.0625H3.375C1.92525 22.0625 0.75 20.8872 0.75 19.4375V14.75C0.75 13.3003 1.92525 12.125 3.375 12.125Z"/>
                            <Path stroke={COLORS.first} strokeWidth="2" d="M34.625 22.5625V36.625C34.625 37.8682 34.1311 39.0605 33.2521 39.9396C32.373 40.8186 31.1807 41.3125 29.9375 41.3125H8.0625C6.8193 41.3125 5.62701 40.8186 4.74794 39.9396C3.86886 39.0605 3.375 37.8682 3.375 36.625V22.5625H34.625ZM19 11.625V41.3125Z"/>
                            <Path stroke={COLORS.first} strokeWidth="1" d="M34.625 22.5625H35.625V21.5625H34.625V22.5625ZM34.625 36.625H35.625H34.625ZM29.9375 41.3125L29.9375 42.3125L29.9375 41.3125ZM8.0625 41.3125V42.3125V41.3125ZM3.375 22.5625V21.5625H2.375V22.5625H3.375ZM33.625 22.5625V36.625H35.625V22.5625H33.625ZM33.625 36.625C33.625 37.603 33.2365 38.5409 32.545 39.2325L33.9592 40.6467C35.0258 39.5801 35.625 38.1334 35.625 36.625L33.625 36.625ZM32.545 39.2325C31.8534 39.924 30.9155 40.3125 29.9375 40.3125L29.9375 42.3125C31.4459 42.3125 32.8926 41.7133 33.9592 40.6467L32.545 39.2325ZM29.9375 40.3125H8.0625V42.3125H29.9375V40.3125ZM8.0625 40.3125C7.08451 40.3125 6.14658 39.924 5.45504 39.2325L4.04083 40.6467C5.10744 41.7133 6.55408 42.3125 8.0625 42.3125L8.0625 40.3125ZM5.45504 39.2325C4.7635 38.5409 4.375 37.603 4.375 36.625H2.375C2.375 38.1334 2.97422 39.5801 4.04083 40.6467L5.45504 39.2325ZM4.375 36.625V22.5625H2.375V36.625H4.375ZM3.375 23.5625H34.625V21.5625H3.375V23.5625ZM18 11.625V41.3125H20V11.625H18Z"/>
                        </Svg>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Instruction')}
            >
                <View
                    style={{
                        width: windowWidth - PADDING_HORIZONTAL * 2,
                        height: 80,
                        backgroundColor: COLORS.bgWhite,
                        marginTop: 15,
                        borderRadius: 10,
                        overflow: 'hidden',
                        flexDirection: 'row',
                        alignItems: 'center',
                        ...COLORS.buttonShadow
                    }}
                >
                    <View
                        style={{
                            width: 75,
                            height: 75,
                            borderRadius: 50, 
                            backgroundColor: COLORS.orange,
                            transform: [
                                {translateX: -25},
                                {translateY: -15},
                            ]
                        }}
                    ></View>
                    <View>
                        <Text
                            style={{
                                fontFamily: 'Roboto_700',
                                fontSize: 16,
                                color: COLORS.first,
                                marginTop: -6
                            }}
                        >Как кататься?</Text>
                        <Text
                            style={{
                                fontFamily: 'Roboto_400',
                                color: COLORS.firstLight,
                                marginTop: 15
                            }}
                        >Нажмите, чтобы увидеть инструкцию</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View
                style={{
                    width: windowWidth,
                    paddingHorizontal: PADDING_HORIZONTAL + 15,
                    marginTop: 'auto',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#fff',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            ...COLORS.buttonShadow
                        }}
                    >
                        <Svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><Path fill={COLORS.first} d="M500 8h-27.711c-6.739 0-12.157 5.548-11.997 12.286l2.347 98.568C418.075 51.834 341.788 7.73 255.207 8.001 118.82 8.428 7.787 120.009 8 256.396 8.214 393.181 119.165 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-19.738-19.738c-4.498-4.498-11.753-4.785-16.501-.552C351.787 433.246 306.105 452 256 452c-108.322 0-196-87.662-196-196 0-108.322 87.662-196 196-196 79.545 0 147.941 47.282 178.675 115.302l-126.389-3.009c-6.737-.16-12.286 5.257-12.286 11.997V212c0 6.627 5.373 12 12 12h192c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12z"></Path></Svg>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            height: 40,
                            backgroundColor: '#fff',
                            borderRadius: 50,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 15,
                            ...COLORS.buttonShadow
                        }}
                    >
                        <Svg width="25" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><Path fill={COLORS.first} d="M480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm0-160c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm0-192c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80zm80.1 212c-33.4 0-41.7 12-80.1 12-38.4 0-46.7-12-80.1-12-36.3 0-71.6 16.2-92.3 46.9C7.2 341.3 0 363.4 0 387.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-44.8c0-23.8-7.2-45.9-19.6-64.3-20.7-30.7-56-46.9-92.3-46.9zM352 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-44.8c0-16.6 4.9-32.7 14.1-46.4 13.8-20.5 38.4-32.8 65.7-32.8 27.4 0 37.2 12 80.2 12s52.8-12 80.1-12c27.3 0 51.9 12.3 65.7 32.8 9.2 13.7 14.1 29.8 14.1 46.4V432zm271.7-114.9C606.4 291.5 577 278 546.8 278c-27.8 0-34.8 10-66.8 10s-39-10-66.8-10c-13.2 0-26.1 3-38.1 8.1 15.2 15.4 18.5 23.6 20.2 26.6 5.7-1.6 11.6-2.6 17.9-2.6 21.8 0 30 10 66.8 10s45-10 66.8-10c21 0 39.8 9.3 50.4 25 7.1 10.5 10.9 22.9 10.9 35.7V408c0 4.4-3.6 8-8 8H416c0 17.7.3 22.5-1.6 32H600c22.1 0 40-17.9 40-40v-37.3c0-19.9-6-38.3-16.3-53.6z"></Path></Svg>                        
                        <Text
                            style={{
                                marginLeft: 10,
                                fontFamily: 'Roboto_500',
                            }}
                        >Групповая поездка</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#fff',
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            ...COLORS.buttonShadow
                        }}
                    >
                        <Svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><Path fill={COLORS.first} d="M461.9 0c-5.73 0-11.59 1.1-17.39 3.52L28.74 195.41c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 30.01 24.21 47.93 48.74 47.93 17.3 0 34.75-8.9 44.01-28.74l191.9-415.78C522.06 34.89 494.14 0 461.9 0zM271.81 464.07V240.19h-47.97l-175.48.71c-.27-.37-.47-1.35.48-1.93L462.05 48.26c.61.41 1.28 1.07 1.69 1.68L271.81 464.07z"></Path></Svg>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View
                style={{
                    borderRadius: 50,
                    backgroundColor: COLORS.orange,
                    marginVertical: 25,
                    paddingHorizontal: 20,
                    ...COLORS.buttonShadow
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        height: 48,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><Rect fill={COLORS.first} x="336" y="336" width="80" height="80" rx="8" ry="8"/><Rect fill={COLORS.first} x="272" y="272" width="64" height="64" rx="8" ry="8"/><Rect fill={COLORS.first} x="416" y="416" width="64" height="64" rx="8" ry="8"/><Rect fill={COLORS.first} x="432" y="272" width="48" height="48" rx="8" ry="8"/><Rect fill={COLORS.first} x="272" y="432" width="48" height="48" rx="8" ry="8"/><Rect fill={COLORS.first} x="336" y="96" width="80" height="80" rx="8" ry="8"/><Rect fill={COLORS.first} x="288" y="48" width="176" height="176" rx="16" ry="16" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><Rect fill={COLORS.first} x="96" y="96" width="80" height="80" rx="8" ry="8"/><Rect fill={COLORS.first} x="48" y="48" width="176" height="176" rx="16" ry="16" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /><Rect fill={COLORS.first} x="96" y="336" width="80" height="80" rx="8" ry="8"/><Rect x="48" y="288" width="176" height="176" rx="16" ry="16" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></Svg>
                    <Text
                        style={{
                            fontFamily: 'Roboto_500',
                            fontSize: 16,
                            color: COLORS.first,
                            marginLeft: 10
                        }}
                    >Сканировать QR-код</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default MapScreen
