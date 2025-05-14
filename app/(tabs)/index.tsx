import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import AccountBalanceCard from "../../components/home/AccountBalanceCard";
import QuickActionItem from "../../components/home/QuickActionItem";
import ScheduledPayment from "../../components/home/ScheduledPayment";
import SvgIcon from "@/components/common/SvgIcon";
import { IconSvg } from "@/assets/images/svg";

export default function HomeScreen() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View className="flex-1 bg-transparent">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <ImageBackground
          source={require("../../assets/images/background.png")}
          style={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 120 }}
          imageStyle={{ resizeMode: "cover" }}
        >
          <View className=" pt-14 pb-12 bg-transparent">
            <View className="flex-row justify-between items-center mb-8">
              <View className="flex-row items-center">
                <SvgIcon
                  xml={IconSvg.logo_lafise}
                  width={28}
                  height={28}
                  color="white"
                />
                <Text className="text-white text-2xl font-bold ml-2">
                  Hola, Josué
                </Text>
              </View>
              <Image
                source={require("../../assets/images/profile_placeholder.png")}
                className="w-12 h-12 rounded-full"
              />
            </View>
            <View className="flex-row items-center">
              <Text className="text-white text-xl font-semibold">
                Mis productos
              </Text>
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <SvgIcon
                  xml={isVisible ? IconSvg.eye : IconSvg.eye_off}
                  width={20}
                  height={20}
                  className="ml-2"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View className="bg-surface pt-8 px-5  min-h-[500px]">
          <AccountBalanceCard
            accountType="Cuenta de ahorro"
            accountNumber="1134948394"
            balance={isVisible ? "NIO *****" : "NIO 7,500.00"}
            onPressSend={() => console.log("Enviar")}
            className="mt-[-150px] mb-6"
          />

          <View className="flex mb-6 bg-white p-3 rounded-xl shadow-md">
            <Text className="text-text text-xl font-semibold mb-4">
              Operaciones rápidas
            </Text>
            <View className="flex-row justify-round">
              <QuickActionItem
                iconName={IconSvg.transaction}
                label="Transferir Dinero"
                onPress={() => router.push("/(transfer)")}
                iconContainerClassName="bg-[#E6F3F0] p-4 rounded-xl mb-2"
              />
              <QuickActionItem
                iconName={IconSvg.payment_services}
                label="Pagar Servicios"
                iconContainerClassName="bg-[#FFF3E9] p-4 rounded-xl mb-2"
              />
              <QuickActionItem
                iconName={IconSvg.phone_recharge}
                label="Recargar celular"
                iconContainerClassName="bg-[#E6F7FD] p-4 rounded-xl mb-2"
              />
              <QuickActionItem
                iconName={IconSvg.whithdrawal}
                label="Retiro sin tarjeta"
                iconContainerClassName="bg-[#EAE6F3] p-4 rounded-xl mb-2"
              />
            </View>
          </View>
          <ScheduledPayment
            title="Paga quincenal"
            subtitle="Banco"
            amount="C$7,500.00"
            onPress={() => console.log("Detalle pago")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
