import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts/filter', e => {
  return {
    payload: e.target.value,
  };
});
