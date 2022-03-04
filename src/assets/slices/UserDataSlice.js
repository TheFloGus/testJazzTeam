import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      userLogin: "admin",
      userName: "Евгений",
      userSurname: "Бреднев",
      userPassword: "12345678",
      userEvents: [
        {
          title: "Поход к стоматологу",
          start: "2022-02-26",
        },
        {
          title: "Встреча с клиентами",
          start: "2022-07-28",
        },
        {
          title: "Купить удобрения",
          start: "2022-03-27",
        },
      ],
    },
    {
      userLogin: "hero",
      userName: "Евгений",
      userSurname: "Бреднев",
      userPassword: "87654321",
      userEvents: [
        {
          title: "Поход к стоматологу",
          start: "2022-02-26",
        },
        {
          title: "Встреча с клиентами",
          start: "2022-02-28",
        },
        {
          title: "Купить удобрения",
          start: "2022-02-27",
        },
      ],
    },
  ],
  isLoggedIn: false,
  currentUser: {},
};

const userDataSlice = createSlice({
  name: "User Data",
  initialState,
  reducers: {
    toggleLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    unsetCurrentUser: (state) => {
      state.currentUser = {};
    },
    sortEvents: (state) => {
      state.currentUser.userEvents.sort(
        (a, b) => new Date(a.start) - new Date(b.start)
      );
      let index = state.users.findIndex(
        (user) => state.currentUser.userLogin === user.userLogin
      );
      state.users[index].userEvents.sort(
        (a, b) => new Date(a.start) - new Date(b.start)
      );
    },
    addEvent: (state, action) => {
      state.currentUser.userEvents.push(action.payload);
      let index = state.users.findIndex(
        (user) => state.currentUser.userLogin === user.userLogin
      );
      state.users[index].userEvents.push(action.payload);
    },
    removeEvent: (state, action) => {
      let currentIndex = state.currentUser.userEvents.findIndex(
        (event) =>
          event.title === action.payload.title &&
          event.start === action.payload.start
      );
      state.currentUser.userEvents.splice(currentIndex, 1);

      let index = state.users.findIndex(
        (user) => state.currentUser.userLogin === user.userLogin
      );
      let globalIndex = state.users[index].userEvents.findIndex(
        (event) =>
          event.title === action.payload.title &&
          event.start === action.payload.start
      );
      state.users[index].userEvents.splice(globalIndex, 1);
    },
    editEvent: (state, action) => {
      let newName = action.payload.value;
      let editEvent = action.payload.event;
      let currentIndex = state.currentUser.userEvents.findIndex(
        (event) =>
          event.title === editEvent.title && event.start === editEvent.start
      );
      state.currentUser.userEvents[currentIndex].title = newName;

      let index = state.users.findIndex(
        (user) => state.currentUser.userLogin === user.userLogin
      );
      let globalIndex = state.users[index].userEvents.findIndex(
        (event) =>
          event.title === editEvent.title && event.start === editEvent.start
      );
      state.users[index].userEvents[globalIndex].title = newName;
    },
  },
});

export default userDataSlice.reducer;

export const {
  toggleLoggedIn,
  addUser,
  setCurrentUser,
  unsetCurrentUser,
  sortEvents,
  addEvent,
  removeEvent,
  editEvent,
} = userDataSlice.actions;
