import axios from 'axios';

jest.mock('next/router', () => require('next-router-mock'));

axios.defaults.baseURL = 'http://localhost:3000/';
