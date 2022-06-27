import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/Navigators/MainNavigator';
import { darkTheme, defaultTheme } from './src/Constants/Theme';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <PaperProvider theme={colorScheme === 'light' ? defaultTheme : darkTheme}>
      <NavigationContainer theme={colorScheme === 'light' ? defaultTheme : darkTheme}>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
