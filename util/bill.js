import axios from "axios";
const BACKEND_URL = "https://moviebooking-dd8f1-default-rtdb.firebaseio.com/";
export async function storeBill(data) {
  const response = await axios.post(BACKEND_URL + `/bills.json`, data);
}
export async function getBill(email) {
  const response = await axios.get(BACKEND_URL + `/bills.json`);
  const ticket = [];
  for (const key in response.data) {
    if (response.data[key].email === email) {
      const movieObj = {
        billID: response.data[key].billID,
        movieID: response.data[key].movieID,
        movieDetail: response.data[key].movieDetail,
        moviePoster: response.data[key].moviePoster,
        date: response.data[key].date,
        time: response.data[key].time,
        numberOfSeats: response.data[key].numberOfSeats,
        selectedSeats: response.data[key].selectedSeats,
        email: response.data[key].email,
        displayName: response.data[key].displayName,
        total: response.data[key].total,
        day: response.data[key].day,
        date: response.data[key].date,
        time: response.data[key].time,
        room: response.data[key].room,
        createAt: response.data[key].createAt,
        status: response.data[key].status,
      };
      ticket.push(movieObj);
    }
  }
  return ticket;
}
export async function updateStatus(id) {
  const response = await axios.get(BACKEND_URL + `/bills.json`);
  for (const key in response.data) {
    if (response.data[key].billID == id) {
      const movieObj = {
        billID: response.data[key].billID,
        movieID: response.data[key].movieID,
        movieDetail: response.data[key].movieDetail,
        moviePoster: response.data[key].moviePoster,
        movieBackdrop: response.data[key].movieBackdrop,
        date: response.data[key].date,
        time: response.data[key].time,
        numberOfSeats: response.data[key].numberOfSeats,
        selectedSeats: response.data[key].selectedSeats,
        email: response.data[key].email,
        displayName: response.data[key].displayName,
        total: response.data[key].total,
        day: response.data[key].day,
        date: response.data[key].date,
        time: response.data[key].time,
        createAt: response.data[key].createAt,
        status: response.data[key].status,
      };

      return await axios.put(BACKEND_URL + `/bills/${key}.json`, {
        ...movieObj,
        status: true,
      });
    }
  }
}
