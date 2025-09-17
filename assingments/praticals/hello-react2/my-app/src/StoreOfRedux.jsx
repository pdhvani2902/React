import { configureStore, createSlice } from "@reduxjs/toolkit";

// CRUD Slice
const crudSlice = createSlice({
  name: "crud",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      const { id, text } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) state.items[index].text = text;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Export actions
export const { addItem, updateItem, deleteItem } = crudSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    crud: crudSlice.reducer,
  },
});

export default store;
