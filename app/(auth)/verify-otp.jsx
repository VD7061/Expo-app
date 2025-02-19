import { View, Text, TextInput, Button } from "react-native";
import { useRouter, useSearchParams } from "expo-router";
import { useState } from "react";

const VerifyOTP = () => {
  const router = useRouter();
  const { role } = useSearchParams();
  const [otp, setOtp] = useState("");

  const handleVerifyOTP = () => {
    // Implement OTP verification logic
    if (role === "admin") {
      router.replace("/(admin)");
    } else {
      router.replace("/(user)");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Enter OTP</Text>
      <TextInput placeholder="OTP" value={otp} onChangeText={setOtp} keyboardType="numeric" style={{ borderWidth: 1, width: 200, margin: 10 }} />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

export default VerifyOTP;
