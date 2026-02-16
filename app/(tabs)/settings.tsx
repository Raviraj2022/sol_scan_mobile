import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

const settings = () => {

    const router = useRouter();
  return (
    <SafeAreaView>
      <Text>settings</Text>
      <TouchableOpacity 
       style={{
        marginTop:20,
        padding: 18,
        backgroundColor: "",
        borderRadius: 5
      }}
       onPress={() => router.push("/orders")}
      >
<Text>My Orders</Text>
      </TouchableOpacity>

      <Pressable onPress={()=>{
        console.log("My Order pleased")
      }} style={{
        marginTop:20,
        padding: 18,
        backgroundColor: "",
        borderRadius: 5
      }}>
<Text>My Orders</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default settings

const styles = StyleSheet.create({})