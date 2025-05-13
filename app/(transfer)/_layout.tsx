// app/(transfer)/_layout.tsx
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity, Platform } from 'react-native'; // Platform para ajustes de UI
import { Ionicons } from '@expo/vector-icons';
// No necesitas 'styled' de nativewind aquí para los componentes básicos de la cabecera.

export default function TransferLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white', // Color de fondo de la cabecera
        },
        headerTintColor: '#1F2937', // Color del título y del botón de retroceso (texto oscuro)
        headerTitleStyle: {
          fontWeight: '600', // 'bold' puede ser muy grueso, '600' (semibold) es común
          fontSize: 17,      // Tamaño de fuente típico para títulos de cabecera iOS
        },
        headerTitleAlign: 'center', // Centra el título como en las imágenes de ejemplo
        headerShadowVisible: true,  // Muestra una sombra sutil debajo de la cabecera

        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              marginLeft: Platform.OS === 'ios' ? 8 : 0, 
              padding: 8, 
            }}
          >
            <Ionicons name="arrow-back" size={24} color="#1F2937" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="index" 
        options={{
          title: 'Transferir dinero',
        }}
      />
      <Stack.Screen
        name="confirm" 
        options={{
          title: 'Confirma tu envío',
        }}
      />
      <Stack.Screen
        name="success" 
        options={{
          headerShown: false, 
        }}
      />
    </Stack>
  );
}