import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  deleteCollectionRequest,
  deleteCollectionSuccess,
  deleteCollectionError,
} from "./collections-actions";

const items = createReducer([], {
  [deleteCollectionSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [deleteCollectionRequest]: () => true,
  [deleteCollectionSuccess]: () => false,
  [deleteCollectionError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  loading,
  error,
});
