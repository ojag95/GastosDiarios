import { StyleSheet, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { Surface, withTheme, TextInput, Text, TouchableRipple, Title, Caption, Colors } from 'react-native-paper'

const Calculator = ({ theme }) => {
    const { colors } = theme;
    const [text, setText] = useState("");
    const { width, height } = useWindowDimensions()

    return (
        <Surface>
            <View style={{ height: height / 6, padding: 10 }}>
                <Caption>Calculadora</Caption>

                <Text adjustsFontSizeToFit numberOfLines={1} style={{ fontSize: 60 }}>556666</Text>

            </View>
            <View style={{ flexDirection: 'row', backgroundColor: colors.primary }}>
                <View style={{ flexDirection: 'column' }}>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: colors.background }}>7</Title>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: colors.background }}>4</Title>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: colors.background }}>1</Title>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: colors.background }}>.</Title>
                    </TouchableRipple>
                </View>

                <View>
                    <View style={{ flexDirection: 'column' }}>
                        <TouchableRipple onPress={() => console.log('Pressed')}
                            rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{ color: colors.background }}>8</Title>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => console.log('Pressed')}
                            rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{ color: colors.background }}>5</Title>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => console.log('Pressed')}
                            rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{ color: colors.background }}>4</Title>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => console.log('Pressed')}
                            rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{ color: colors.background }}>0</Title>
                        </TouchableRipple>
                    </View>


                </View>
                <View style={{ flexDirection: 'column' }}>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: colors.background }}>9</Title>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: colors.background }}>6</Title>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: colors.background }}>3</Title>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: colors.background }}>=</Title>
                    </TouchableRipple>

                </View>
                <View style={{ flexDirection: 'column', backgroundColor: colors.accent }}>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: colors.background }}>/</Title>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: colors.background }}>X</Title>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{ color: colors.background }}>+</Title>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center', }}>
                        <Title style={{ color: colors.background }}>-</Title>
                    </TouchableRipple>

                </View>

            </View>
            <View style={{ flexDirection: 'row', backgroundColor: colors.primary }}>

                <View style={{ flex: 1, alignItems:'center' }}>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center', }}>
                        <Title style={{ color: colors.background }}>X</Title>
                    </TouchableRipple>
                </View>
                <View style={{ flex: 2,alignItems:'center'  }}>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 2, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center', }}>
                        <Title style={{ color: colors.background }}>C</Title>
                    </TouchableRipple>
                </View>
                <View style={{ flex: 1,backgroundColor:colors.accent }}>
                    <TouchableRipple onPress={() => console.log('Pressed')}
                        rippleColor="rgba(0, 0, 0, .32)" style={{ width: (width - 20) / 4, height: (width - 20) / 4, justifyContent: 'center', alignItems: 'center', }}>
                        <Title style={{ color: colors.background }}>OK</Title>
                    </TouchableRipple>
                </View>
            </View>
        </Surface>
    )
}

export default withTheme(Calculator)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})