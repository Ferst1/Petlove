import axios from 'axios';

const API_URL = 'https://petlove.b.goit.study/api';

export const signup = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, {
      name,
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error response:', error.response);
    if (error.response && error.response.status === 409) {
      throw new Error('User with this email already exists');
    } else if (error.response && error.response.status === 400) {
      throw new Error('Bad Request');
    } else {
      throw new Error('Registration failed');
    }
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/signin`, {
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error response:', error.response);
    if (error.response && error.response.status === 401) {
      throw new Error('Invalid email or password');
    } else {
      throw new Error('Login failed');
    }
  }
};

export const updateUser = async (userData) => {
  const response = await fetch('/api/updateUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Failed to update user');
  }
  return response.json();
};