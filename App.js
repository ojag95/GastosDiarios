import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { darkTheme, defaultTheme } from './src/Constants/Theme';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import InitialNavigator from './src/Navigators/InitialNavigator';
import MainNavigator from './src/Navigators/MainNavigator';
import OnBoardingProvider, { OnBoardingContext } from './src/Context/OnboardingContext';
import { useContext } from 'react';

export default function App() {

    const HandleNavigators=()=>{
        let {isOnBoardingVisible,setOnBoardingVisible,setOnBoardingNoVisible} = useContext(OnBoardingContext);
        return ( isOnBoardingVisible?<InitialNavigator/>:<MainNavigator />)
    }

    const colorScheme = useColorScheme();
    return (
        <OnBoardingProvider>
            <PaperProvider theme={colorScheme === 'light' ? defaultTheme : darkTheme}>
                <NavigationContainer theme={colorScheme === 'light' ? defaultTheme : darkTheme}>
                    <HandleNavigators/>
                </NavigationContainer>
            </PaperProvider>
        </OnBoardingProvider>
    );
}