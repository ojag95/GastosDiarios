import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/Navigators/MainNavigator';
import { darkTheme, defaultTheme } from './src/Constants/Theme';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useEffect } from 'react';
import { createDatabase, insertBaseCategories, obtenerValoresCategory, showAllTables } from './src/Utils/Database/Database';
import { addBaseCategories, consultCategories } from './src/DataProvider/Category';
import { addBaseAccounts, consultAccounts } from './src/DataProvider/Accounts';
import { consultAllMovements } from './src/DataProvider/Movements';
import InitialNavigator from './src/Navigators/InitialNavigator';

export default function App() {

  const colorScheme = useColorScheme();

  return (
    <PaperProvider theme={colorScheme === 'light' ? defaultTheme : darkTheme}>
      <NavigationContainer theme={colorScheme === 'light' ? defaultTheme : darkTheme}>
        {
        //<MainNavigator />
        }
        <InitialNavigator/>
      </NavigationContainer>
    </PaperProvider>
  );
}