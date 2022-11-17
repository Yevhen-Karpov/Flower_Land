// import { createAsyncThunk } from "@reduxjs/toolkit/dist/createAsyncThunk";
// import { getCollection } from "../../services/ApiServices";

// export const getCollection = createAsyncThunk(
//   "collections/getCollection",
//   async (_, { rejectWithValue }) => {
//     try {
//       const result = await getCollection();
//       return result;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );

import axios from "axios";
import {
  deleteCollectionRequest,
  deleteCollectionSuccess,
  deleteCollectionError,
} from "./collections-actions";

export const deleteCollection = (id) => async (dispatch) => {
  dispatch(deleteCollectionRequest());

  try {
    await axios.delete(`/collections/${id}`);
    dispatch(deleteCollectionSuccess(id));
  } catch (error) {
    dispatch(deleteCollectionError(error.message));
  }
};
