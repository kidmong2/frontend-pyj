{
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  type Users = User[];

  const fetchUsers = async (): Promise<Users> => {
    // promise로 반환되는 객체 중 User 에 담겨있는 값만 가져옴
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');

      if (!response.ok) {
        throw new Error ('Network Response was not okay');
      }

      const users: Users = await response.json();
      return users;
    }
    catch(error) {
      console.error('Fetch error', error);
      return [];
    }
  }

  const createUsercard = (user: User): HTMLElement => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    userCard.innerHTML = `
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    `;

    return userCard;
    
  }

  const displayUsers = (users: Users) => {
    const userList = document.getElementById('user-list');

    if (userList) {
      userList.innerHTML = '';
      users.forEach((user) => {
        // const userCard = document.getElementById('user-card')
        const userCard = createUsercard(user);
        userList.appendChild(userCard);
      })
    }
  }

  const addEventListners = (): void => {
    const fetchUsersButton = document.getElementById('fetch-users');
    if(fetchUsersButton) {
      fetchUsersButton.addEventListener('click', async() => {
        const users = await fetchUsers();
        displayUsers(users);
      })
    }
  }


  const init = (): void => {
    addEventListners();
  }

  document.addEventListener('DOMContentLoaded', init);


  /*
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
  */
}
