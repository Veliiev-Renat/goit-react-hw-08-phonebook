import axios from "axios";
import {createAsyncThunk} from '@reduxjs/toolkit'


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

export const fetchContacts = createAsyncThunk(
    "contact/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const addContact = createAsyncThunk(
    "contact/addContact",
    async (text, thunkAPI) => {
      try {
        const response = await axios.post("/contacts",  text );
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contact/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const editContact = createAsyncThunk(
    "contact/editContact",
    async (data, thunkAPI) => {
      try {
        const response = await axios.patch(`/contacts/${data.contactId}`,data.upDate);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
 
 