// app/(tabs)/products.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function ProductsScreen() {
  const products = [
    { id: '1', name: 'Cuenta de Ahorro Flexible', icon: 'piggy-bank-outline', details: 'Intereses competitivos, sin comisiones.' },
    { id: '2', name: 'Tarjeta de Crédito Oro', icon: 'credit-card-outline', details: 'Beneficios exclusivos y acumulación de puntos.' },
    { id: '3', name: 'Préstamo Personal Rápido', icon: 'cash-multiple', details: 'Aprobación ágil para tus proyectos.' },
    { id: '4', name: 'Seguro de Vida Protección Total', icon: 'shield-account-outline', details: 'Tranquilidad para ti y tu familia.' },
    { id: '5', name: 'Inversiones Inteligentes', icon: 'chart-line', details: 'Haz crecer tu dinero con nuestros fondos.' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-surface">

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text className="text-2xl font-bold text-text mb-6 text-center">
          Explora Nuestros Productos
        </Text>

        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            className="mb-4 p-4 bg-white rounded-lg shadow-md flex-row items-center active:bg-primary/10"
            onPress={() => alert(`Más información sobre: ${product.name}`)}
          >
            <View className="p-3 bg-primary/10 rounded-full mr-4">
              <MaterialCommunityIcons name={product.icon as any} size={28} color="#006A4E" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-text">{product.name}</Text>
              <Text className="text-sm text-text-secondary mt-1">{product.details}</Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#6B7280" />
          </TouchableOpacity>
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}