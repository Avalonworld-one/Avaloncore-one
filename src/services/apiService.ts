// src/services/apiService.ts

export const fetchData = async () => {
  const apiUrl = 'http://127.0.0.1:7071/api/api';
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const responseText = await response.text();
    console.log('Raw response text:', responseText); // Log the raw response text
    const data = JSON.parse(responseText); // Manually parse the response text
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null when an error occurs
  }
};

export const apiService = {
  fetchData,
};
