import React, { useContext, useRef, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'

import { Context } from '../assets/context'

const DATA = [
    {
        id: 0,
        img: require('../assets/images/instruction_1.png'),
        title: 'Встаньте на самокат и оттолкнитесь',
        text: 'Так, будто едете на обычном самокате. Рычаг газа пока нажимать не нужно. Нужно - набрать небольшой разгон.',
    },
    {
        id: 1,
        img: require('../assets/images/instruction_2.png'),
        title: 'Самокат поехал? Вот теперь жмите на газ',
        text: 'То есть сначала - набираем скорость ногой, а потом подключаем электротягу.',
    },
    {
        id: 2,
        img: require('../assets/images/instruction_3.png'),
        title: 'Паркуйтесь в жёлтой зоне',
        text: 'При планировании поездки учитывайте границы жёлтой зоны и наличие красных зон на карте. Ща пределами жёлтой зоны и в красных зонах парковаться нельзя.',
    },
    {
        id: 3,
        img: require('../assets/images/instruction_4.png'),
        title: 'Не используйте держатель, если телефон больше его размеров',
        text: 'Если телефон не получается закрепить в держателе, не стоит пытаться это сделать - телефон будет сложно достать, возможно повреждение защитного стекла или чехла.',
    },
]

const InstructionScreen = ({ navigation }) => {
    const { COLORS, windowWidth } = useContext(Context)
    const flatListRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleClickNext = () => {
        if (currentIndex !== DATA.length - 1) {
            flatListRef.current.scrollToOffset({ offset: windowWidth * (currentIndex + 1), anumated: true })
            setCurrentIndex(currentIndex + 1)
        } else {
            navigation.goBack()
        }
    }

    const handleScrollList = e => {
        const scroll = e.nativeEvent.contentOffset.x
        const halfWidth = windowWidth / 2

        if (scroll < windowWidth - halfWidth) {
            setCurrentIndex(0)
        } else if (scroll > windowWidth - halfWidth && scroll < windowWidth * 2 - halfWidth) {
            setCurrentIndex(1)
        } else if (scroll > windowWidth * 2 - halfWidth && scroll < windowWidth * 3 - halfWidth) {
            setCurrentIndex(2)
        } else if (scroll > windowWidth * 3 - halfWidth && scroll < windowWidth * 4 - halfWidth) {
            setCurrentIndex(3)
        }
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.bgWhite,
                position: 'relative',
            }}
        >
            <FlatList
                scrollEventThrottle={16}
                onMomentumScrollEnd={handleScrollList}
                snapToInterval={windowWidth}
                decelerationRate="fast"
                ref={flatListRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                data={DATA}
                renderItem={({ item }) => (
                    <View
                        style={{
                            width: windowWidth,
                            flex: 1,
                            paddingHorizontal: 35,
                        }}
                    >
                        <View
                            style={{
                                alignItems: 'center',
                                marginTop: 160,
                            }}
                        >
                            <Image
                                style={{
                                    width: 210,
                                    height: 210,
                                }}
                                source={item.img}
                            />
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    fontFamily: 'Roboto_700',
                                    color: COLORS.first,
                                    marginTop: 90,
                                }}
                            >
                                {item.title}
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: COLORS.firstLight,
                                    marginTop: 10,
                                }}
                            >
                                {item.text}
                            </Text>
                        </View>
                    </View>
                )}
            />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    width: windowWidth,
                    top: 450,
                }}
            >
                {DATA.map(item => {
                    return (
                        <View
                            key={item.id.toString()}
                            style={{
                                width: 13,
                                height: 13,
                                borderRadius: 50,
                                backgroundColor: item.id === currentIndex ? COLORS.first : COLORS.borderColor,
                                marginHorizontal: 8,
                            }}
                        ></View>
                    )
                })}
            </View>
            <View
                style={{
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        borderRadius: 50,
                        backgroundColor: COLORS.orange,
                        paddingHorizontal: 20,
                        marginBottom: 15,
                        width: 200,
                    }}
                >
                    <TouchableOpacity
                        onPress={handleClickNext}
                        activeOpacity={0.7}
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Roboto_500',
                                color: COLORS.first,
                            }}
                        >
                            {currentIndex === DATA.length - 1 ? 'Завершить' : 'Продолжить'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default InstructionScreen
