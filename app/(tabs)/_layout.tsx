// app/(tabs)/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"; 
import SvgIcon from "@/components/common/SvgIcon";
import { IconSvg } from "@/assets/images/svg";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#006A4E", 
        tabBarInactiveTintColor: "#6B7280",
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 5,
          fontFamily: "Poppins_400Regular",
        },
        tabBarStyle: {
          height: 80,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        headerShown: false, 
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
              <SvgIcon
                xml={IconSvg.home}
                width={size}
                height={size}
                borderColor={color}
              />
          ),
        }}
      />
      <Tabs.Screen
        name="operations"
        options={{
          title: "Operaciones",
          tabBarIcon: ({ color, size }) => (
            <SvgIcon
              xml={IconSvg.operations}
              width={size}
              height={size}
              borderColor={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Productos",
          tabBarIcon: ({ color, size }) => (
            <SvgIcon
              xml={IconSvg.products}
              width={size}
              height={size}
              borderColor={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
