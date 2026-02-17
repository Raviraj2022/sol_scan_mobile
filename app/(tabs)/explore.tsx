import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function explore() {
  return (
    <SafeAreaView style={s.safe} edges={["top"]}>
      <Text>explore</Text>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
     safe: {
    flex: 1,
    backgroundColor: "#0D0D12",
  },
})