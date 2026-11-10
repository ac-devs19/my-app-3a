import { Tabs } from "expo-router";
import { Home, User } from 'lucide-react-native';

export default function TabsLayout() {
  return (
   <Tabs>
    <Tabs.Screen name="home" options={{
        tabBarIcon: () => <Home/>
    }} />
    <Tabs.Screen name="profile" options={{
        tabBarIcon: () => <User/>
    }} />
   </Tabs>
  )
}