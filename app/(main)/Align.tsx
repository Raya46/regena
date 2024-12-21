import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function AlignPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Align</Text>
      <Button onPress={() => router.replace("/Align")} title="tes" />
    </View>
  );
}
