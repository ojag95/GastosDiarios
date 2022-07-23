import Colors from "./Colors";
import { DefaultTheme,DarkTheme } from 'react-native-paper';


export const defaultTheme = {
    ...DefaultTheme,
    roundness: 5,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.Primary,
      accent: Colors.Accent,
      background: "#fff",
      accentWithOpacity:Colors.AccentWithOpacity,
      error:Colors.Red
    },
  };

export const darkTheme={
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: Colors.Primary,
      accent: Colors.Accent,
    }
  };