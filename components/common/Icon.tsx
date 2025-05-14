
import {
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { TextProps } from "react-native";
type IconFamily =
  | "MaterialCommunityIcons"
  | "Ionicons"
  | "Feather"
  | "FontAwesome"
  | "AntDesign";

interface IconProps {
  name: any;
  size?: number;
  color?: string;
  family?: IconFamily;
  className?: TextProps["className"];
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  family = "MaterialCommunityIcons",
  className = "text-text",
}) => {
  const iconColor = color;

  switch (family) {
    case "Ionicons":
      return (
        <Ionicons
          name={name}
          size={size}
          color={iconColor}
          className={className}
        />
      );
    case "Feather":
      return (
        <Feather
          name={name}
          size={size}
          color={iconColor}
          className={className}
        />
      );
    case "FontAwesome":
      return (
        <FontAwesome
          name={name}
          size={size}
          color={iconColor}
          className={className}
        />
      );
    case "AntDesign":
      return (
        <AntDesign
          name={name}
          size={size}
          color={iconColor}
          className={className}
        />
      );
    case "MaterialCommunityIcons":
    default:
      return (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={iconColor}
          className={className}
        />
      );
  }
};

export default Icon;

