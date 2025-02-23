import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';


export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Class Room App!</Text>
      <Button title="Go to Login" onPress={() => router.push('(auth)/login')} />
    </View>
  );
}
