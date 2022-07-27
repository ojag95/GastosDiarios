import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../Screens/Profile/ProfileScreen'
import ProfileSettingsScreen from '../Screens/Profile/ProfileSettingsScreen'
import CategoriesScreen from '../Screens/Profile/CategoriesScreen'

const ProfileNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName="ProfileScreen">
            <Stack.Screen name='ProfileScreen' component={ProfileScreen}  options={{headerShown:false}}/>
            <Stack.Screen name='ProfileSettingsScreen' component={ProfileSettingsScreen}  options={{headerShown:false}}/>
            <Stack.Screen name='CategoriesScreen' component={CategoriesScreen}  options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default ProfileNavigator
