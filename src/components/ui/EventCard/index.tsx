import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type EventCardProps = {
  title: string;
  age: string;
  image: any;
  date: string;
};

export const EventCard = ({ title, age, image, date }: EventCardProps) => {
  return (
    <TouchableOpacity style={styles.eventCard}>
      <Image source={image} style={styles.eventImage} resizeMode="cover" />

      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventDate}>{date}</Text>
        <View style={styles.ageBadge}>
          <Text style={styles.ageBadgeText}>{age}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
