import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OperationsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface">


      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-2xl font-bold text-text mb-6 text-center">
          Historial de Operaciones
        </Text>

        <View className="mb-4 p-4 bg-white rounded-lg shadow">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-base font-semibold text-text">Transferencia Enviada</Text>
            <Text className="text-sm text-error">- C$500.00</Text>
          </View>
          <Text className="text-xs text-text-secondary">A: Cuenta ...7890</Text>
          <Text className="text-xs text-text-secondary">15 de Febrero, 2024 - 10:30 AM</Text>
        </View>

        <View className="mb-4 p-4 bg-white rounded-lg shadow">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-base font-semibold text-text">Pago de Servicio</Text>
            <Text className="text-sm text-error">- C$1,200.00</Text>
          </View>
          <Text className="text-xs text-text-secondary">Empresa de Luz</Text>
          <Text className="text-xs text-text-secondary">14 de Febrero, 2024 - 02:15 PM</Text>
        </View>

        <View className="mb-4 p-4 bg-white rounded-lg shadow">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-base font-semibold text-text">Depósito Recibido</Text>
            <Text className="text-sm text-success">+ C$2,000.00</Text>
          </View>
          <Text className="text-xs text-text-secondary">De: Nómina Empresa XYZ</Text>
          <Text className="text-xs text-text-secondary">13 de Febrero, 2024 - 09:00 AM</Text>
        </View>

        {/* {Array.from({ length: 5 }).map((_, index) => (
          <View key={index} className="mb-4 p-4 bg-white rounded-lg shadow animate-pulse">
            <View className="h-4 bg-gray-300 rounded w-3/4 mb-2"></View>
            <View className="h-3 bg-gray-300 rounded w-1/2 mb-1"></View>
            <View className="h-3 bg-gray-300 rounded w-1/3"></View>
          </View>
        ))} */}

      </ScrollView>
    </SafeAreaView>
  );
}