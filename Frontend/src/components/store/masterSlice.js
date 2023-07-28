import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  Emails: null,
  Token: null,
  userDetails: null,
  loggedInUser: null,

};

const masterSlice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = [];
    },
    addEmails: (state, action) => {
      console.log(action);
      state.Emails=action.payload;
    },
    deleteUserEmails: (state, action) => {
      state.Emails = null;
    },
    addToken: (state, action) => {
      state.Token=action.payload;
    },
    deleteToken: (state, action) => {
      state.Token = null;
    },
    deleteUserDetails: (state, action) => {
      state.userDetails = null;
    },
 
    emptyService: (state, action) => {
      return {
        ...state,
        
      };
    },
  },
});

export const {
  switchUser,
  addUser,
  deleteUser,

  addUserDetails,
  deleteUserDetails,
  addEmails,
  deleteUserEmails,
  addToken,
  deleteToken
} = masterSlice.actions;

export default masterSlice.reducer;