// for(초기식; 조건식; 증감식)
for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; //짝수는 건너띄고 다음 반복 실행
  }
  console.log(idx);

  if (idx >= 7) {
    break;
  }
}
