import { View, Text, TouchableOpacity } from "react-native";
import SvgIcon from '@/components/common/SvgIcon';

interface QuickActionItemProps {
  iconName: string; 
  label: string;
  onPress?: () => void;
  className?: string; 
  iconContainerClassName?: string;
  labelClassName?: string;
}

const QuickActionItem: React.FC<QuickActionItemProps> = ({
  iconName,
  label,
  onPress,
  className = "items-center flex-1 p-2",
  iconContainerClassName,
  labelClassName = "text-text text-center font-poppins-regular",
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