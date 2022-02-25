import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      userLogin: "theFloGus",
      userName: "Eugene",
      userSurname: "Brednev",
      userPassword: "1234",
      userEvents: [
        {
          title: "event1",
          start: "2022-02-26",
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
      state.currentUser = {
        ...state.users[action.payload],
        index: action.payload,
      };
    },
    unsetCurrentUser: (state) => {
      state.currentUser = {};
    },
  },
});

export default userDataSlice.reducer;

export const { toggleLoggedIn, addUser, setCurrentUser, unsetCurrentUser } =
  userDataSlice.actions;
