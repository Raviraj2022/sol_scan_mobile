import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useRouter } from 'expo-router'

export default function orders() {
    const router  = useRouter();
  return (
    <SafeAreaView>
        <TouchableOpacity 
           style={{
            marginTop:20,
            padding: 18,
            backgroundColor: "",
            borderRadius: 5
          }}
           onPress={() => router.back()}
          >
    <Text>go back</Text>
          </TouchableOpacity><Text>orders</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})