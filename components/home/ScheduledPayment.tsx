import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "../common/Icon";
import SvgIcon from "../common/SvgIcon";
import { IconSvg } from "@/assets/images/svg";
import { formatCurrency } from "@/utils/formatCurrency";

interface ScheduledPaymentProps {
  title: string;
  subtitle: string;
  amount: string | number;
  transactionType?: string;
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
  transactionType,
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
          <SvgIcon xml={IconSvg.arrow_down} />
        </View>
        <View>
          <Text className="text-text font-bold">{title}</Text>
          <Text className="text-text-secondary text-sm">{subtitle}</Text>
        </View>
      </View>
      <Text
        className={`${
          transactionType === "Credit" ? "text-primary" : "text-error"
        }  
      font-bold text-base`}
      >
        {formatCurrency(amount)}
      </Text>
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
