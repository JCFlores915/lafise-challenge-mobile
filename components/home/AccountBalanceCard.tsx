import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SvgIcon from "../common/SvgIcon";
import { IconSvg } from "@/assets/images/svg";
import { formatDisplayNumber } from "@/utils/formatCurrency";
interface AccountBalanceCardProps {
  accountType: string;
  accountNumber: number | string;
  balance: string | number;
  onPressSend?: () => void;
  className?: string;
  currency?: string;
}

const AccountBalanceNotFound = () => {
  return (
    <View className="bg-white p-5 rounded-xl shadow-md border-dashed border-2 border-error mt-[-150px] mb-6">
      <Text className="text-text text-lg font-medium font-open-sans-medbold">
        No se encontraron cuentas
      </Text>
      <Text className="text-text-secondary text-sm mb-5 font-open-sans-italic">
        Por favor, verifica tu conexión a internet o intenta nuevamente más tarde.
      </Text>
    </View>
  );
}


const AccountBalanceCard: React.FC<AccountBalanceCardProps> = ({
  accountType,
  accountNumber,
  balance,
  onPressSend,
  className = "",
  currency,
}) => {

  if (accountNumber === "No disponible") {
    return <AccountBalanceNotFound />;
  }
  return (
    <View className={`bg-white p-5 rounded-xl shadow-md ${className}`}>
      <View className="flex-row justify-between items-start mb-1">
        <View>
          <Text className="text-text text-lg font-medium font-open-sans-medbold">
            {accountType}
          </Text>
          <Text className="text-text-secondary text-sm mb-5 font-open-sans-italic">
            {accountNumber}
          </Text>
        </View>

        {onPressSend && (
          <TouchableOpacity onPress={onPressSend}>
            <SvgIcon xml={IconSvg.link_share} width={30} height={30} />
          </TouchableOpacity>
        )}
      </View>
      <Text className="text-text-secondary text-xs mb-3 font-open-sans">
        Saldo disponible
      </Text>
      <View className="flex-row items-center gap-2">
        <Text className="text-text text-sm font-open-sans-medbold">{currency}</Text>
        <Text className="text-text text-3xl font-bold">{balance}</Text>
      </View>
    </View>
  );
};

export default AccountBalanceCard;
