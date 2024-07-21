import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: null,
  currency: null,
  category: null,
  searchTitle: ""
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTypeFilter: (state, action) => {
      state.type = action.payload;
    },
    setCurrencyFilter: (state, action) => {
      state.currency = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.category = action.payload;
    },
    setSearchTitle: (state, action) => {
      state.searchTitle = action.payload;
    },
    clearFilters: (state) => {
      state.type = null;
      state.currency = null;
      state.category = null;
      state.searchTitle = "";
    }
  }
});

export const {
  setTypeFilter,
  setCurrencyFilter,
  setCategoryFilter,
  setSearchTitle,
  clearFilters
} = filterSlice.actions;

export default filterSlice.reducer;
