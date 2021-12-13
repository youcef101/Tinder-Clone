import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    peoples: []
}
const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
        setPeoples: (state, action) => {
            state.peoples = action.payload;
        }
    }
})
export const { setPeoples } = peopleSlice.actions
export const selectPeoples = (state) => state.people.peoples
export default peopleSlice.reducer