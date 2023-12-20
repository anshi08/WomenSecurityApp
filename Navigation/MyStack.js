import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from  '../screens/Mainpage';
import SignUp from '../screens/SignUp' ;
import SignIn from '../screens/SignIn';
import Phone from '../screens/Phone';
import Map from '../screens/Map';

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome There !!" component={MainScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} /> 
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name='Map' component={Map} />
    </Stack.Navigator>
  );
}

export default MyStack