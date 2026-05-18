import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createChild, getChildren, getMe } from "../../api/user";

import { AddChildModal } from "@/src/components/ModalChildAdd";
import { Child, User } from "../../types/auth";
import { CHILD_COLORS, styles } from "./styles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const getInitial = (name: string) => name?.charAt(0)?.toUpperCase() ?? "?";

export const ProfileScreen = () => {
  const [user, setUser] = useState<User | null>(null);
  const [children, setChildren] = useState<Child[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [addChildVisible, setAddChildVisible] = useState(false);
  const [addChildLoading, setAddChildLoading] = useState(false);

  const fetchData = async () => {
    try {
      const [userData, childrenData] = await Promise.all([
        getMe(),
        getChildren(),
      ]);
      setUser(userData);
      setChildren(childrenData);
    } catch (error) {
      console.error("Failed to fetch profile data:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  const handleAddChild = async (data: {
    firstName: string;
    lastName: string;
    birthDate: Date;
  }) => {
    setAddChildLoading(true);
    try {
      await createChild({
        firstName: data.firstName,
        secondName: data.lastName,
        birthDate: data.birthDate.toISOString().split("T")[0],
      });
      await fetchData();
    } catch (error) {
      console.error("Failed to create child:", error);
    } finally {
      setAddChildLoading(false);
    }
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("refreshToken");

    router.replace("/(auth)/login");
  };
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#8B5E3C" />
      </View>
    );
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#8B5E3C"
          />
        }
      >
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.avatarLarge}>
            <Text style={styles.avatarLargeText}>
              {getInitial(user?.firstName ?? "")}
            </Text>
          </View>

          <View style={styles.headerInfo}>
            <Text style={styles.headerName}>
              {user?.firstName} {user?.secondName}
            </Text>
            <Text style={styles.headerEmail}>{user?.email}</Text>
          </View>
        </View>

        {/* CHILDREN */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Дети</Text>

          <View style={styles.card}>
            {children.map((child, index) => {
              const color = CHILD_COLORS[index % CHILD_COLORS.length];
              return (
                <TouchableOpacity
                  key={child.id}
                  style={[
                    styles.childRow,
                    index < children.length - 1 && styles.rowBorder,
                  ]}
                  activeOpacity={0.7}
                >
                  <View
                    style={[styles.childAvatar, { backgroundColor: color.bg }]}
                  >
                    <Text
                      style={[styles.childAvatarText, { color: color.text }]}
                    >
                      {getInitial(child.firstName)}
                    </Text>
                  </View>

                  <View style={styles.childInfo}>
                    <Text style={styles.childName}>
                      {child.firstName} {child.lastName}
                    </Text>
                  </View>

                  <Text style={styles.rowArrow}>›</Text>
                </TouchableOpacity>
              );
            })}

            <TouchableOpacity
              style={styles.addChildRow}
              activeOpacity={0.7}
              onPress={() => setAddChildVisible(true)}
              disabled={addChildLoading}
            >
              <View style={styles.addIcon}>
                {addChildLoading ? (
                  <ActivityIndicator size="small" color="#9a8575" />
                ) : (
                  <Text style={styles.addIconText}>+</Text>
                )}
              </View>
              <Text style={styles.addLabel}>Добавить ребёнка</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ACCOUNT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Аккаунт</Text>

          <View style={styles.card}>
            {[
              { icon: "👤", label: "Личные данные", color: "#F5EFE6" },
              { icon: "🔔", label: "Уведомления", color: "#E6F1FB" },
              { icon: "🔒", label: "Безопасность", color: "#EAF3DE" },
            ].map((item, index, arr) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.cardRow,
                  index < arr.length - 1 && styles.rowBorder,
                ]}
                activeOpacity={0.7}
              >
                <View style={[styles.rowIcon, { backgroundColor: item.color }]}>
                  <Text style={styles.rowIconEmoji}>{item.icon}</Text>
                </View>
                <Text style={styles.rowLabel}>{item.label}</Text>
                <Text style={styles.rowArrow}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* OTHER */}
        <View style={styles.section}>
          <View style={styles.card}>
            {[
              { icon: "❓", label: "Помощь и поддержка", color: "#F5EFE6" },
              { icon: "📄", label: "Условия использования", color: "#F5EFE6" },
            ].map((item, index, arr) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.cardRow,
                  index < arr.length - 1 && styles.rowBorder,
                ]}
                activeOpacity={0.7}
              >
                <View style={[styles.rowIcon, { backgroundColor: item.color }]}>
                  <Text style={styles.rowIconEmoji}>{item.icon}</Text>
                </View>
                <Text style={styles.rowLabel}>{item.label}</Text>
                <Text style={styles.rowArrow}>›</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* LOGOUT */}
        <TouchableOpacity
          style={styles.logoutBtn}
          activeOpacity={0.7}
          onPress={handleLogout}
        >
          <Text style={styles.logoutText}>Выйти из аккаунта</Text>
        </TouchableOpacity>
      </ScrollView>

      <AddChildModal
        visible={addChildVisible}
        onClose={() => setAddChildVisible(false)}
        onSubmit={handleAddChild}
      />
    </>
  );
};
