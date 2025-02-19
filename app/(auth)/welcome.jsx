import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the App</Text>
      <Button title="Login as Admin" onPress={() => router.push("/(auth)/adminLogin")} />
      <Button title="Login as User" onPress={() => router.push("/(auth)/login")} />
      <Button title="Register" onPress={() => router.push("/(auth)/register")} />
    </View>
  );
};

export default Welcome;
