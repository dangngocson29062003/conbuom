import { Image } from "react-native";
import SearchScreen from "../screen/SearchScreen";
import SeatScreen from "../screen/SeatScreen";
import FavoritesScreen from "../screen/FavoritesScreen";
import IconButton from "..//components/IconButton";
import BillScreen from "../screen/BillScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import MovieDetailScreen from "../screen/MovieDetailScreen";
import Login from "../screen/LoginScreen";
import BottomTabs from "./BottomNavigation";
import React from "react";
import Signup from "../screen/SignUpScreen";
import { useTheme } from "../store/context/ThemeContext";
import Payment from "../screen/Payment";
import OrderHistory from "../screen/OrderHistory";
import HistoryDetail from "../screen/HistoryDetail";
import ScanQRScreen from "../screen/ScanQRScreen";
import ForgetPassword from "../screen/ForgetPassword";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const { dark, colors } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerTransparent: true,
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerTitle: () => {
              return (
                <Image
                  source={
                    dark
                      ? require("../assets/images/logo.png")
                      : require("../assets/images/logolight.png")
                  }
                  style={{ position: "absolute" }}
                ></Image>
              );
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <IconButton
                  icon="person-circle"
                  color={colors.text}
                  size={32}
                  onPress={() => navigation.navigate("User")}
                />
              );
            },
            headerRight: () => {
              const navigation = useNavigation();
              return (
                <IconButton
                  icon={"search"}
                  color={colors.text}
                  size={32}
                  onPress={() => navigation.navigate("SearchScreen")}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailScreen}
          options={{
            headerTransparent: true,
            headerTintColor: colors.text,
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerTransparent: true,
            title: "Search",
            headerBackTitleVisible: false,
            headerTintColor: colors.text,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            headerTransparent: true,
            title: "Danh sách yêu thích",
            headerBackTitleVisible: false,
            headerTintColor: colors.text,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="SeatScreen"
          component={SeatScreen}
          options={{
            headerTransparent: true,
            title: "Chọn ghế",
            headerTintColor: colors.text,
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="BillScreen"
          component={BillScreen}
          options={{
            headerTransparent: true,
            headerTitle: () => {
              const navigation = useNavigation();
              return (
                <IconButton
                  icon={"md-chevron-down"}
                  color={colors.text}
                  size={32}
                  onPress={() => navigation.goBack()}
                />
              );
            },
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTransparent: true,
            title: "Đăng Nhập",
            headerTintColor: colors.text,
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerTransparent: true,
            title: "Đăng kí",
            headerTintColor: colors.text,
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            headerTransparent: true,
            title: "Thanh toán",
            headerBackTitleVisible: false,
            headerTintColor: colors.text,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="ScanQR"
          component={ScanQRScreen}
          options={{
            headerTransparent: true,
            headerTintColor: colors.text,
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{
            headerTransparent: true,
            title: "Lịch sử đơn hàng",
            headerBackTitleVisible: false,
            headerTintColor: colors.text,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="HistoryDetail"
          component={HistoryDetail}
          options={{
            headerTransparent: true,
            title: "Thông tin vé xem phim",
            headerBackTitleVisible: false,
            headerTintColor: colors.text,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            headerTransparent: true,
            title: "Quên mật khẩu",
            headerBackTitleVisible: false,
            headerTintColor: colors.text,
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
