import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import Icon from "../common/Icon";

interface ScheduledPaymentProps {
  title: string;
  subtitle: string;
  amount: string; 
  iconName?: any;
  iconFamily?:
    | "MaterialCommunityIcons"
    | "Ionicons"
    | "Feather"
    | "FontAwesome"
    | "AntDesign";
  onPress?: () => void;
  className?: string;
}

const ScheduledPayment: React.FC<ScheduledPaymentProps> = ({
  title,
  subtitle,
  amount,
  iconName = "arrow-down-thin-circle-outline",
  iconFamily = "MaterialCommunityIcons",
  onPress,
  className = "",
}) => {
  const content = (
    <View
      className={`bg-white p-4 rounded-xl shadow-md flex-row items-center justify-between ${className}`}
    >
      <View className="flex-row items-center">
        <View className="bg-accent/20 p-3 rounded-full mr-3">
          <Icon name={iconName} family={iconFamily} size={24} color="#006A4E" />
        </View>
        <View>
          <Text className="text-text font-semibold">{title}</Text>
          <Text className="text-text-secondary text-sm">{subtitle}</Text>
        </View>
      </View>
      <Text className="text-accent font-bold text-base">{amount}</Text>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

export default ScheduledPayment;
