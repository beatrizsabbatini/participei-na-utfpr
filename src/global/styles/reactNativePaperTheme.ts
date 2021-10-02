import { DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2186E6',
    accent: '#2DB3F0',
    placeholder: '#B7B7B7',
    borderColor: '#B7B7B7',
  },
  roundness: 30
};

export default theme;