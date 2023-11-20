import { createContext, useState } from "react";

export const TicketContext = createContext({
  ticket: {
    billID: 0,
    movieID: 0,
    movieDetail: "",
    moviePoster: "",
    movieBackdrop: "",
    date: "",
    time: "",
    numberOfSeats: "",
    selectedSeats: [],
    email: "",
    displayName: "",
    total: "",
    day: "",
    date: "",
    time: "",
    room: 0,
    createAt: "",
    status: false,
  },
  addTicket: (data) => {},
  updateTicket: (data) => {},
  delete: () => {},
});

function TicketContextProvider({ children }) {
  const [tickets, setTickets] = useState([]);
  // const [status, setStatus] = useState(false);
  function addTicket(data) {
    setTickets((prev) => [...prev, data]);
  }

  function deleteTicket() {
    setTickets([]);
  }
  const value = {
    ticket: tickets,
    addTicket: addTicket,
    delete: deleteTicket,
  };

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
}

export default TicketContextProvider;
