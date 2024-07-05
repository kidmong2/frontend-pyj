// script.js
document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('game-board');
  const colors = ['red', 'red', 'blue', 'blue', 'green', 'green', 'yellow', 'yellow', 'purple', 'purple', 'orange', 'orange', 'pink', 'pink', 'cyan', 'cyan'];
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;

  // 카드 셔플링
  function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  // 게임 보드 초기화
  function initializeBoard() {
      shuffle(colors);
      colors.forEach(color => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.dataset.color = color;
          card.addEventListener('click', flipCard);
          board.appendChild(card);
      });
  }

  // 카드 뒤집기
  function flipCard() {
      if (lockBoard) return;
      if (this === firstCard) return;

      this.classList.add('flipped');
      this.style.backgroundColor = this.dataset.color;

      if (!firstCard) {
          firstCard = this;
          return;
      }

      secondCard = this;
      lockBoard = true;

      checkForMatch();
  }

  // 카드 매칭 확인
  function checkForMatch() {
      const isMatch = firstCard.dataset.color === secondCard.dataset.color;

      if (isMatch) {
          disableCards();
      } else {
          unflipCards();
      }
  }

  // 카드 비활성화
  function disableCards() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);

      resetBoard();
  }

  // 카드 뒤집기 초기화
  function unflipCards() {
      setTimeout(() => {
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          firstCard.style.backgroundColor = '#333';
          secondCard.style.backgroundColor = '#333';

          resetBoard();
      }, 1000);
  }

  // 보드 상태 초기화
  function resetBoard() {
      [firstCard, secondCard, lockBoard] = [null, null, false];
  }

  initializeBoard();
});
