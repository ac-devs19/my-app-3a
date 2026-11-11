import { Stack } from "expo-router";

export default function DefaultLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false
      }} />
      <Stack.Screen name="posts/create" options={{
        headerTitle: "Create Post"
      }} />
    </Stack>
  )
}