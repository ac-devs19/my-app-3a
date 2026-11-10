import { Text, TextInput, TextInputProps, View } from 'react-native'

interface InputProps extends TextInputProps {
    label: string
}

export default function Input({ label, ...props }: InputProps) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput className='h-12 border border-gray-500 px-4' {...props} />
        </View>
    )
}