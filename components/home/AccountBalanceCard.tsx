import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 

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
        <Text className="text-text text-lg font-semibold">{accountType}</Text>
        {onPressSend && (
          <TouchableOpacity onPress={onPressSend} className="p-1 -mr-1 -mt-1">
            <MaterialCommunityIcons
              name="send-outline"
              size={24}
              color="#006A4E"
            />
          </TouchableOpacity>
        )}
      </View>
      <Text className="text-text-secondary text-sm mb-3">{accountNumber}</Text>
      <Text className="text-text-secondary text-xs">Saldo disponible</Text>
      <Text className="text-text text-3xl font-bold">{balance}</Text>
    </View>
  );
};

export default AccountBalanceCard;