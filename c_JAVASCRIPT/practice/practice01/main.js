document.addEventListener("DOMContentLoaded", () => {
  let secretNumber = Math.floor(Math.random() * 100) + 1;

  let attempts = 0;

  const resultDisplay = document.getElementById("result");

  const guessInput = document.getElementById("guessInput");

  const submitBtn = document.getElementById("submitBtn");

  const resetBtn = document.getElementById("resetBtn");

  submitBtn.addEventListener("click", checkGuess);

  resetBtn.addEventListener("click", resetGame);

  function checkGuess() {
    const guess = parseInt(guessInput.value);
    attempts++;

    if (guess === secretNumber) {
      resultDisplay.innerText = `정답입니다! 시도횟수: ${attempts}번`;
    } 
    else if (guess > secretNumber) {
      resultDisplay.innerText = "너무 높습니다!";
    } 
    else {
      resultDisplay.innerText = "너무 낮습니다!";
    }
  }

  function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = "";
    resultDisplay.textContent = "";
  }
});

// textContent
// : 그냥 어떠한 경우에도 상관없이 내용이 있으면 무조건 텍스트를 가져옴
// : HTML 태그를 무시하고 요소의 모든 텍스트를 반환
// : 요소가 화면에 표시되지 않더라도 그 요소의 텍스트를 반환
// : 요소의 모든 텍스트를 반환하며, 요소의 가시성이나 스타일링에 영향을 받지 않는다.

// innerText
// : 조건이 있을 때 주로 사용, 스타일링에 따라 텍스트가 렌더링 되는지를 고려하여 가져옴
// : HTML 태그를 무시하고 요소의 모든 텍스트를 반환
// : 요소가 화면에 표시되지 않는 경우, 빈 문자열을 반환
// : CSS에 의해 숨겨지는 텍스트는 반환하지 않음
// : 요소의 텍스트를 반환할 때 스타일링과 가시성을 고려함. 사용자가 실제로 보는 텍스트와 더 가깝다.

// >> 요소의 모든 텍스트를 빠르게 가져와야 한다면 textContent를 사용하고, 실제로 화면에 표시되는 텍스트를 가져와야 한다면 innerText를 사용하는 것이 좋음.
