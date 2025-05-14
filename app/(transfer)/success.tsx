import { useCallback } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter, useFocusEffect } from "expo-router";
import Button from "../../components/common/Button";

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-col text-center py-3">
    <Text className="text-text-secondary text-sm font-semibold text-center">
      {label}
    </Text>
    <Text className="text-text text-base font-normal text-center">{value}</Text>
  </View>
);

export default function TransferSuccessScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    accountNumber: string;
    displayAmount: string;
    sourceAccount: string;
    date: string;
    time: string;
  }>();

  const handleGoHome = () => {
    router.replace("/(tabs)");
  };

  const currentDate = params.date || "18 de febrero del 2024";
  const currentTime = params.time || "09:30 AM";

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("dark-content");
      StatusBar.setBackgroundColor("#ffffff");
      StatusBar.setTranslucent(false);
    }, [])
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-5 justify-between items-center">
        <View className="w-full items-center">
          <View className="mt-16 mb-8 items-center">
            <View className="w-full items-center">
              <Image
                source={require("@/assets/images/success.png")}
                className="mt-[-150px] mb-4  "
                resizeMode="contain"
              />
            </View>
            <Text className="text-text text-2xl font-bold mt-4">
              Envío con éxito
            </Text>
            <Text className="text-text-secondary text-sm mt-1">
              {currentDate}, {currentTime}
            </Text>
          </View>

          <View className="bg-white p-5 rounded-xl w-full">
            <Text className="text-text text-lg font-semibold mb-3 text-center">
              Resumen de tu envío
            </Text>
            <SummaryRow
              label="Total enviado"
              value={params.displayAmount || "C$0.00"}
            />
            <SummaryRow
              label="Al número de cuenta"
              value={params.accountNumber || "N/A"}
            />
            <SummaryRow
              label="Cuenta utilizada para el envío"
              value={params.sourceAccount || "N/A"}
            />
          </View>
        </View>

        <View className="w-full">
          <Button title="Volver al inicio" onPress={handleGoHome} size="lg" />
        </View>
      </View>
    </SafeAreaView>
  );
}
