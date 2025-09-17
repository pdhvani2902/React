import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ id: Date.now(), ...action.payload });
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.items[index] = action.payload;
      }
    }
  }
});

// Export actions
export const { addItem, deleteItem, updateItem } = itemSlice.actions;

// Export reducer
export default itemSlice.reducer;
