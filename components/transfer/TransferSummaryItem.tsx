import { View, Text } from "react-native";

interface TransferSummaryItemProps {
  label: string;
  value: string | React.ReactNode; 
  labelClassName?: string;
  valueClassName?: string;
  containerClassName?: string;
  variant?: "default" | "highlight"; 
}

const TransferSummaryItem: React.FC<TransferSummaryItemProps> = ({
  label,
  value,
  labelClassName = "text-text-secondary text-sm",
  valueClassName = "text-text text-sm font-semibold text-right",
  containerClassName = "flex-row justify-between py-3 items-center", 
  variant = "default",
}) => {
  let finalValueClassName = valueClassName;
  if (variant === "highlight") {
    finalValueClassName = `${valueClassName} text-primary text-base`; // Ejemplo
  }

  return (
    <View
      className={`${containerClassName} ${
        variant === "default" ? "border-b border-border last:border-b-0" : ""
      }`}
    >
      <Text className={labelClassName}>{label}</Text>
      {typeof value === "string" ? (
        <Text
          className={finalValueClassName}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {value}
        </Text>
      ) : (
        value 
      )}
    </View>
  );
};

export default TransferSummaryItem;

/* Ejemplo de uso en ConfirmTransferScreen o TransferSuccessScreen:
import TransferSummaryItem from '../../components/transfer/TransferSummaryItem';

// Dentro de la sección de resumen:
<View className="bg-surface p-5 rounded-xl w-full shadow">
  <Text className="text-text text-lg font-semibold mb-1 text-center">
    Resumen de tu envío
  </Text>
  <TransferSummaryItem
    label="Total enviado"
    value={params.displayAmount || 'C$0.00'}
    variant="highlight" // Destacar el total
  />
  <TransferSummaryItem
    label="Al número de cuenta"
    value={params.accountNumber || 'N/A'}
  />
  <TransferSummaryItem
    label="Cuenta utilizada para el envío"
    value={params.sourceAccount || 'N/A'}
  />
  { params.date && params.time && (
    <TransferSummaryItem
      label="Fecha y hora"
      value={`${params.date}, ${params.time}`}
    />
  )}
</View>
*/
