import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://62cd93d7a43bf780085b2b48.mockapi.io/contacts';
axios.defaults.baseURL = 'http://localhost:4000/api/';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async () => {
    const response = await axios.get('/contacts');
    console.log(response.data.data.result);
    return response.data.data.result;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { name, phone } = contact;
    const email = 'mail@addContact.com';
    const response = await axios.post('/contacts', { name, phone, email });
    return response.data.data.result;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data.data.result;
  }
);
