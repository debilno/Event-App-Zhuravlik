import React, { useEffect, useState } from "react";

import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { CategoryChip } from "@/src/components/ui/CategoryChip";
import { EventCard } from "@/src/components/ui/EventCard";
import { UserChip } from "@/src/components/ui/UserChip";

import { styles } from "./styles";

import { Child, createChild, getChildren, getMe, User } from "@/src/api/user";
import { AddChildModal } from "@/src/components/ModalChildAdd";

export const HomeScreen = () => {
  const [user, setUser] = useState<User | null>(null);

  const [selectedChildId, setSelectedChildId] = useState<string | null>(null);

  const [children, setChildren] = useState<Child[]>([]);

  // MODAL
  const [isAddChildModalVisible, setIsAddChildModalVisible] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [userData, childrenData] = await Promise.all([
        getMe(),
        getChildren(),
      ]);

      setUser(userData);

      setChildren(childrenData);

      if (childrenData.length > 0) {
        setSelectedChildId(childrenData[0].id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ADD CHILD
  const handleAddChild = async (data: {
    firstName: string;
    lastName: string;
    birthDate: Date;
  }) => {
    try {
      await createChild({
        firstName: data.firstName,
        secondName: data.lastName,
        birthDate: data.birthDate.toISOString(),
      });

      // обновляем список детей
      const updatedChildren = await getChildren();

      setChildren(updatedChildren);

      // выбираем последнего добавленного
      const newChild = updatedChildren[updatedChildren.length - 1];

      if (newChild) {
        setSelectedChildId(newChild.id);
      }

      setIsAddChildModalVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.mainAvatar}>
            <Text style={styles.mainAvatarText}>
              {user?.firstName?.[0] || "A"}
            </Text>
          </View>

          <Text style={styles.greeting}>
            Доброе утро, {user?.firstName || "Пользователь"}!
          </Text>
        </View>

        {/* Children */}
        <View style={styles.usersRow}>
          <FlatList
            data={children}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }) => (
              <UserChip
                name={item.firstName}
                initial={item.firstName[0]}
                active={selectedChildId === item.id}
                onPress={() => setSelectedChildId(item.id)}
              />
            )}
            ListFooterComponent={
              <TouchableOpacity
                style={styles.addChildButton}
                onPress={() => setIsAddChildModalVisible(true)}
              >
                <Text style={styles.addChildText}>+ Ребенок</Text>
              </TouchableOpacity>
            }
          />
        </View>

        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CategoryChip title="Все" active />

            <CategoryChip title="Творчество" />
            <CategoryChip title="Спорт" />
            <CategoryChip title="Наука" />
          </ScrollView>
        </View>

        <View style={styles.divider} />

        {/* Events */}
        <Text style={styles.sectionTitle}>Ближайшие</Text>

        <EventCard
          title="Игровой английский"
          age="3-7 лет"
          image={require("../../../assets/images/child-image.png")}
          date="25 мая 10:00"
        />
      </ScrollView>

      {/* MODAL */}
      <AddChildModal
        visible={isAddChildModalVisible}
        onClose={() => setIsAddChildModalVisible(false)}
        onSubmit={handleAddChild}
      />
    </View>
  );
};
