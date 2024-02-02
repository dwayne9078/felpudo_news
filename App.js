import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './routes/stack.navigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
    // <Login/>

  );
}