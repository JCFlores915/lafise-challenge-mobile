import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Button from '../../components/common/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-row justify-between py-3">
    <Text className="text-text-secondary text-sm">{label}</Text>
    <Text className="text-text text-sm font-semibold">{value}</Text>
  </View>
);

export default function TransferSuccessScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ accountNumber: string, displayAmount: string, sourceAccount: string, date: string, time: string }>();

  const handleGoHome = () => {
    router.replace('/(tabs)');
  };

  const currentDate = params.date || "18 de febrero del 2024";
  const currentTime = params.time || "09:30 AM";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-5 justify-between items-center">
        <View className="w-full items-center">
          <View className="mt-16 mb-8 items-center">
            <MaterialCommunityIcons name="check-circle" size={80} color="#10B981" />
            <Text className="text-text text-2xl font-bold mt-4">Envío con éxito</Text>
            <Text className="text-text-secondary text-sm mt-1">
              {currentDate}, {currentTime}
            </Text>
          </View>

          <View className="bg-surface p-5 rounded-xl w-full shadow">
            <Text className="text-text text-lg font-semibold mb-3 text-center">
              Resumen de tu envío
            </Text>
            <SummaryRow label="Total enviado" value={params.displayAmount || 'C$0.00'} />
            <SummaryRow label="Al número de cuenta" value={params.accountNumber || 'N/A'} />
            <SummaryRow label="Cuenta utilizada para el envío" value={params.sourceAccount || 'N/A'} />
          </View>
        </View>

        <View className="w-full">
          <Button title="Volver al inicio" onPress={handleGoHome} />
        </View>
      </View>
    </SafeAreaView>
  );
}