import { Alert } from "react-native";
import * as Clipboard from "expo-clipboard";

export const sharedAccountDetails = (user: any, accounts: any) => {
  const message = `Hola👋, soy ${user.full_name} y mi número de cuenta es ${accounts.account_number}.`;
  Clipboard.setStringAsync(message);
  Alert.alert("Copiado", "Detalles de la cuenta copiados al portapapeles");
};
