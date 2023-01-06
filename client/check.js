
const BASE_URL = 'localhost:3000/57/chat';
const getTodoItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);

    const todoItems = response.data;

    console.log(`GET: Here's the list of todos`, todoItems);
  } catch (errors) {
    console.error(errors);
  }
};

getTodoItems();
