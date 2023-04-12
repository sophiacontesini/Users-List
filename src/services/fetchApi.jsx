const getUsers = async (quantity) => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${quantity}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export { getUsers };
