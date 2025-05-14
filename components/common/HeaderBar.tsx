
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface HeaderBarProps {
  title: string;
  canGoBack?: boolean;
  onBackPress?: () => void;
  rightContent?: React.ReactNode;
  bgColorClassName?: string;
  textColorClassName?: string;
  className?: string;
  noSafeArea?: boolean;
  statusBarHidden?: boolean;
  statusBarStyle?: "light-content" | "dark-content" | "default";
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  title,
  canGoBack = false,
  onBackPress,
  rightContent,
  bgColorClassName = "bg-primary",
  textColorClassName = "text-white",
  className = "",
  noSafeArea = false,
  statusBarHidden = false,
  statusBarStyle = "light-content",
}) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else if (router.canGoBack()) {
      router.back();
    }
  };

  const paddingTop = noSafeArea
    ? 0
    : Platform.OS === "android"
    ? StatusBar.currentHeight
    : insets.top;

  return (
    <View
      className={`${bgColorClassName} ${className}`}
      style={{ paddingTop: paddingTop }}
    >
      <StatusBar
        hidden={statusBarHidden}
        barStyle={statusBarStyle}
        backgroundColor={
          bgColorClassName.includes("bg-primary") ? "#006A4E" : "white"
        }
      />
      <View className="flex-row items-center justify-between h-14 px-4">
        <View className="flex-1 flex-row items-center">
          {canGoBack ? (
            <TouchableOpacity
              onPress={handleBackPress}
              className="p-2 -ml-2 mr-2"
            >
              <Ionicons
                name="arrow-back"
                size={24}
                className={textColorClassName}
              />
            </TouchableOpacity>
          ) : (
            <View className="w-10" />
          )}
          <Text
            className={`${textColorClassName} text-lg font-semibold`}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>

        <View className="flex-shrink-0 ml-2">
          {rightContent ? rightContent : <View className="w-10" />}
        </View>
      </View>
    </View>
  );
};

export default HeaderBar;
