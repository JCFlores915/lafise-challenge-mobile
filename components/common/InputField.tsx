// components/common/InputField.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
  ViewStyle,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons"; // O tu librería de iconos preferida
import { cssInterop } from "react-native-css-interop";

// Asegura que TextInput pueda ser estilizado con className
cssInterop(TextInput, { className: "style" });

interface InputFieldProps extends TextInputProps {
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  secureTextEntryToggle?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  containerClassName = "",
  inputClassName = "",
  labelClassName = "",
  error,
  leftIcon,
  rightIcon,
  secureTextEntry: initialSecureTextEntry,
  secureTextEntryToggle,
  ...textInputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(
    initialSecureTextEntry
  );

  const baseInputContainerClasses =
    "flex-row items-center bg-white border rounded-lg shadow-sm px-3.5";
  const focusClasses = "border-primary ring-1 ring-primary";
  const errorClasses = "border-error ring-1 ring-error";
  const defaultBorderClass = "border-border";

  let currentBorderClass = defaultBorderClass;
  if (error) {
    currentBorderClass = errorClasses;
  } else if (isFocused) {
    currentBorderClass = focusClasses;
  }

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View className={`mb-4 ${containerClassName}`}>
      {label && (
        <Text className={`text-sm text-text-secondary mb-1 ${labelClassName}`}>
          {label}
        </Text>
      )}
      <View
        className={`${baseInputContainerClasses} ${currentBorderClass} h-12`}
      >
        {leftIcon && <View className="mr-2.5">{leftIcon}</View>}
        <TextInput
          className={`flex-1 text-base text-text placeholder:text-gray-400 ${inputClassName}`}
          placeholderTextColor="#9CA3AF"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secureTextEntry}
          {...textInputProps}
        />
        {secureTextEntryToggle && (
          <TouchableOpacity onPress={toggleSecureEntry} className="p-2">
            <Ionicons
              name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#6B7280"
            />
          </TouchableOpacity>
        )}
        {rightIcon && !secureTextEntryToggle && (
          <View className="ml-2.5">{rightIcon}</View>
        )}
      </View>
      {error && <Text className="text-xs text-error mt-1">{error}</Text>}
    </View>
  );
};

export default InputField;
