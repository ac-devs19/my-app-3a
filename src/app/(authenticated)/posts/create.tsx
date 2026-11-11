import Button from '@/src/components/button'
import Input from '@/src/components/input'
import axios from 'axios'
import { router } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'

export default function Create() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const createPost = async () => {
        try {
            await axios.post('https://6af3f9fe55a1de7dcf03745a.mockapi.io/api/products/items', { name, description, image })
            router.back()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View className='p-6 gap-4'>
            <Input label='Name' onChangeText={(value) => setName(value)} />
            <Input label='Description' onChangeText={(value) => setDescription(value)} />
            <Input label='Image Url' onChangeText={(value) => setImage(value)} />
            <Button label='Create Post' onPress={createPost} />
        </View>
    )
}