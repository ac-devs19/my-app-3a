import axios from 'axios';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';

type ProductProps = {
    id: string;
    name: string;
    description: string;
    image: string;
}

export default function PostById() {
    const { id } = useLocalSearchParams()
    const [product, setProduct] = useState<ProductProps>()
    const [loading, setLoading] = useState(false)

    const getProductById = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(`https://6af3f9fe55a1de7dcf03745a.mockapi.io/api/products/items/${id}`)
            setProduct(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useFocusEffect(useCallback(() => {
        getProductById()
    }, []))

    return loading ? (
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" />
        </View>
    ) : (
        <View className='flex-1 p-6'>
            <Image source={{ uri: product?.image }} className='h-40' />
            <View className='gap-2 p-2'>
                <Text className='font-bold text-xl'>{product?.name}</Text>
                <Text className='text-sm text-gray-700'>{product?.description}</Text>
            </View>
        </View>
    )
}