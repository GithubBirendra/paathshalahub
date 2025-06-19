import { createSlice } from '@reduxjs/toolkit'
const initialState= {
    name: '',
    email: '',
    token: '',
    isLoggedIn: false,
    role: ''


}
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logoutUser: state => {
  return initialState
    },

    addLoginDetails: (state, action) => {
      debugger;
      const {token, isLoggedIn,} =action.payload
      const { name, email, role, _id} = action.payload.user
      return {
        ...state,
        name: name,
        email: email,
        token: token,
        isLoggedIn: isLoggedIn,
        role: role
      }
    },
    }
})
export const { logoutUser, addLoginDetails} = userSlice.actions

export default userSlice.reducer