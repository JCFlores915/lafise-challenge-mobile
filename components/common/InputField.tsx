import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { cssInterop } from "react-native-css-interop";
import { Feather } from "@expo/vector-icons";
import SvgIcon from "./SvgIcon";
import { IconSvg } from "@/assets/images/svg";

cssInterop(TextInput, { className: "style" });

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  icon,
  onIconPress,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: any;
  icon?: any;
  onIconPress?: () => void;
}) => (
  <View className="mb-6">
    <Text className="text-[#181B25] text-lg mb-1 font-semibold">{label}</Text>
    <View className="flex-row items-center bg-white p-4 rounded-lg border border-[#CACFD8] shadow-sm">
      <TextInput
        className="flex-1 text-[#181B25] text-base font-semibold text-"
        placeholder={placeholder}
        placeholderTextColor="#717784"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {icon && onIconPress && (
        <TouchableOpacity onPress={onIconPress} className="p-1">
          <SvgIcon
            xml={IconSvg.edit_pencil}
            width={24}
            height={24}
            // className="text-[#181B25]"
          />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default InputField;
