import { router } from 'expo-router';
import { Text, View } from 'react-native';


export default function index() {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/(tabs)/home');
        }}>
        Sign In
      </Text>
    </View>
  );
}
