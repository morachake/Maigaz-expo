import { Icon } from '@rneui/themed';
import { useFonts } from 'expo-font';
import RootNavigation from './src/navigation/RootNavigation';
import { store } from './src/store'
import { Provider } from 'react-redux'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
  });
  return (
    <Provider store={store}>
      <RootNavigation/>
    </Provider>
    );
}
