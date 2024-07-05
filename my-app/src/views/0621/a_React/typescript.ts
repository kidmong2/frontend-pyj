

export type CounterState = {
  count: number;
}

// 카운터 숫자를 생성하는 함수
// : 객체값을 생성해내는 Class 생성자와 동일
function createCounter() {
  let state: CounterState = { count: 0 };
  
  function increment() {
    state.count += 1;
    displayCount();
  }

  function decrement() {
    state.count -= 1;
    displayCount();
  }


  // 변경된 카운트 값을 화면에 보여주는 함수
  function displayCount() {
    const counterValue = document.getElementById('counterValue');

    if (counterValue) {
      counterValue.textContent = `Counter: ${state.count}`;
    }
  }

  return { increment, decrement }; // 객체값

}

// 함수 호출 - 객체값을 반환
const counter = createCounter();

document.getElementById('incrementBtn')?.addEventListener('click', () => {
  counter.increment;
});

document.getElementById('decrementBtn')?.addEventListener('click', () => {
  counter.decrement;
});