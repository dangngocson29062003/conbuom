import axios from "axios";
import { WebView } from "react-native-webview";
export async function payment() {
  const response = await axios.get(
    "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=1806000&vnp_Command=pay&vnp_CreateDate=20210801153333&vnp_CurrCode=VND&vnp_IpAddr=127.0.0.1&vnp_Locale=vn&vnp_OrderInfo=Thanh+toan+don+hang+%3A5&vnp_OrderType=other&vnp_ReturnUrl=https%3A%2F%2Fdomainmerchant.vn%2FReturnUrl&vnp_TmnCode=DEMOV210&vnp_ExpireDate=20231118012000&vnp_TxnRef=5&vnp_Version=2.1.0"
  );
  console.log(response);
}
