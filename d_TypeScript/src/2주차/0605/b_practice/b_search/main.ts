{
  interface User {
    id: number;
    name: string;
    email: string;
    username: string;
  }

  type Users = User[];

  const fetchUsers = async(): Promise<Users> => {
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error ('네트워크 응답 비정상');
      }

      const users = await response.json();
      return users;
      
    }

    catch(error) {
      console.error('Fetch Error', error)
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

  const filterUsers = (users: Users, query: string): Users => {
    return users.filter(
      (user) => user.name.toLowerCase().includes(query.toLowerCase()) || 
      user.username.toLowerCase().includes(query.toLowerCase()) || 
      user.email.toLowerCase().includes(query.toLowerCase())
      // 사용자의 이름, 사용자명, 이메일 중 하나라도 쿼리 문자열을 포함하면 해당 사용자를 반환!
    );
  };

  // 특정 키 (name, eamil)을 기준으로 정렬하는 함수
  const sortUsers = (users: Users, key: 'name' | 'email'): Users => {
    return [...users].sort((a, b) => a[key].localeCompare(b[key]));

    // .sort((a, b) => a[key].localeCompare(b[key])); 
    // > 배열을 정렬하는 코드
    // localCompare : 문자열 정렬 
  }

  const addEventListeners = (users: Users) => {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;

    searchInput?.addEventListener('input', () => {
      const query = searchInput.value;
      const filteredUsers = filterUsers(users, query);

      const sortKey = sortSelect.value as 'name' | 'email';
      const sortedUsers = sortUsers(filteredUsers, sortKey);

      displayUsers(sortedUsers);
    });

    sortSelect?.addEventListener('change', () => {
      const query = sortSelect.value;
      const filteredUsers = filterUsers(users, query);

      const sortKey = sortSelect.value as 'name' | 'email';
      const sortedUsers = sortUsers(filteredUsers, sortKey);

      displayUsers(sortedUsers);
    })
  }

  const init = async() => {
    const users = await fetchUsers();
    displayUsers(users);
    addEventListeners(users);
  }

  document.addEventListener('DOMContentLoaded', init);

  






  /*
  <h2>${user.name}</h2>
  <p><strong>Username:</strong> ${user.username}</p>
  <p><strong>Email:</strong> ${user.email}</p>
  
  */
}