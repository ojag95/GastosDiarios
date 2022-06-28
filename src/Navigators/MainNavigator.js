import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import OperationsScreen from '../Screens/Operations/OperationsScreen';
import Colors from '../Constants/Colors';
import OperationsNavigator from './OperationsNavigator';


const Tab = createMaterialBottomTabNavigator();


const MainNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" shifting={false} labeled={true}>
          <Tab.Screen name="OperationsNavigatorScreen" options={{title:'Movimientos',tabBarIcon:'format-list-bulleted',tabBarColor:Colors.Primary}} component={OperationsNavigator} />
          <Tab.Screen name="ReportsScreen" options={{title:'Reportes',tabBarIcon:'chart-line',tabBarColor:Colors.Accent}} component={OperationsScreen} />
          <Tab.Screen name="MyProfileScreen" options={{title:'Mi perfil',tabBarIcon:'account-circle-outline',tabBarColor:'purple'}} component={OperationsScreen} />

        </Tab.Navigator>
      );
}

export default MainNavigator

