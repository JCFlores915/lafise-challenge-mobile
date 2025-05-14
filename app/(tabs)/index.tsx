import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Alert,
} from "react-native";
import { Link, useRouter } from "expo-router";
import AccountBalanceCard from "../../components/home/AccountBalanceCard";
import QuickActionItem from "../../components/home/QuickActionItem";
import ScheduledPayment from "../../components/home/ScheduledPayment";
import SvgIcon from "@/components/common/SvgIcon";
import { IconSvg } from "@/assets/images/svg";
import { useFocusEffect } from "expo-router";
import { useAccountStore } from "@/stores/accounts.store";
import { useUserStore } from "@/stores/user.store";
import { useTransactionsStore } from "@/stores/transacctions.store";
import { sharedAccountDetails } from "@/utils/SharingAccount";
import { formatCurrency, formatDisplayNumber } from "@/utils/formatCurrency";
import NetworkError from "@/components/common/NetworkError";
import ScreenLoader from "@/components/common/ScreenLoader";

export default function HomeScreen() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const {
    accounts,
    loading: accountsLoading,
    error: accountsError,
    fetchAccounts,
  } = useAccountStore();

  const {
    user,
    loading: userLoading,
    error: userError,
    fetchUser,
  } = useUserStore();

  const {
    transactions,
    loading: transactionsLoading,
    error: transactionsError,
    fetchTransactions,
  } = useTransactionsStore();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
      StatusBar.setBackgroundColor("transparent");
      StatusBar.setTranslucent(true);
    }, [])
  );

  useEffect(() => {
    fetchAccounts();
    fetchUser();
    fetchTransactions();
  }, []);

  let loading = userLoading || accountsLoading || transactionsLoading;

  if (loading) {
    return <ScreenLoader />;
  }

  let error = userError || accountsError || transactionsError;

  if (error) {
    return (
      <NetworkError
        onRetry={() => {
          fetchAccounts();
          fetchUser();
          fetchTransactions();
        }}
      />
    );
  }
  return (
    <View className="flex-1 bg-transparent">
      <ScrollView
        className="flex-1"
        scrollEnabled={transactions.items.length > 4}
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
                <Text className="text-white text-lg ml-2 font-open-sans-medbold">
                  {`Hola, ${user.full_name.split(" ")[0]}`}
                </Text>
              </View>
              <Image
                source={
                  user.profile_photo
                    ? { uri: user.profile_photo }
                    : require("../../assets/images/profile_placeholder.png")
                }
                className="w-12 h-12 rounded-full"
              />
            </View>
            <View className="flex-row items-center">
              <Text className="text-white text-xl font-open-sans-medbold">
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

        <View className="bg-surface pt-8 px-5 min-h-[500px]">
          <AccountBalanceCard
            accountType={accounts.alias || "No disponible"}
            accountNumber={accounts.account_number || "No disponible"}
            balance={
              isVisible
                ? "*****"
                : formatDisplayNumber(accounts.balance) || "No disponible"
            }
            currency={accounts.currency || "No disponible"}
            onPressSend={() => sharedAccountDetails(user, accounts)}
            className="mt-[-150px] mb-6"
          />

          <View className="flex mb-6 bg-white p-3 rounded-xl shadow-md">
            <Text className="text-text text-xl font-open-sans-semibold mb-4">
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
                  onPress={() => {}}
                  iconContainerClassName="bg-[#FFF3E9] p-4 rounded-xl mb-2"
                />
                <QuickActionItem
                  iconName={IconSvg.phone_recharge}
                  label="Recargar Celular"
                  onPress={() => {}}
                  iconContainerClassName="bg-[#E6F7FD] p-4 rounded-xl mb-2"
                />
                <QuickActionItem
                  iconName={IconSvg.whithdrawal}
                  label="Retiro sin tarjeta"
                  onPress={() => {}}
                  iconContainerClassName="bg-[#EAE6F3] p-4 rounded-xl mb-2"
                />
            </View>
          </View>
          {transactions.items.length > 0 ? (
            transactions.items.map((transaction, index) => (
              <ScheduledPayment
                key={index}
                title={transaction.description}
                subtitle={transaction.bank_description}
                transactionType={transaction.transaction_type}
                amount={
                  isVisible ? "*****" : formatCurrency(transaction.amount.value)
                }
                className="mb-4"
              />
            ))
          ) : (
            <View className="flex items-center justify-center h-32">
              <Text className="text-text text-lg font-open-sans-semibold">
                No hay transacciones recientes
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
