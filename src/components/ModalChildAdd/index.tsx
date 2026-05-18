import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { Platform, Pressable, Text, View } from "react-native";

import { Button } from "../ui/Button";
import { CustomInput } from "../ui/TextInput";
import { styles } from "./styles";

type AddChildModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    birthDate: Date;
  }) => void;
};

export const AddChildModal = ({
  visible,
  onClose,
  onSubmit,
}: AddChildModalProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const datePickerSheetRef = useRef<BottomSheet>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());

  useEffect(() => {
    if (visible) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [visible]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
        onPress={onClose}
      />
    ),
    [onClose],
  );

  const renderDatePickerBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
        onPress={() => datePickerSheetRef.current?.close()}
      />
    ),
    [],
  );

  const handleSubmit = () => {
    onSubmit({ firstName, lastName, birthDate });
    setFirstName("");
    setLastName("");
    setBirthDate(new Date());
    onClose();
  };

  const openDatePicker = () => {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: birthDate,
        mode: "date",
        maximumDate: new Date(),
        onChange: (_, selectedDate) => {
          if (selectedDate) setBirthDate(selectedDate);
        },
      });
    } else {
      datePickerSheetRef.current?.expand();
    }
  };

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        enableDynamicSizing
        enablePanDownToClose
        onClose={onClose}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={styles.handle}
        backgroundStyle={styles.background}
      >
        <BottomSheetView style={styles.sheet}>
          <View style={styles.header}>
            <Text style={styles.title}>Добавить ребенка</Text>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Имя</Text>
            <CustomInput
              placeholder="Введите имя"
              placeholderTextColor="#B7A99A"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Фамилия</Text>
            <CustomInput
              placeholder="Введите фамилию"
              placeholderTextColor="#B7A99A"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Дата рождения</Text>

            <Pressable style={styles.input} onPress={openDatePicker}>
              <Text style={styles.dateText}>
                {birthDate.toLocaleDateString()}
              </Text>
            </Pressable>
          </View>

          <View style={styles.buttons}>
            <Button title="Добавить ребенка" onPress={handleSubmit} />
            <Button title="Отмена" variant="secondary" onPress={onClose} />
          </View>
        </BottomSheetView>
      </BottomSheet>

      {Platform.OS === "ios" && (
        <BottomSheet
          ref={datePickerSheetRef}
          index={-1}
          enableDynamicSizing
          enablePanDownToClose
          backdropComponent={renderDatePickerBackdrop}
          handleIndicatorStyle={styles.handle}
          backgroundStyle={styles.background}
        >
          <BottomSheetView style={{ paddingBottom: 34 }}>
            <DateTimePicker
              value={birthDate}
              mode="date"
              display="spinner"
              maximumDate={new Date()}
              themeVariant="light"
              onChange={(_, selectedDate) => {
                if (selectedDate) setBirthDate(selectedDate);
              }}
            />
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};
