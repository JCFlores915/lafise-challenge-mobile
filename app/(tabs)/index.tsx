// app/(tabs)/index.tsx
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

import AccountBalanceCard from "../../components/home/AccountBalanceCard";
import QuickActionItem from "../../components/home/QuickActionItem";
import ScheduledPayment from "../../components/home/ScheduledPayment";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="px-5 pt-5 pb-12 bg-primary">
          <View className="flex-row justify-between items-center mb-8">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="format-list-bulleted-square"
                size={28}
                color="white"
              />
              <Text className="text-white text-2xl font-bold ml-2">
                Hola, Josué
              </Text>
            </View>
            <Image
              source={require("../../assets/images/profile_placeholder.png")} // Asegúrate de tener esta imagen
              className="w-10 h-10 rounded-full"
            />
          </View>
          <View className="flex-row items-center">
            <Text className="text-white text-xl font-semibold">
              Mis productos
            </Text>
            <Feather name="settings" size={20} color="white" className="ml-2" />
          </View>
        </View>

        <View className="bg-surface -mt-8 pt-8 px-5 rounded-t-3xl min-h-[500px]">
          <AccountBalanceCard
            accountType="Cuenta de ahorro"
            accountNumber="1134948394"
            balance="NIO 7,500.00"
            onPressSend={() => console.log('Enviar')}
            className="mb-6"
          />
          <Text className="text-text text-xl font-semibold mb-4">
            Operaciones rápidas
          </Text>
          <View className="flex-row justify-around mb-6 bg-white p-3 rounded-xl shadow-md">
            <QuickActionItem
              iconName="bank-transfer-out"
              label="Transferir Dinero"
              onPress={() => router.push("/(transfer)")}
            />
            <QuickActionItem
              iconName="lightbulb-on-outline"
              label="Pagar Servicio"
            />
            <QuickActionItem
              iconName="cellphone-arrow-down"
              label="Recargar celular"
            />
            <QuickActionItem
              iconName="credit-card-off-outline"
              label="Retiro sin tarjeta"
            />
          </View>
          <ScheduledPayment
            title="Paga quincenal"
            subtitle="Banco"
            amount="C$7,500.00"
            onPress={() => console.log('Detalle pago')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
