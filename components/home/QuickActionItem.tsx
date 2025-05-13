// components/home/QuickActionItem.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import Icon from "../common/Icon"; 

interface QuickActionItemProps {
  iconName: any; 
  iconFamily?:
    | "MaterialCommunityIcons"
    | "Ionicons"
    | "Feather"
    | "FontAwesome"
    | "AntDesign";
  label: string;
  onPress?: () => void;
  className?: string; 
  iconContainerClassName?: string;
  labelClassName?: string;
}

const QuickActionItem: React.FC<QuickActionItemProps> = ({
  iconName,
  iconFamily = "MaterialCommunityIcons",
  label,
  onPress,
  className = "items-center flex-1 p-2",
  iconContainerClassName = "bg-primary/10 p-4 rounded-full mb-2",
  labelClassName = "text-text text-xs text-center",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={className}
      activeOpacity={0.7}
    >
      <View className={iconContainerClassName}>
        <Icon name={iconName} family={iconFamily} size={28} color="#006A4E" />
      </View>
      <Text className={labelClassName}>{label}</Text>
    </TouchableOpacity>
  );
};

export default QuickActionItem;