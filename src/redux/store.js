import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlise';
import { filterReducer } from './contacts/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});