import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import flowersOperations from "./flowers-operations";

const flowers = createReducer([], {
  [flowersOperations.fetchAllAchimenes.fulfilled]: (_, { payload }) => payload,
  [flowersOperations.fetchAllViolets.fulfilled]: (_, { payload }) => payload,
  [flowersOperations.fetchAllGerans.fulfilled]: (_, { payload }) => payload,
});

const flowersReducers = combineReducers({
  flowers,
});

export default flowersReducers;
