"use client";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Animated, View } from "react-native";
import { useEffect, useRef, useState } from "react";

import Home from "../../views/pages/Home";
import Hydration from "../../views/pages/Hydration";
import Food from "../../views/pages/Food";
import Profile from "../../views/pages/Profile/Profile";
import Training from "../../views/pages/Training";

import { styles } from "./style";

const Tab = createBottomTabNavigator();

function AnimatedIcon({ name, isActive }) {
  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: isActive ? -12 : 0,
        friction: 5,
        tension: 150,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: isActive ? 1.3 : 1,
        friction: 4,
        tension: 180,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isActive]);

  return (
    <Animated.View
      style={[
        styles.tabBarIcon,
        {
          transform: [{ translateY }, { scale }],
        },
      ]}
    >
      <View
        style={isActive ? styles.tabBarBorderIconActive : styles.tabBarIcon}
      >
        <Ionicons
          name={name}
          size={24}
          style={isActive ? styles.tabBarIconActive : styles.tabBarIcon}
        />
      </View>
    </Animated.View>
  );
}

export default function Routes() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Hydration"
        component={Hydration}
        listeners={{
          tabPress: () => setActiveTab("Hydration"),
        }}
        options={{
          tabBarIcon: () => (
            <AnimatedIcon name="water" isActive={activeTab === "Hydration"} />
          ),
        }}
      />

      <Tab.Screen
        name="Food"
        component={Food}
        listeners={{
          tabPress: () => setActiveTab("Food"),
        }}
        options={{
          tabBarIcon: () => (
            <AnimatedIcon name="restaurant" isActive={activeTab === "Food"} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        listeners={{
          tabPress: () => setActiveTab("Home"),
        }}
        options={{
          tabBarIcon: () => (
            <AnimatedIcon name="home" isActive={activeTab === "Home"} />
          ),
        }}
      />

      <Tab.Screen
        name="Training"
        component={Training}
        listeners={{
          tabPress: () => setActiveTab("Training"),
        }}
        options={{
          tabBarIcon: () => (
            <AnimatedIcon name="barbell" isActive={activeTab === "Training"} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        listeners={{
          tabPress: () => setActiveTab("Profile"),
        }}
        options={{
          tabBarIcon: () => (
            <AnimatedIcon name="person" isActive={activeTab === "Profile"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
