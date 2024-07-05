// 도서관 관리 시스템

// 이 시스템은 다음과 같은 기능을 제공

// 책 추가: 새 책을 도서 목록에 추가 (Create)
// 책 대여: 사용자가 책을 대여 가능 >> 대여 상태를 관리 (Update)
// 책 반납: 대여한 책을 반납 처리 (Delete)
// 책 조회: 현재 도서관에 있는 책의 목록을 조회 (Read)

//? Book 클래스: 각 책의 정보(id, title, author)를 저장
//  , 대여 및 반납 기능(rent, returnBook)을 제공

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true; // 책의 대여 가능 여부를 지정 - 기본값 true
  }


  rent() { // 책을 대여
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title}은 대여되었습니다.`);
    }
    else {
      console.log(`${this.title}은 대여 할 수 없습니다.`);
    }
  }

  returnBook() { // 책을 반납
    this.isAvailable = true;
    console.log(`${this.title}이(는) 반납되었습니다.`);
  }

}

//! 인스턴스 vs 객체 vs 클래스

// 클래스 : 객체 생성을 위한 템플릿(틀) 
// 예) 붕어빵 틀

// 객체 : 클래스로 생성된 실제 데이터 
// 예) 붕어빵

// 인스턴스 : 컴퓨터 메모리에 할당된 각각의 객체 
// 예) 판매대 위에 올려진 각각의 붕어빵

//? Library 클래스: Book 인스턴스의 목록을 관리
// >> 책을 추가하는 addBook, 목록을 출력하는 displayBooks
//    , 책을 대여하고 반납하는 rentBook, returnBook 기능을 제공

class Library {
  constructor() {
    this.books = []; // 도서관의 책 목록을 저장하는 배열 초기화
  }

  //! 새로운 책을 도서 목록에 추가하는 메서드
  addBook(title, author) {
    // 새 책 객체를 생성 >> 순차적인 id를 할당
    // id 값은 books 배열의 길이 + 1
    const newBook = new Book(this.books.length + 1, title, author); // 객체타입
    this.books.push(newBook);
    console.log(`${title} by ${author} 는 도서관에 추가되었습니다.`);
  }

  //! 도서 목록을 출력하는 메서드
  displayBooks() {
    console.log('도서관 책 목록: ');
    this.books.forEach((book) => {
      console.log(`
      ${book.id}: ${book.title} by ${book.author} - ${book.isAvailable ? '대여 가능' : '대여 불가능'}
      `);
    })
  }

  //! 특정 id의 책을 대여하는 메서드

  rentbook(id) {
    const book = this.books.find(book => book.id === id); // id에 해당하는 책 요소를 찾기
    if (book) {
      book.rent(); // 해당 책의 rent 메서드 호출
    }
    else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  //! 특정 id의 책을 반납하는 메서드

  returnBook(id) {
    const book = this.books.find(book => book.id === id);
    if (book) {
      book.returnBook(); // 해당 책의 return 메서드 호출
    }
    else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }
}

// 예제 사용

const scienceLibrary = new Library();
scienceLibrary.addBook('과학동아', '박용재');
scienceLibrary.addBook('국어대백과', '강혜원');

scienceLibrary.displayBooks();

scienceLibrary.rentbook(1);
scienceLibrary.returnBook(1);

scienceLibrary.displayBooks();

const EnglighLibrary = new Library();
EnglighLibrary.addBook('Harry Potter', 'JK');

EnglighLibrary.displayBooks();