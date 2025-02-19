import { View, Text, TextInput, Button } from "react-native";
import { useRouter, useSearchParams } from "expo-router";
import { useState } from "react";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login as User</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, width: 200, margin: 10 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, width: 200, margin: 10 }} />
      <Button title="Login" onPress={() => router.push("/(user)")} />
    </View>
  );
};

export default Login;
