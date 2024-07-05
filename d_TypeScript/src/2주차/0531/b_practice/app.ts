// 인터페이스 정의 (IUser)
interface IUser {
  getName(): string;
  getEmail(): string;
  setName(name: string): void;
  setEmail(email: string): void;
}

// 사용자 관리를 위한 추상 클래스 정의
// : 사용자 생성, 업데이트, 삭제, 출력 등의 기능 
abstract class AbstractUserManager {
  abstract createUser(user: IUser): void;
  abstract updateUser(name: string, user: IUser): void;
  abstract deleteUser(name: string): void;
  abstract displayUsers(): void;
}

// 
class User implements IUser {
  private name: string;
  private email : string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  setName(name: string): void {
    this.name = name;
  }
  setEmail(email: string): void {
    this.email = email;
  }
}



// 사용자 생성 업데이트 삭제 출력 기능 담당
class UserManager extends AbstractUserManager {
  private users: IUser[] = [];
  // 사용자 목록을 저장하는 배열

  createUser(user: IUser): void {
    if(!user.getName() || !user.getEmail()) {
      displayMessage('Both Name and Email are required');
      return;
    }
    
    const emailExists = this.users.some((u) => u.getEmail() === user.getEmail());

    if (emailExists) {
      displayMessage('같은 이메일을 가진 유저가 존재합니다.');
      return;
    }

    this.users.push(user);
    this.displayUsers();
    displayMessage('사용자 등록을 완료하였습니다.')


  }

  updateUser(name: string, newUser: IUser): void {
    
    let userToUpdate = this.users.find((user) => user.getName() === name);

    if (!userToUpdate) {
      displayMessage('이름이 일치하는 사용자가 없습니다.');
      return;
    }

    userToUpdate.setName(newUser.getName());
    userToUpdate.setEmail(newUser.getEmail());

    this.displayUsers();
    displayMessage('사용자 정보 업데이트를 완료하였습니다.');

  }

  deleteUser(name: string): void {
    
    const initialLength = this.users.length;
    this.users = this.users.filter((user) => user.getName() !== name);

    if (this.users.length !== initialLength) {
      this.displayUsers();
      displayMessage('사용자가 정상적으로 삭제되었습니다.');
    }
    else {
      displayMessage('해당 이름의 사용자가 없습니다.');
    }

  }

  displayUsers(): void {
    const tableBody = document.getElementById('userTable')?.getElementsByTagName('tbody')[0];

    if (tableBody) {
      tableBody.innerHTML = this.users.map(
        (user) => 
        `<tr>
          <td>${user.getName()}</td>
          <td>${user.getEmail()}</td>
        </tr>`
      ).join('');
    }
    else {
      console.error('Table body not found!');
    }
  }
}



function displayMessage(message: string) {


}





const userManager = new UserManager();

function createUser() {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;

  userManager.createUser(new User (name, email));

}

function updateUser() {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;

  userManager.updateUser(name, new User (name, email));
}

function deleteUser() {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;

  userManager.deleteUser(name);
}