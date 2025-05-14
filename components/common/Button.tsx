import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  textClassName?: string;
  // style?: ViewStyle; // Si se necesita pasar estilo objeto
  // textStyle?: TextStyle; // Si se necesita pasar estilo objeto
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  textClassName = "",
}) => {
  const baseStyle =
    "flex-row items-center justify-center rounded-full shadow-sm active:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const disabledStyle = "cursor-not-allowed bg-[#EFF2F5]";
  const disabledTextStyle = "text-[#CACFD8]";
  let variantClasses = "";
  let textVariantClasses = "";
  let sizeClasses = "";
  let textSizeClasses = "";

  // Tamaños
  switch (size) {
    case "sm":
      sizeClasses = "px-3 py-1.5";
      textSizeClasses = "text-xs";
      break;
    case "md":
      sizeClasses = "px-5 py-3";
      textSizeClasses = "text-sm font-medium";
      break;
    case "lg":
      sizeClasses = "px-6 py-4";
      textSizeClasses = "text-lg font-bold";
      break;
  }

  // Variantes
  switch (variant) {
    case "primary":
      variantClasses =
        "bg-primary border border-transparent hover:bg-primary-dark focus:ring-primary";
      textVariantClasses = "text-white";
      break;
    case "secondary":
      variantClasses =
        "bg-accent border border-transparent hover:bg-accent/80 focus:ring-accent";
      textVariantClasses = "text-white";
      break;
    case "outline":
      variantClasses =
        "bg-transparent border border-primary hover:bg-primary/10 focus:ring-primary";
      textVariantClasses = "text-primary";
      break;
    case "ghost":
      variantClasses = "bg-transparent hover:bg-gray-100 focus:ring-primary";
      textVariantClasses = "text-primary";
      break;
  }

  const iconColor =
    variant === "primary" || variant === "secondary" ? "white" : "#006A4E";

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${baseStyle} ${sizeClasses} ${
        disabled ? disabledStyle : variantClasses
      } ${className}`}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          size={size === "sm" ? "small" : "small"}
          color={iconColor}
        />
      ) : (
        <>
          {leftIcon && <Text className="mr-2">{leftIcon}</Text>}
          <Text
            className={`${textSizeClasses} ${textVariantClasses} ${textClassName} ${
              disabled ? disabledTextStyle : ""
            }`}
          >
            {title}
          </Text>
          {rightIcon && <Text className="ml-2">{rightIcon}</Text>}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
