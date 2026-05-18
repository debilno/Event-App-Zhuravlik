import { router } from "expo-router";
import { useEffect } from "react";

import { getToken } from "@/src/storage/auth";

export default function Index() {
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = await getToken();

    if (token) {
      router.replace("/home");
    } else {
      router.replace("/login");
    }
  };

  return null;
}
