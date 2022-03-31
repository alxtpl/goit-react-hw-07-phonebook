import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from '../redux/contacts/contactsReducer';


export const store = configureStore({
  reducer: { contacts: phonebookReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;