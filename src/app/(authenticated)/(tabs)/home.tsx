import Button from "@/src/components/button";
import Card from "@/src/components/card";
import axios from "axios";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, View } from 'react-native';

type ProductProps = {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>()
  const [loading, setLoading] = useState(false)

  const getProduct = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('https://6af3f9fe55a1de7dcf03745a.mockapi.io/api/products/items')

      let getfirst = data.sort(
        (a: ProductProps, b: ProductProps) => Number(b.id) - Number(a.id)
      );

      setProducts(getfirst)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    getProduct()
  }, []))

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6">
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View className="flex-1 gap-4">
          <Button label="Add Post" onPress={() => router.push('/posts/create')} />
          {products?.map((product) => (
            <Pressable key={product.id} onPress={() => router.push({
              pathname: '/posts/[id]',
              params: { id: product.id }
            })}>
              <Card name={product.name} description={product.description} image={product.image} />
            </Pressable>
          ))}
        </View>
      )}
    </ScrollView>
  )
}