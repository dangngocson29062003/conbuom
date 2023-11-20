import WebView from "react-native-webview";

const html = ``;
function Payment({ route, navigation }) {
  return <WebView originWhitelist={["*"]} source={{ html: html }} />;
}
export default Payment;
