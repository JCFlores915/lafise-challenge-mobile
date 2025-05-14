// app/(transfer)/_layout.tsx
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity, Platform } from 'react-native'; // Platform para ajustes de UI
import { Ionicons } from '@expo/vector-icons';
import SvgIcon from '@/components/common/SvgIcon';
import { IconSvg } from '@/assets/images/svg';
// No necesitas 'styled' de nativewind aquí para los componentes básicos de la cabecera.

export default function TransferLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white', 
        },
        headerTintColor: '#1F2937', 
        headerTitleStyle: {
          fontWeight: '600', 
          fontSize: 17,     
        },
        headerTitleAlign: 'center', 
        headerShadowVisible: false, 

        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              marginLeft: Platform.OS === 'ios' ? 8 : 0, 
              padding: 8, 
            }}
          >
            <SvgIcon
              xml={IconSvg.chevron_right}
              width={22}
              height={22}
            />

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