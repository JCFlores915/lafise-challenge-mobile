import { IconSvg } from "@/assets/images/svg";
import { router } from "expo-router";
    
export const QuickOperations = [
    {
        iconName: IconSvg.transaction,
        label: "Transferir Dinero",
        onPress: () => router.push("/(transfer)"),
        iconContainerClassName: "bg-[#E6F3F0] p-4 rounded-xl mb-2",
    },
    {
        iconName: IconSvg.payment_services,
        label: "Pagar Servicios",
        onPress: () => {},
        iconContainerClassName: "bg-[#FFF3E9] p-4 rounded-xl mb-2",
    },
    {
        iconName: IconSvg.phone_recharge,
        label: "Recargar Celular",
        onPress: () => {},
        iconContainerClassName: "bg-[#E6F7FD] p-4 rounded-xl mb-2",
    },
    {
        iconName: IconSvg.whithdrawal,
        label: "Retiro sin tarjeta",
        onPress: () => {},
        iconContainerClassName: "bg-[#EAE6F3] p-4 rounded-xl mb-2",
    },
]