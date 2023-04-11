import axios from 'axios';

const getUsers = async quantity => {
  try {
    const response = await axios.get(
      `https://randomuser.me/api/?results=10`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export { getUsers };
