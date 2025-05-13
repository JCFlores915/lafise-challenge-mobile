import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Button from '../../components/common/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View className="py-4 border-b border-border">
    <Text className="text-text-secondary text-sm mb-1">{label}</Text>
    <Text className="text-text text-base font-semibold">{value}</Text>
  </View>
);

export default function ConfirmTransferScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ accountNumber: string, amount: string, displayAmount: string, sourceAccount: string }>();

  const handleConfirm = () => {
    router.push({
        pathname: '/(transfer)/success',
        params: {
            accountNumber: params.accountNumber,
            displayAmount: params.displayAmount,
            sourceAccount: params.sourceAccount,
            date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric'}),
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
        }
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <View className="flex-1 p-5 justify-between">
        <View>
          <View className="items-center my-8">
            <View className="bg-accent/20 p-6 rounded-full mb-4">
              <MaterialCommunityIcons name="cellphone-check" size={48} color="#006A4E" />
            </View>
            <Text className="text-text-secondary text-sm">Total a enviar</Text>
            <Text className="text-text text-4xl font-bold mt-1">{params.displayAmount || 'C$0.00'}</Text>
          </View>

          <InfoRow label="Al número de cuenta" value={params.accountNumber || 'N/A'} />
          <InfoRow label="Cuenta a utilizar para el envío" value={params.sourceAccount || 'N/A'} />
        </View>

        <Button title="Confirmar el envío" onPress={handleConfirm} />
      </View>
    </SafeAreaView>
  );
}