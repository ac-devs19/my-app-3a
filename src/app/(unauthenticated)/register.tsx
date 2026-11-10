import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { View } from 'react-native'

export default function Register() {
  return (
   <View className='p-6 gap-4'>
         <Input label='Name'/>
         <Input label='Email'/>
         <Input label='Password' secureTextEntry={true}/>
         <Input label='Confirm Password' secureTextEntry={true}/>
         <Button label='Register'/>
       </View>
  )
}