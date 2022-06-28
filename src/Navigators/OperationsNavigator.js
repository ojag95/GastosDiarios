import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OperationsScreen from '../Screens/Operations/OperationsScreen'
import AddOperationScreen from '../Screens/Operations/AddOperationScreen'

const OperationsNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName="OperationsListScreen">
            <Stack.Screen name='OperationsListScreen' component={OperationsScreen}  options={{headerShown:false}}/>
            <Stack.Screen name='AddOperationsScreen' component={AddOperationScreen}  options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default OperationsNavigator
