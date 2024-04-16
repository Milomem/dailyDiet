import { StatusBar } from 'react-native';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans'
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components/native';

import { Loading } from '@components/loading';
import { Statistic } from '@screens/statistic';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return(
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Statistic/> : <Loading />}
    </ThemeProvider>
  )
}

