import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, actions) {
      state.isLoading = false;
      state.error = null;
      state.items = actions.payload;
    },
    [fetchContacts.error](state, actions) {
      state.isLoading = false;
      state.error = actions.payload;
    },

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, actions) {
      state.isLoading = false;
      state.error = null;
      state.items.push(actions.payload);
    },
    [addContact.error](state, actions) {
      state.isLoading = false;
      state.error = actions.payload;
    },

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, actions) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== actions.payload.id
      );
    },
    [deleteContact.error](state, actions) {
      state.isLoading = false;
      state.error = actions.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
