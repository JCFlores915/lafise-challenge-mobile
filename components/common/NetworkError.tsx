import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import SvgIcon from "./SvgIcon";
import { IconSvg } from "@/assets/images/svg";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "./Button";
const NetworkError: React.FC<{ onRetry: () => void }> = ({ onRetry }) => {
  return (
    <View className="flex-1 justify-center items-center bg-primary p-5">
      <SvgIcon
        xml={IconSvg.logo_lafise}
        width={80}
        height={80}
        className="mb-5"
      />
      <MaterialIcons name="wifi-off" size={40} color="#ffff" className="mb-5" />
      <Text className="text-lg font-bold text-white mb-2 text-center">
        ¡Sin conexión a Internet!
      </Text>
      <Text className="text-base text-white text-center mb-5">
        Algo salió mal. Por favor, verifica tu conexión e intenta nuevamente.
      </Text>
      <Button
        variant="primary"
        title="Reintentar"
        onPress={onRetry}
        textClassName="text-base font-bold"
        className="bg-blue-500"
      />
    </View>
  );
};

export default NetworkError;
