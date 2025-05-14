import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SvgIcon from "../common/SvgIcon";
import { IconSvg } from "@/assets/images/svg";

interface AccountBalanceCardProps {
  accountType: string;
  accountNumber: string;
  balance: string;
  onPressSend?: () => void;
  className?: string;
}

const AccountBalanceCard: React.FC<AccountBalanceCardProps> = ({
  accountType,
  accountNumber,
  balance,
  onPressSend,
  className = "",
}) => {
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
        <Text className="text-text text-sm font-open-sans-medbold">NIO</Text>
        <Text className="text-text text-3xl font-bold">{balance}</Text>
      </View>
    </View>
  );
};

export default AccountBalanceCard;
