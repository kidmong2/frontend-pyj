// 컴퓨터가 무작위 숫자 생성 (1부터 100까지)
const targetNumber = Math.floor(Math.random() * 100) + 1;

// 사용자가 맞출 때까지 반복
while (true) {
    // 사용자에게 숫자 입력 요청
    let userInput = prompt("1부터 100 사이의 숫자를 입력하세요:");

    // 입력값이 숫자인지, 그리고 1부터 100 사이의 숫자인지 확인
    if (!isNaN(userInput) && userInput >= 1 && userInput <= 100) {
        userInput = parseInt(userInput);

        // 숫자를 맞췄는지 확인
        if (userInput === targetNumber) {
            console.log("정답입니다!");
            break;
        } else if (userInput < targetNumber) {
            console.log("더 높은 숫자를 입력하세요.");
        } else {
            console.log("더 낮은 숫자를 입력하세요.");
        }
    } else {
        console.log("유효한 숫자를 입력해주세요.");
    }
    continue;
}

