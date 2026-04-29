import React from 'react'
import { Stack } from 'expo-router'
import { statusBar } from 'expo-status-bar';

export default function ROOTLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name ='index' options={{ HeaderShown : false}}/>
        <Stack.Screen name ='home' options={{ HeaderShown : false}}/>
      </Stack>
      <statusBar style='light'/>
    </>
  )
}