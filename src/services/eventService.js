// aqui ficam as funções para lidar com a API
//Here the functions to conect with API

import axios from 'axios';

const API_URL = 'https://sua-api.com/events'; //unsere API

export const getEvents = () => axios.get(API_URL);

export const createEvent = (eventData) => axios.post(API_URL, eventData);

export const updateEvent = (id, updatedData) => axios.put(`${API_URL}/${id}`, updatedData);

export const deleteEvent = (id) => axios.delete(`${API_URL}/${id}`);