import React, { useContext } from 'react'
import { ScrollView, Text, View, TouchableOpacity, TouchableWithoutFeedback, Modal, Image } from 'react-native'
import { BlurView } from 'expo-blur'

import { Context } from '../assets/context'
import Button from './Button'

const numberCodes = [
    {
        icon: require('../assets/flags/belarus.png'),
        name: 'Belarus',
        code: '+375',
    },
    {
        icon: require('../assets/flags/russia.png'),
        name: 'Russia',
        code: '+7',
    },
    {
        icon: require('../assets/flags/kazakhstan.png'),
        name: 'Kazakhstan',
        code: '+7',
    },
    {
        icon: require('../assets/flags/ukraine.png'),
        name: 'Ukraine',
        code: '+380',
    },
]

const ModalCodeNumber = ({ modal, setModal, setNumberCode }) => {
    const { COLORS, windowWidth } = useContext(Context)

    return (
        <Modal visible={modal} animationType="slide" transparent={true}>
            <BlurView
                intensity={98}
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ScrollView
                    style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: COLORS.borderColor,
                        paddingHorizontal: 15,
                        paddingVertical: 15,
                        maxHeight: 330,
                        maxWidth: 400,
                        width: windowWidth - 60,
                        backgroundColor: '#fff',
                    }}
                >
                    {numberCodes.map((item, index) => (
                        <TouchableWithoutFeedback
                            key={index.toString()}
                            onPress={() => {
                                setModal(false)
                                setNumberCode(item.code)
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 15,
                                }}
                            >
                                <Image
                                    source={item.icon}
                                    style={{
                                        width: 30,
                                        height: 30,
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 16,
                                        marginLeft: 15,
                                        fontFamily: 'Roboto_400',
                                        color: COLORS.first,
                                    }}
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    style={{
                                        marginLeft: 'auto',
                                        fontFamily: 'Roboto_700',
                                        fontSize: 16,
                                        color: COLORS.first,
                                    }}
                                >
                                    {item.code}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </ScrollView>
                <Button
                    onPress={() => setModal(false)}
                    viewStyle={{ width: windowWidth - 60, height: 40, marginVertical: 0, marginTop: 15 }}
                >
                    <Text style={{ color: COLORS.first }}>Отмена</Text>
                </Button>
            </BlurView>
        </Modal>
    )
}

export default ModalCodeNumber
