import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { router } from 'expo-router'
import { View } from 'react-native'

export default function Login() {
  return (
    <View className='p-6 gap-4'>
      <Input label='Email'/>
      <Input label='Password' secureTextEntry={true}/>
      <Button label='Login' onPress={() => router.push('/home')}/>
      <Button label='Create Account' onPress={() => router.push('/register')}/>
    </View>
  )
}