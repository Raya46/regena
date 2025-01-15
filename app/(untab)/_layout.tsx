import { Stack } from "expo-router";

export default function UntabLayout() {
  return (
    <Stack>
      <Stack.Screen name="JournalAction" options={{ headerShown: false }} />
      <Stack.Screen name="CreateAlign" options={{ headerShown: false }} />
      <Stack.Screen name="DetailMeals" options={{ headerShown: false }} />
    </Stack>
  );
}
