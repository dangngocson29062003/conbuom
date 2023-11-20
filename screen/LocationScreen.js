import * as React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from "react-native";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
const LocationScreen = () => {
  const [pin, setPin] = React.useState({
    latitude: 10.77791,
    longitude: 106.6811,
  });
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={pin} showsUserLocation={true}>
        <Marker
          coordinate={{ latitude: 10.77791, longitude: 106.6811 }}
          image={require("../assets/images/placeholder.png")}
          title="PEEKABOO"
          description=" 8 Đường 3 Tháng 2, Phường 12, Quận 10, Thành phố Hồ Chí Minh"
        ></Marker>
      </MapView>
    </View>
  );
};
export default LocationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
