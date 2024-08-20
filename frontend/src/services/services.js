import axios from "axios";

const API_URL = "http://localhost:3000/api";

// function to fetch all contents
export const fetchContents = async () => {
  try {
    const response = await axios.get(`${API_URL}/content`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch contents:", error);
    throw error;
  }
};

// function to create contact us
export const createContactUs = async (contactUs) => {
  try {
    const response = await axios.post(`${API_URL}/contact-us`, contactUs);
    return response.data;
  } catch (error) {
    console.error("Failed to create contact us:", error);
    throw error;
  }
};
