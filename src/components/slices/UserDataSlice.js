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
		state.currentUser.userEvents.sort((a,b) => new Date(a.start) - new Date(b.start))
	}
  },
});

export default userDataSlice.reducer;

export const { toggleLoggedIn, addUser, setCurrentUser, unsetCurrentUser, sortEvents } =
  userDataSlice.actions;
