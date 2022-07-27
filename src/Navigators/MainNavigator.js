import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from '../Constants/Colors';
import OperationsNavigator from './OperationsNavigator';
import ReportsScreen from '../Screens/Reports/ReportsScreen';
import ProfileNavigator from './ProfileNavigator';


const Tab = createMaterialBottomTabNavigator();


const MainNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" shifting={false} labeled={true}>
          <Tab.Screen name="OperationsNavigatorScreen" options={{title:'Movimientos',tabBarIcon:'format-list-bulleted',tabBarColor:Colors.Primary}} component={OperationsNavigator} />
          <Tab.Screen name="ReportsScreen" options={{title:'Reportes',tabBarIcon:'chart-line',tabBarColor:Colors.Accent}} component={ReportsScreen} />
          <Tab.Screen name="MyProfileScreen" options={{title:'Mi perfil',tabBarIcon:'account-circle-outline',tabBarColor:'purple'}} component={ProfileNavigator} />

        </Tab.Navigator>
      );
}

export default MainNavigator

