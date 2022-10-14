import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiServices from "../../services/ApiServices";

export const fetchAllAchimenes = createAsyncThunk(
  "achimenes/fetchAllAchimenes",
  async (_, { rejectWithValue }) => {
    try {
      const achimenes = await ApiServices.getAllAchimenes();
      console.log(achimenes);
      return achimenes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllViolets = createAsyncThunk(
  "violets/fetchAllViolets",
  async (_, { rejectWithValue }) => {
    try {
      const violets = await ApiServices.getAllViolets();
      return violets;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAllGerans = createAsyncThunk(
  "gerans/fetchAllGerans",
  async (_, { rejectWithValue }) => {
    try {
      const gerans = await ApiServices.getAllGerans();
      return gerans;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const flowersOperations = {
  fetchAllAchimenes,
  fetchAllViolets,
  fetchAllGerans,
};

export default flowersOperations;
