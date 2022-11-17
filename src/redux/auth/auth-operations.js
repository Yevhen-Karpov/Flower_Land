import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://flowers-gallery.herokuapp.com/api/auth/register",
        credentials
      );
      token.set(data.data.token);
      toast.success(
        "Ваша реєстрація пройшла успішно. Ви можете увійти в свій акаунт"
      );
      return data;
    } catch (error) {
      toast.error("Щось пішло не так. Перевірте правильність введених даних");
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://flowers-gallery.herokuapp.com/api/auth/login",
        credentials
      );
      token.set(data.data.token);
      return data;
    } catch (error) {
      toast.error("Щось пішло не так. Перевірте правильність введених даних");
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.get("https://flowers-gallery.herokuapp.com/api/auth/logout");
    token.unset();
  } catch (error) {
    return error.message;
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get(
        "https://flowers-gallery.herokuapp.com/api/users/current"
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
