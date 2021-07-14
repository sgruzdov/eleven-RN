import React, { useContext } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'

import { Context } from '../assets/context'

const DATA = [
    {
        id: 0,
        img: '',
        title: 'Встаньте на самокат и оттолкнитесь',
        text: 'Так, будто едете на обычном самокате. Рычаг газа пока нажимать не нужно. Нужно - набрать небольшой разгон.',
    },
    {
        id: 1,
        img: '',
        title: 'Самокат поехал? \nВот теперь жмите на газ',
        text: 'То есть сначала - набираем скорость ногой, а потом подключаем электротягу.',
    },
    {
        id: 2,
        img: '',
        title: 'Паркуйтесь в жёлтой зоне',
        text: 'При планировании поездки учитывайте границы жёлтой зоны и наличие красных зон на карте. Ща пределами жёлтой зоны и в красных зонах парковаться нельзя.',
    },
    {
        id: 3,
        img: '',
        title: 'Не используйте держатель, если телефон больше его размеров',
        text: 'Если телефон не получается закрепить в держателе, не стоит пытаться это сделать - телефон будет сложно достать, возможно повреждение защитного стекла или чехла.',
    }
]

const InstructionScreen = () => {
    const {COLORS, windowWidth} = useContext(Context)

    return (
        <SafeAreaView
            style={{
                flex: 1, 
                backgroundColor: COLORS.bgWhite
            }}
        >
            <FlatList 
                scrollEnabled={false}
                snapToInterval={windowWidth}
                decelerationRate="fast"
                // ref={flatListRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                data={DATA}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default InstructionScreen
