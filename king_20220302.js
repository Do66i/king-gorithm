/*
fibonacci
문제
아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.

0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
입력
인자 1 : n
number 타입의 n (n은 0 이상의 정수)
출력
number 타입을 리턴해야합니다.
주의사항
재귀함수를 이용해 구현해야 합니다.
반복문(for, while) 사용은 금지됩니다.
함수 fibonacci가 반드시 재귀함수일 필요는 없습니다.
입출력 예시
let output = fibonacci(0);
console.log(output); // --> 0

output = fibonacci(1);
console.log(output); // --> 1

output = fibonacci(5);
console.log(output); // --> 5

output = fibonacci(9);
console.log(output); // --> 34
Advanced
피보나치 수열을 구하는 효율적인 알고리즘(O(N))이 존재합니다. 재귀함수의 호출을 직접 관찰하여 비효율이 있는지 확인해 보시기 바랍니다.
*/

function fibonacci(n) {
  //fibonacci( n - 2 ) + fibonacci( n - 1 )
  let a = [0, 1]; // fibonacci의 n의 모든 수가 들어갈 배열을 선언, 0, 1번째 값은 고정
  let b = (n) => {
    if (a[n] !== undefined) {
      return a[n]; //배열에 n번째 수가 존재한다면 그 수 리턴
    }
    a[n] = b(n - 2) + b(n - 1);
    //배열에 n번째 수가 존재하지 않는다면 aux 함수를 재귀 호출
    //base조건은 배열에 n번째 수가 존재하는 경우. 즉, aux(1) === 1 , aux(0) === 0이 된다.
    return a[n];
  };
  return b(n); ////결국 b(n)을 한다면 배열에 n번째 수가 계산되어 리턴된다.
}
//배열까지 생각한 내 자신을 칭찬한다만 코드를 완성하지 못했으므로 너는 망나니

// let some = [0, 1];
// let thing = (n) => {
//   if(some[n] !== undefined ) { //if(some[n] < 2 ) 쓰면 실행초과됨.
//     return some[n]
//   }
//   some[n] = thing(n-2) + thing(n-1); // 디버깅으로봐도 무슨말인지 모르겠음;
//   return some[n]
// }
// return thing(n)

//위는 콜스택 먼저 부른 후 값을 구하는 방식임

//(O(N))
// function fibonacci(n) {
//  a = b = c = 1;
//     for(let i = 3; i <= n; i++){
//     	c = a + b;
//         a = b;
//         b = c;
//     }
// 	return c;
// }

//다음과 같이 클로저를 사용해 계속 유지되는 저장 공간을 만든 후 코드를 바꿔봅시다.
/* 
var fibonacci = (function() {
  var save = {};
  var fibo = function(number) {
    if (number < 2) {
      return number;
    } else {
      var saved1 = save[number - 1] || fibo(number - 1); // save[number - 1] 가 undifinded이면 fibo(number - 1)가 saved1에 넣어짐
      var saved2 = save[number - 2] || fibo(number - 2);  어디다가 저장하는거여 ?
      var result = saved1 + saved2;
      save[number] = result;
      console.log(saved1, saved2, result);
      return result;
    }
  };
  return fibo;
})();
 */

// a = false || 100
// console.log(a) // 100

/*
function fibonacci(n) {

  function comeagain(a,b,n){
    if (n===0)return a
    else if (n===1)return b
    return comeagain(b,a+b,n-1)
  }
  return comeagain(0,1,n)
}
let n = 10
debugger
fibonacci(n)

callstack 확인
 */

/*
입력
인자 1 : arr
number 타입을 요소로 갖는 배열
arr[i]는 0 이상의 정수
arr.length 100,000 이하
출력
number 타입을 요소로 갖는 배열을 리턴해야 합니다.
배열의 요소는 오름차순으로 정렬되어야 합니다.
arr[i] <= arr[j] (i < j)
주의사항
기수 정렬을 구현해야 합니다.
arr.sort 사용은 금지됩니다.
입력으로 주어진 배열은 중첩되지 않은 1차원 배열입니다.
입출력 예시
let output = radixSort([3, 1, 21]);
console.log(output); // --> [1, 3, 21]
힌트
기수 정렬(radix sort)은 내부적으로 계수 정렬(counting sort)을 사용합니다.
계수 정렬을 먼저 학습하고, 어떤 경우에 기수 정렬을 사용하는지 학습하도록 합니다.
Advanced
arr[i]의 범위가 정수 전체로 확대될 경우, 기수 정렬 알고리즘을 완성해 보세요.
 */

function getMax(arr) {
  return arr.reduce((max, item) => {
    if (item > max) return item;
    return max;
  }, 0);
}

function countingSort(arr, radix) {
  const N = arr.length;
  const output = Array(N).fill(0);
  const count = Array(10).fill(0);

  // 현재 자리수를 기준으로 0~9의 개수를 센다.
  arr.forEach((item) => {
    const idx = Math.floor(item / radix) % 10;
    count[idx]++;
  });

  // count[i]가 i까지의 누적 개수가 되도록 만든다.
  count.reduce((totalNum, num, idx) => {
    count[idx] = totalNum + num;
    return totalNum + num;
  });

  // 아래 속성이 유지되도록 하기 위해 배열을 거꾸로 순회한다.
  //  1. 가장 큰 값을 먼저 본다.
  //  2. 가장 큰 값을 가장 마지막에 놓는다.
  let i = N - 1;
  while (i >= 0) {
    const idx = Math.floor(arr[i] / radix) % 10;
    // count[idx]: 현재 radix의 idx까지 누적 개수
    // count[idx]개만큼 있으므로, 인덱스는 count[idx] - 1
    output[count[idx] - 1] = arr[i];
    count[idx] -= 1;
    i--;
  }

  return output;
}

// naive solution
// 양의 정수만 정렬 가능
// function radixSort(arr) {
//   const max = getMax(arr);
//   let radix = 1;
//   while (parseInt(max / radix) > 0) {
//     arr = countingSort(arr, radix);
//     radix *= 10;
//   }
//   return arr;
// }

// 음의 정수를 포함한 기수 정렬
// 1. 주어진 배열을 음수 부분과 양수 부분으로 나눈다.
// 2. 음수는 절대값을 기준으로, 즉 양수로 변환하여 기수 정렬한다.
// 3. 양수를 정렬한다.
// 4. 정렬된 음수 부분을 다시 음수로 바꾸고 순서를 뒤짚는다.
// 5. 음수 부분과 양수 부분을 붙인다.
function radixSort(arr) {
  let left = [];
  let right = [];
  arr.forEach((item) => {
    if (item >= 0) right.push(item);
    else left.push(item * -1);
  });

  let max = getMax(left);
  let radix = 1;
  while (parseInt(max / radix) > 0) {
    left = countingSort(left, radix);
    radix *= 10;
  }

  max = getMax(right);
  radix = 1;
  while (parseInt(max / radix) > 0) {
    right = countingSort(right, radix);
    radix *= 10;
  }

  return left
    .reverse()
    .map((item) => item * -1)
    .concat(right);
}
