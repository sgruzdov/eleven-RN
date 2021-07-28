import React, { useContext } from 'react'
import { Text, SafeAreaView, View, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Svg, { G, Path } from 'react-native-svg'

import { Context } from '../assets/context'
import { changeDefaultCardThunk } from '../redux/reducers/userReducer'
import ScreenWrapper from '../components/ScreenWrapper'

const PaymentScreen = ({ navigation }) => {
    const { COLORS, PADDING_HORIZONTAL } = useContext(Context)

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.data)

    const handleClickCard = id => {
        Alert.alert('Выбрать карту', 'Выбрать эту карту как способ оплаты по умолчанию?', [
            {
                text: 'Отмена',
                style: 'cancel',
            },
            {
                text: 'Выбрать',
                style: 'default',
                onPress: () => dispatch(changeDefaultCardThunk(user.username, id)),
            },
        ])
    }

    const handleClickRemoveCard = id => {
        Alert.alert(
            'Удалить карту',
            'Карта и ее настройки автооплаты будут удалены и станут недоступны во всех сервисах, подключенных к Masterpass.',
            [
                {
                    text: 'Отмена',
                    style: 'cancel',
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    // onPress: () => dispatch({ type: REMOVE_ERRORS }),
                },
            ]
        )
    }

    return (
        <ScreenWrapper>
            <View
                style={{
                    borderRadius: 20,
                    backgroundColor: COLORS.green,
                    paddingHorizontal: PADDING_HORIZONTAL,
                    paddingTop: 20,
                    paddingBottom: 30,
                    marginTop: 40,
                    position: 'relative',
                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16,
                        fontFamily: 'Roboto_500',
                    }}
                >
                    Кошелёк
                </Text>
                <View
                    style={{
                        marginTop: 8,
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            color: '#fff',
                            fontFamily: 'Roboto_700',
                        }}
                    >
                        {user.payment.balance}
                    </Text>
                    <Text
                        style={{
                            color: '#fff',
                            fontFamily: 'Roboto_700',
                            position: 'relative',
                            left: 7,
                            bottom: 3,
                        }}
                    >
                        BYN
                    </Text>
                </View>
                <Text
                    style={{
                        color: '#fff',
                        marginTop: 8,
                    }}
                >
                    Автопополнение: {user.payment.autoCompletion ? 'Вкл' : 'Выкл'}
                </Text>
                <Svg
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: -10,
                        width: 150,
                        height: 150,
                        transform: [{ rotate: '-10deg' }],
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <G>
                        <Path
                            fill="#b5670dbc"
                            d="M416 272a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm16-240H64A64 64 0 0 0 0 96a32 32 0 0 0 32 32h48a16 16 0 0 1 0-32h384a16 16 0 0 0 16-16 48 48 0 0 0-48-48z"
                        ></Path>
                        <Path
                            fill="#b5670d"
                            d="M461.2 128H32A32 32 0 0 1 0 96v320a64 64 0 0 0 64 64h397.2c28 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                        ></Path>
                    </G>
                </Svg>
            </View>
            <View
                style={{
                    marginTop: 6,
                }}
            >
                {user.payment.cards.length !== 0 &&
                    user.payment.cards.map((card, index) => {
                        const typeName = card.type === 'master' ? 'Master' : card.type === 'visa' ? 'Visa' : 'Карта'
                        const typeCard =
                            card.type === 'master' ? (
                                <Svg
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                    viewBox="0 0 30 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path d="M19.0561 1.98216H10.9438V16.5601H19.0561V1.98216Z" fill="#FF5F00" />
                                    <Path
                                        d="M30 9.27114C30.0001 11.0107 29.5107 12.7152 28.5878 14.1898C27.6649 15.6644 26.3457 16.8496 24.7811 17.6099C23.2165 18.3702 21.4695 18.675 19.7398 18.4893C18.0102 18.3037 16.3676 17.6351 15 16.5601C16.1035 15.6924 16.9955 14.5856 17.6089 13.3229C18.2223 12.0603 18.541 10.6749 18.541 9.27114C18.541 7.8674 18.2223 6.48199 17.6089 5.21936C16.9955 3.95673 16.1035 2.84985 15 1.98217C16.3676 0.907139 18.0102 0.238593 19.7398 0.0529476C21.4695 -0.132698 23.2165 0.17205 24.7811 0.932358C26.3457 1.69267 27.6649 2.87785 28.5878 4.35245C29.5107 5.82705 30.0001 7.53156 30 9.27114Z"
                                        fill="#F79E1B"
                                    />
                                    <Path
                                        d="M11.4594 9.27114C11.4581 7.86718 11.7763 6.48133 12.3898 5.2185C13.0033 3.95567 13.896 2.84897 15.0004 1.98217C13.6328 0.907143 11.9902 0.238598 10.2605 0.0529501C8.53086 -0.132698 6.78384 0.172037 5.21917 0.932337C3.6545 1.69264 2.33531 2.87782 1.41237 4.35242C0.489433 5.82702 0 7.53153 0 9.27114C0 11.0108 0.489433 12.7153 1.41237 14.1899C2.33531 15.6645 3.6545 16.8497 5.21917 17.61C6.78384 18.3703 8.53086 18.675 10.2605 18.4893C11.9902 18.3037 13.6328 17.6351 15.0004 16.5601C13.896 15.6933 13.0033 14.5866 12.3898 13.3238C11.7763 12.061 11.4581 10.6751 11.4594 9.27114Z"
                                        fill="#EB001B"
                                    />
                                    <Path
                                        d="M29.1155 15.0161V14.7176H29.2358V14.6568H28.9293V14.7176H29.0497V15.0161H29.1155ZM29.7105 15.0161V14.6562H29.6165L29.5085 14.9037L29.4004 14.6562H29.3064V15.0161H29.3727V14.7446L29.4741 14.9787H29.5429L29.6442 14.7441V15.0161H29.7105Z"
                                        fill="#F79E1B"
                                    />
                                </Svg>
                            ) : card.type === 'visa' ? (
                                <Svg
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                    viewBox="0 0 30 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M28.027 0.163696H26.1429C25.5578 0.163696 25.1225 0.322997 24.8654 0.906264L21.2448 9.10587H23.8055C23.8055 9.10587 24.2232 8.00331 24.3179 7.76185C24.5982 7.76185 27.0862 7.76561 27.4405 7.76561C27.5133 8.07794 27.7378 9.10587 27.7378 9.10587H30L28.027 0.163696ZM25.0197 5.93051C25.2204 5.41686 25.9912 3.42999 25.9912 3.42999C25.978 3.45445 26.19 2.91258 26.316 2.57579L26.4804 3.34721C26.4804 3.34721 26.9476 5.48334 27.0454 5.93051H25.0197Z"
                                        fill="#191f6e"
                                    />
                                    <Path
                                        d="M12.0122 0.153656L10.4875 9.10084H12.926L14.4519 0.153656H12.0122Z"
                                        fill="#191f6e"
                                    />
                                    <Path
                                        d="M8.44294 0.163686L6.05468 6.26541L5.80005 5.3441C5.32905 4.23401 3.99192 2.63975 2.42212 1.63502L4.60592 9.09645L7.18609 9.09206L11.0262 0.161804L8.44294 0.163686Z"
                                        fill="#191f6e"
                                    />
                                    <Path
                                        d="M4.87436 0.804023C4.73262 0.259013 4.32182 0.0965754 3.81193 0.0771332H0.0313584L0 0.25525C2.94205 0.968968 4.88878 2.68867 5.69658 4.75644L4.87436 0.804023Z"
                                        fill="#191f6e"
                                    />
                                    <Path
                                        d="M19.394 1.86896C20.1918 1.85642 20.77 2.03077 21.2191 2.2114L21.4392 2.31488L21.7691 0.375674C21.2862 0.194422 20.5292 0 19.5847 0C17.1751 0 15.4767 1.21357 15.4635 2.95271C15.4478 4.23778 16.6733 4.95526 17.599 5.38362C18.5492 5.82264 18.8678 6.10173 18.8634 6.49371C18.8559 7.09265 18.1058 7.36735 17.4052 7.36735C16.4287 7.36735 15.9101 7.23251 15.1092 6.89886L14.795 6.75586L14.4519 8.75841C15.0226 9.00865 16.0756 9.22377 17.1688 9.23506C19.732 9.23506 21.3978 8.03591 21.4154 6.17761C21.426 5.16097 20.7756 4.38516 19.3664 3.74859C18.5134 3.3334 17.9916 3.05745 17.9967 2.6385C17.9967 2.26659 18.4394 1.86896 19.394 1.86896Z"
                                        fill="#191f6e"
                                    />
                                </Svg>
                            ) : (
                                <Svg
                                    style={{
                                        width: 20,
                                        height: 20,
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                >
                                    <Path
                                        fill={COLORS.borderColor}
                                        d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"
                                    ></Path>
                                </Svg>
                            )

                        return (
                            <TouchableWithoutFeedback
                                key={index.toString()}
                                disabled={card.default}
                                onPress={() => handleClickCard(card._id)}
                            >
                                <View
                                    style={{
                                        marginTop: 17,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderRadius: 10,
                                        borderWidth: 2,
                                        borderColor: card.default ? COLORS.green : COLORS.borderColor,
                                        height: 47,
                                        paddingHorizontal: PADDING_HORIZONTAL,
                                    }}
                                >
                                    {typeCard}
                                    <Text
                                        style={{
                                            color: COLORS.first,
                                            marginLeft: 10,
                                            fontSize: 18,
                                        }}
                                    >
                                        {typeName} **** {card.lastNumbers}
                                    </Text>
                                    <TouchableWithoutFeedback onPress={() => handleClickRemoveCard(card._id)}>
                                        <View
                                            style={{
                                                width: 20,
                                                height: 30,
                                                marginLeft: 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Svg
                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                }}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 320 512"
                                            >
                                                <Path
                                                    fill={COLORS.borderColor}
                                                    d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                                                ></Path>
                                            </Svg>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })}
                <TouchableWithoutFeedback onPress={() => navigation.navigate('AddCard')}>
                    <View
                        style={{
                            marginTop: 17,
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: COLORS.borderColor,
                            height: 47,
                            paddingHorizontal: PADDING_HORIZONTAL,
                        }}
                    >
                        <Svg
                            style={{
                                width: 20,
                                height: 20,
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                        >
                            <Path
                                fill={COLORS.borderColor}
                                d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"
                            ></Path>
                        </Svg>
                        <Text
                            style={{
                                color: COLORS.first,
                                marginLeft: 10,
                                fontSize: 18,
                            }}
                        >
                            Добавить платежную карту
                        </Text>
                        <Svg
                            style={{
                                width: 20,
                                height: 20,
                                marginLeft: 'auto',
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <Path
                                fill={COLORS.borderColor}
                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                            ></Path>
                        </Svg>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View
                style={{
                    marginTop: 17,
                    borderRadius: 20,
                    paddingHorizontal: PADDING_HORIZONTAL,
                    paddingVertical: 20,
                    backgroundColor: '#fff',
                    ...COLORS.buttonShadow,
                    shadowOpacity: 0.15,
                    shadowRadius: 10,
                }}
            >
                <Text
                    style={{
                        color: COLORS.first,
                        fontSize: 25,
                        fontFamily: 'Roboto_700',
                    }}
                >
                    Тарифы
                </Text>
                <View
                    style={{
                        marginTop: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.firstLight,
                        }}
                    >
                        Старт поездки:
                    </Text>
                    <Text
                        style={{
                            color: COLORS.first,
                            fontFamily: 'Roboto_700',
                            fontSize: 18,
                        }}
                    >
                        1,4 BYN
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.firstLight,
                        }}
                    >
                        1 минута:
                    </Text>
                    <Text
                        style={{
                            color: COLORS.first,
                            fontFamily: 'Roboto_700',
                            fontSize: 18,
                        }}
                    >
                        0,21 BYN
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.firstLight,
                        }}
                    >
                        1 минута паузы:
                    </Text>
                    <Text
                        style={{
                            color: COLORS.first,
                            fontFamily: 'Roboto_700',
                            fontSize: 18,
                        }}
                    >
                        0,05 BYN
                    </Text>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default PaymentScreen
