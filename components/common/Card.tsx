import {
  View,
  Text,
  ViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface CardProps extends ViewProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
  onPress?: TouchableOpacityProps["onPress"];
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  className = "",
  titleClassName = "",
  bodyClassName = "",
  onPress,
  ...rest
}) => {
  const cardBaseClasses = "bg-white rounded-xl shadow-md overflow-hidden";

  const content = (
    <>
      {title && (
        <View className={`px-5 py-4 border-b border-border ${titleClassName}`}>
          <Text className="text-lg font-semibold text-text">{title}</Text>
        </View>
      )}
      <View className={`p-5 ${bodyClassName}`}>{children}</View>
    </>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        className={`${cardBaseClasses} ${className}`}
        onPress={onPress}
        activeOpacity={0.7}
        {...(rest as TouchableOpacityProps)}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return (
    <View className={`${cardBaseClasses} ${className}`} {...rest}>
      {content}
    </View>
  );
};

export default Card;
