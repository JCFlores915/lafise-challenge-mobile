import { useCallback } from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter, useFocusEffect } from "expo-router";
import Button from "../../components/common/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SvgIcon from "@/components/common/SvgIcon";
import { IconSvg } from "@/assets/images/svg";
import InfoRow from "@/components/common/InfoRow";
import { useTransactionsStore } from "@/stores/transacctions.store";
import { parseCurrency } from "@/utils/formatCurrency";

export default function ConfirmTransferScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    accountNumber: string;
    amount: string;
    displayAmount: string;
    sourceAccount: string;
  }>();

  const { postTransaction } = useTransactionsStore();

  const handleConfirm = async () => {
    const transaction = {
      origin: params.sourceAccount,
      destination: params.accountNumber,
      amount: {
        currency: "NIO",
        value: parseCurrency(params.amount),
      },
    };

   await postTransaction(transaction)
      .then(() => {
        router.push({
          pathname: "/(transfer)/success",
          params: {
            accountNumber: params.accountNumber,
            displayAmount: params.displayAmount,
            sourceAccount: params.sourceAccount,
            date: new Date().toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
            time: new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }),
          },
        });
      })
      .catch((error) => {
        console.error("Error al crear la transacción:", error);
      });
  };

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("dark-content");
      StatusBar.setBackgroundColor("#ffffff");
      StatusBar.setTranslucent(false);
    }, [])
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-5 justify-between">
        <View>
          <View className="items-center my-8">
            <View className="bg-[#E6F7FD] p-8 rounded-full mb-4">
              <SvgIcon
                xml={IconSvg.phone_recharge}
                width={40}
                height={40}
                borderColor="#0079A8"
              />
            </View>
            <Text className="text-text-secondary text-lg">Total a enviar</Text>
            <Text className="text-text text-5xl font-bold mt-1">
              {params.displayAmount || "C$0.00"}
            </Text>
          </View>

          <InfoRow
            label="Al número de cuenta"
            value={params.accountNumber || "N/A"}
          />
          <InfoRow
            label="Cuenta a utilizar para el envío"
            value={params.sourceAccount || "N/A"}
          />
        </View>

        <Button title="Confirmar el envío" onPress={handleConfirm} size="lg" />
      </View>
    </SafeAreaView>
  );
}
