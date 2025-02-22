// async function fetchUser(userId) {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  
//       if (!response.ok) {
//         throw new Error(`Ошибка HTTP: ${response.status}`);
//       }
  
//       const userData = await response.json();
//       console.log('Данные пользователя:', userData);
//     } catch (error) {
//       console.error('Ошибка при получении данных пользователя:', error);
//     }
//   }
  
//   async function runFetch() {
//     await fetchUser(1);
//   }
  
//   runFetch();
  
async function createUser(user) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Результат создания пользователя:', result);
      return result;
    } catch (error) {
      console.error('Ошибка при создании пользователя:', error);
      return null;
    }
  }
  
  async function updateUser(id, updatedUser) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
  
      const result = await response.json();
      console.log(`Результат обновления пользователя с ID ${id}:`, result);
      return result;
    } catch (error) {
      console.error(`Ошибка при обновлении пользователя с ID ${id}:`, error);
      return null;
    }
  }
  
  async function testFunctions() {
    const newUser = {
      name: 'John Doe',
      username: 'johndoe',
      email: 'john.doe@example.com',
    };
  
    const createdUser = await createUser(newUser);
  
    if (createdUser) {
      const userIdToUpdate = createdUser.id;
      const updatedData = {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
      };
  
      await updateUser(userIdToUpdate, updatedData);
    }
  }
  
  testFunctions();
  