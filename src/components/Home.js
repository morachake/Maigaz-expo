import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeView from './HomeView'
import MapView from './MapView'

const Home = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeView" component={HomeView} options={{ headerShown: false }} />
      <Stack.Screen name="MapView" component={MapView} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Home