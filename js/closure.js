// 카운터 값 count를 createCounter 함수의 지역변수로 설정
const createCounter = () => {
  let count = 0; // 카운터의 카운트 초기 값 설정
  console.log(count);

  // handleIncrement 함수는 count 변수에 접근하고 수정할 수 있다.
  // 이 함수는 클로저이며
  // createCounter 함수의 지역변수인 count를 기억한다.
  const handleIncrement = () => {
    console.log(count);
    count += 1;
    // 화면에 새로운 카운트 값을 업데이트 하겠다.
    document.getElementById("show").innerHTML = count;
  };
  // 클로저인 handleIncrement 함수를 반환한다.
  // 이 함수는 외부에서 호출될 수 있으며,
  // createCounter의 count 변수에 계속해서 접근할 수 있다.

  return handleIncrement;
};

const increment = createCounter();
