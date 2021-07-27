import React, { useContext, useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Svg, { Path, Mask, Rect } from 'react-native-svg'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useSelector, useDispatch } from 'react-redux'

import { Context } from '../assets/context'
import { getUserThunk } from '../redux/reducers/userReducer'

import PromoScreen from './PromoScreen'
import MapScreen from './MapScreen'

const Drawer = createDrawerNavigator()

const DrawerContent = ({ navigation }) => {
    const { COLORS } = useContext(Context)

    const dispatch = useDispatch()
    const location = useSelector(state => state.settings.location)
    const user = useSelector(state => state.user.data)

    const menuData = [
        {
            icon: (
                <Svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <Path
                        fill={location.status === 'granted' ? COLORS.first : COLORS.firstDisabled}
                        d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                    ></Path>
                </Svg>
            ),
            name: 'Аккаунт',
            href: 'Profile',
        },
        {
            icon: (
                <Svg width="20" height="20" viewBox="0 0 24 24">
                    <Path
                        fill={location.status === 'granted' ? COLORS.first : COLORS.firstDisabled}
                        d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"
                    ></Path>
                </Svg>
            ),
            name: 'Оплата',
            href: 'Payment',
        },
        {
            icon: (
                <Svg width="16" height="20" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path
                        stroke={location.status === 'granted' ? COLORS.first : COLORS.firstDisabled}
                        strokeWidth="3"
                        d="M18.5 6.15625V11.125H13.5313C12.5485 11.125 11.5879 10.8336 10.7708 10.2876C9.95366 9.74164 9.3168 8.96563 8.94073 8.05771C8.56465 7.14979 8.46626 6.15074 8.65798 5.18689C8.8497 4.22305 9.32292 3.33771 10.0178 2.64282C10.7127 1.94792 11.5981 1.4747 12.5619 1.28298C13.5257 1.09126 14.5248 1.18965 15.4327 1.56573C16.3406 1.9418 17.1166 2.57866 17.6626 3.39576C18.2086 4.21287 18.5 5.17352 18.5 6.15625ZM24.4688 11.125H19.5V6.15625C19.5 5.17352 19.7914 4.21287 20.3374 3.39576C20.8834 2.57866 21.6594 1.9418 22.5673 1.56573C23.4752 1.18965 24.4743 1.09126 25.4381 1.28298C26.402 1.4747 27.2873 1.94792 27.9822 2.64282C28.6771 3.33771 29.1503 4.22305 29.342 5.18689C29.5338 6.15074 29.4354 7.14979 29.0593 8.05771C28.6832 8.96563 28.0464 9.74164 27.2292 10.2876C26.4121 10.8336 25.4515 11.125 24.4688 11.125Z"
                    />
                    <Path
                        stroke={location.status === 'granted' ? COLORS.first : COLORS.firstDisabled}
                        strokeWidth="3"
                        d="M3.375 12.125H34.625C36.0747 12.125 37.25 13.3003 37.25 14.75V19.4375C37.25 20.8872 36.0747 22.0625 34.625 22.0625H3.375C1.92525 22.0625 0.75 20.8872 0.75 19.4375V14.75C0.75 13.3003 1.92525 12.125 3.375 12.125Z"
                    />
                    <Path
                        stroke={location.status === 'granted' ? COLORS.first : COLORS.firstDisabled}
                        strokeWidth="2"
                        d="M34.625 22.5625V36.625C34.625 37.8682 34.1311 39.0605 33.2521 39.9396C32.373 40.8186 31.1807 41.3125 29.9375 41.3125H8.0625C6.8193 41.3125 5.62701 40.8186 4.74794 39.9396C3.86886 39.0605 3.375 37.8682 3.375 36.625V22.5625H34.625ZM19 11.625V41.3125Z"
                    />
                    <Path
                        stroke={location.status === 'granted' ? COLORS.first : COLORS.firstDisabled}
                        strokeWidth="1"
                        d="M34.625 22.5625H35.625V21.5625H34.625V22.5625ZM34.625 36.625H35.625H34.625ZM29.9375 41.3125L29.9375 42.3125L29.9375 41.3125ZM8.0625 41.3125V42.3125V41.3125ZM3.375 22.5625V21.5625H2.375V22.5625H3.375ZM33.625 22.5625V36.625H35.625V22.5625H33.625ZM33.625 36.625C33.625 37.603 33.2365 38.5409 32.545 39.2325L33.9592 40.6467C35.0258 39.5801 35.625 38.1334 35.625 36.625L33.625 36.625ZM32.545 39.2325C31.8534 39.924 30.9155 40.3125 29.9375 40.3125L29.9375 42.3125C31.4459 42.3125 32.8926 41.7133 33.9592 40.6467L32.545 39.2325ZM29.9375 40.3125H8.0625V42.3125H29.9375V40.3125ZM8.0625 40.3125C7.08451 40.3125 6.14658 39.924 5.45504 39.2325L4.04083 40.6467C5.10744 41.7133 6.55408 42.3125 8.0625 42.3125L8.0625 40.3125ZM5.45504 39.2325C4.7635 38.5409 4.375 37.603 4.375 36.625H2.375C2.375 38.1334 2.97422 39.5801 4.04083 40.6467L5.45504 39.2325ZM4.375 36.625V22.5625H2.375V36.625H4.375ZM3.375 23.5625H34.625V21.5625H3.375V23.5625ZM18 11.625V41.3125H20V11.625H18Z"
                    />
                </Svg>
            ),
            name: 'Сертификаты',
            href: 'Sertificate',
        },
        {
            icon: (
                <Svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <Path
                        fill={location.status === 'granted' ? COLORS.first : COLORS.firstDisabled}
                        d="M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107 96-160-43-96-96-96-96 43-96 96c0 25.5 22.2 63.4 45.3 96H320c-52.9 0-96 43.1-96 96s43.1 96 96 96h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H185.5c-16 24.8-33.8 47.7-47.3 64H416c52.9 0 96-43.1 96-96s-43.1-96-96-96zm0-256c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM96 256c-53 0-96 43-96 96s96 160 96 160 96-107 96-160-43-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                    ></Path>
                </Svg>
            ),
            name: 'История поездок',
            href: 'History',
        },
        {
            icon: (
                <Svg width="20" height="20" viewBox="0 0 24 24">
                    <Path
                        fill={COLORS.first}
                        d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
                    ></Path>
                </Svg>
            ),
            name: 'Помощь',
            href: 'Help',
        },
        {
            icon: (
                <Svg width="17" height="17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <Path
                        fill={COLORS.first}
                        d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"
                    ></Path>
                </Svg>
            ),
            name: 'Правила парковки',
            href: 'Course',
        },
    ]

    useEffect(() => {
        dispatch(getUserThunk('+375336464588'))
    }, [])

    return (
        <SafeAreaView>
            <View
                style={{
                    marginTop: 30,
                    paddingHorizontal: 25,
                    overflow: 'hidden',
                }}
            >
                {(user.firstName || user.lastName) && (
                    <Text
                        style={{
                            fontFamily: 'Roboto_700',
                            fontSize: 22,
                            color: COLORS.first,
                        }}
                    >
                        {`${user.firstName ? `${user.firstName} ` : ''}${user.lastName ? `${user.lastName} ` : ''}`}
                    </Text>
                )}
                <Text
                    style={{
                        marginTop: 7,
                        fontFamily: 'Roboto_500',
                        color: COLORS.firstLight,
                    }}
                >
                    {user.username}
                </Text>
            </View>
            <View
                style={{
                    marginTop: 30,
                    paddingHorizontal: 20,
                }}
            >
                {menuData.map((item, index) => (
                    <TouchableWithoutFeedback
                        disabled={index < 4 ? (location.status === 'granted' ? false : true) : false}
                        key={index.toString()}
                        onPress={() => {
                            navigation.navigate(item.href)
                            navigation.closeDrawer()
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: index === 0 ? 0 : 30,
                            }}
                        >
                            <View
                                style={{
                                    width: 55,
                                }}
                            >
                                {item.icon}
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color:
                                        index < 4
                                            ? location.status === 'granted'
                                                ? COLORS.first
                                                : COLORS.firstDisabled
                                            : COLORS.first,
                                    fontFamily: 'Roboto_500',
                                }}
                            >
                                {item.name}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </View>
            <TouchableWithoutFeedback
                onPress={() => {
                    navigation.navigate('Promo')
                    navigation.closeDrawer()
                }}
            >
                <View
                    style={{
                        marginTop: 40,
                        width: 270,
                        paddingVertical: 18,
                        paddingHorizontal: 10,
                        backgroundColor: COLORS.orange,
                        borderRadius: 10,
                        position: 'relative',
                        left: 5,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 1.5 }}>
                        <Text
                            style={{
                                fontSize: 19,
                                color: COLORS.first,
                                fontFamily: 'Roboto_700',
                            }}
                        >
                            Бесплатные старты!
                        </Text>
                        <Text
                            style={{
                                marginTop: 7,
                                color: COLORS.firstLight,
                                fontFamily: 'Roboto_500',
                            }}
                        >
                            Приглашайте друзей, получайте старты
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    marginTop: 25,
                }}
            >
                <View
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        backgroundColor: COLORS.orange,
                    }}
                ></View>
                <View
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        backgroundColor: COLORS.orange,
                        marginLeft: 30,
                    }}
                ></View>
                <View
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        backgroundColor: COLORS.orange,
                        marginLeft: 30,
                    }}
                ></View>
                <Text
                    style={{
                        color: COLORS.firstLight,
                        marginLeft: 30,
                    }}
                >
                    1.0.0
                </Text>
            </View>
        </SafeAreaView>
    )
}

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <Drawer.Navigator drawerContent={props => <DrawerContent navigation={props.navigation} />}>
                <Drawer.Screen name="Map" component={MapScreen} />
            </Drawer.Navigator>
        </>
    )
}

export default HomeScreen
