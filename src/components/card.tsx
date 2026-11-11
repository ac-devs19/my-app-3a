import { Image, Text, View } from 'react-native';

type Props = {
    name: string;
    description: string;
    image: string;
}

export default function Card({ name, description, image }: Props) {
    return (
        <View className='border border-gray-500 rounded-xl overflow-hidden'>
            <Image source={{ uri: image }} className='h-40' />
            <View className='gap-2 p-2'>
                <Text className='font-bold text-xl'>{name}</Text>
                <Text className='text-sm text-gray-700'>{description}</Text>
            </View>
        </View>
    )
}