import { Text, View } from "react-native";
import { styles } from "./styles";

export const PromoCard = () => {
  return (
    <View style={styles.promoCard}>
      <Text style={styles.promoTopText}>ТОЛЬКО{"\n"}СЕГОДНЯ</Text>

      <Text style={styles.promoTitle}>
        Скидка 30%{"\n"}
        на все творческие{"\n"}
        мероприятия
      </Text>

      <View style={styles.promoShape} />
    </View>
  );
};
