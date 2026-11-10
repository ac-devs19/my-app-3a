import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface BtnProps extends TouchableOpacityProps {
    label: string
}

export default function Button({label, ...props}: BtnProps) {
  return (
    <TouchableOpacity className='h-14 bg-blue-500 items-center justify-center' {...props}>
        <Text className='text-white uppercase text-xl font-extrabold'>{label}</Text>
    </TouchableOpacity>
  )
}