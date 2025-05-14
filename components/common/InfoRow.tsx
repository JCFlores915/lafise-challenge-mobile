import { View, Text } from "react-native";

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View className="py-4 border-b border-border">
    <Text className="text-[#0D1424] text-sm mb-1 font-semibold">{label}</Text>
    <Text className="text-text-secondary text-base font-semibold">{value}</Text>
  </View>
);

export default InfoRow;
