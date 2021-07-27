import React, { useContext } from 'react'
import { Text, SafeAreaView, View, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { Context } from '../assets/context'

const HistoryScreen = () => {
    const { COLORS, PADDING_HORIZONTAL } = useContext(Context)

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.data)

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
                {user.history.length === 0 ? (
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: 30,
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.firstLight,
                                fontSize: 30,
                                fontFamily: 'Roboto_700',
                                textAlign: 'center',
                            }}
                        >
                            Нет совершённых поездок
                        </Text>
                    </View>
                ) : (
                    <>
                        {user.history.map(item => {
                            const date = {
                                date: new Date(+item.date).toISOString().substr(0, 10).replace(/-/g, '.'),
                                dateHours: new Date(+item.date).toISOString().substr(11, 5),
                                time: item.time.split(':'),
                            }

                            return (
                                <View
                                    key={item._id}
                                    style={{
                                        paddingTop: 25,
                                        paddingBottom: 17,
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Text style={{ color: COLORS.firstLight }}>Поездка завершена:</Text>
                                        <Text style={{ color: COLORS.firstLight }}>Стоимость:</Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginTop: 2,
                                        }}
                                    >
                                        <Text style={{ fontFamily: 'Roboto_700', color: COLORS.first }}>
                                            {date.date} в {date.dateHours} ({date.time[0]} мин {date.time[1]} сек.)
                                        </Text>
                                        <Text style={{ fontFamily: 'Roboto_700', color: COLORS.first, fontSize: 20 }}>
                                            {item.cost} BYN
                                        </Text>
                                    </View>
                                    <Text style={{ color: COLORS.firstLight, marginTop: 2 }}>
                                        Самокат №{'  '}
                                        <Text style={{ color: COLORS.first, fontFamily: 'Roboto_700' }}>
                                            {item.scooterId}
                                        </Text>
                                    </Text>
                                </View>
                            )
                        })}
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HistoryScreen
