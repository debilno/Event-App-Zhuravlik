import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Child, CreateChildDto, User } from "../types/auth";

const BASE_URL = "http://192.168.0.10:8000/api/v1";

export const getMe = async () => {
  const token = await AsyncStorage.getItem("accessToken");

  const response = await axios.get<User>(
    "http://192.168.0.10:8000/api/v1/users/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": "12",
      },
    },
  );

  return response.data;
};
export { Child, User };

export const logout = async () => {
  const token = await AsyncStorage.getItem("accessToken");

  const response = await axios.post(
    `${BASE_URL}/auth/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": "12",
      },
    },
  );

  return response.data;
};

export const getChildren = async () => {
  const token = await AsyncStorage.getItem("accessToken");

  const response = await axios.get<Child[]>(`${BASE_URL}/users/me/children`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "x-api-key": "12",
    },
  });

  return response.data;
};

export const createChild = async (data: CreateChildDto) => {
  const token = await AsyncStorage.getItem("accessToken");

  const response = await axios.post(`${BASE_URL}/users/me/children`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "x-api-key": "12",
    },
  });

  return response.data;
};
