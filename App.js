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

export default function App() {

  const colorScheme = useColorScheme();

  useEffect(() => {
    
    getDatabaseInfo()
    return () => {

    }
  }, [])

  const getDatabaseInfo = async () => {
    await createDatabase();
    let result = await showAllTables();
    console.log(result)
    let resultAccount= await addBaseAccounts()
    let resultCategories= await addBaseCategories()
    let accounts=await consultAccounts()
    let category=await consultCategories()
    console.log('CATEGORIAS',category)
    console.log('Accounts',accounts)
    

  }

  return (
    <PaperProvider theme={colorScheme === 'light' ? defaultTheme : darkTheme}>
      <NavigationContainer theme={colorScheme === 'light' ? defaultTheme : darkTheme}>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}