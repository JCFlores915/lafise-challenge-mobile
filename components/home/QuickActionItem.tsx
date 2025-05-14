// components/home/QuickActionItem.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "../common/Icon"; 
import SvgIcon from '@/components/common/SvgIcon';

interface QuickActionItemProps {
  iconName: string; 
  iconFamily?: string;
  label: string;
  onPress?: () => void;
  className?: string; 
  iconContainerClassName?: string;
  labelClassName?: string;
}

const QuickActionItem: React.FC<QuickActionItemProps> = ({
  iconName,
  iconFamily,
  label,
  onPress,
  className = "items-center flex-1 p-2",
  iconContainerClassName,
  labelClassName = "text-text text-center",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={className}
      activeOpacity={0.7}
    >
      <View className={iconContainerClassName}>
        <SvgIcon 
          xml={iconName}
          
        />
      </View>
      <Text className={labelClassName}>{label}</Text>
    </TouchableOpacity>
  );
};

export default QuickActionItem;