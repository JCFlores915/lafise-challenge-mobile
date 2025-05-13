// app/(tabs)/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"; 

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#006A4E", 
        tabBarInactiveTintColor: "#6B7280",
        tabBarStyle: {
        },
        headerShown: false, 
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="operations"
        options={{
          title: "Operaciones",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="swap-horizontal-bold"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Productos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="credit-card-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
