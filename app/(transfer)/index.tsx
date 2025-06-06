import { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useFocusEffect } from "expo-router";
import Button from "../../components/common/Button";
import InputField from "../../components/common/InputField";
import { formatCurrency } from "@/utils/formatCurrency";

export default function TransferScreen() {
  const router = useRouter();
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const isFormFilled = accountNumber.length > 0 && amount.length > 0;

  const handleSend = () => {
    if (isFormFilled) {
      const filledAccountNumber = accountNumber || "130492890";
      const filledAmount = amount || "1000";

      router.push({
        pathname: "/(transfer)/confirm",
        params: {
          accountNumber: filledAccountNumber,
          amount: filledAmount,
          displayAmount: formatCurrency(filledAmount),
          sourceAccount: "0234567645",
        },
      });
    }
  };

  const fillExampleData = () => {
    setAccountNumber("130492890");
    setAmount("1000");
  };

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("dark-content");
      StatusBar.setBackgroundColor("#ffffff");
      StatusBar.setTranslucent(false);
    }, [])
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 p-5 justify-between">
        <View>
          <Text className="text-text text-xl font-semibold mb-6">
            ¿A quién le enviaras dinero hoy?
          </Text>

          <InputField
            label="Ingresa el número de cuenta"
            placeholder="N. de cuenta"
            value={accountNumber}
            onChangeText={setAccountNumber}
            keyboardType="numeric"
            icon={accountNumber ? "edit-2" : undefined}
            onIconPress={() => console.log("Edit account")}
          />

          <InputField
            label="¿Cuanto dinero le enviaras?"
            placeholder="C$500"
            value={amount ? `C$${amount}` : ""}
            onChangeText={(text) => setAmount(text.replace("C$", ""))}
            keyboardType="numeric"
            icon={amount ? "edit-2" : undefined}
            onIconPress={() => console.log("Edit amount")}
          />

          {!isFormFilled && (
            <TouchableOpacity
              onPress={fillExampleData}
              className="my-2 p-2 bg-accent/20 rounded-md"
            >
              <Text className="text-center text-accent">
                Simular datos (para demo)
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <Button
          title="Enviar"
          onPress={handleSend}
          disabled={!isFormFilled}
          className={!isFormFilled ? "bg-gray-300" : "bg-gray-300"}
          size="lg"
        />
      </View>
    </SafeAreaView>
  );
}
