import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingScreen from '../Screens/Onboarding/OnboardingScreen'
import InitializingScreen from '../Screens/Onboarding/InitializingScreen'

const Stack =createStackNavigator()
const InitialNavigator = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name='OnboardingScreen' component={OnboardingScreen}  options={{headerShown:false}}/>
            <Stack.Screen name='InitializingScreen' component={InitializingScreen}  options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default InitialNavigator