import { useState } from 'react';
/**
 * ! map
 */

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(number => number * 2);
  console.log(doubled);

  //맵쓸때 ... 복사해서 쓰기

  /* // 1.array에 들어있는 자료갯수만큼 그 안에 있는 코드 반복실행
  var 어레이기본 = [2,3,4];
  어레이기본.map(function(){
      console.log(1) //console.log(1) 3번 실행됨
  });  */

  /* // 2.콜백함수의 파라미터 작명하면 그 파라미터는 어레이 안에 있던 모든 자료를 하나씩 출력해줍니다.
  // 소괄호안에 있는 함수를 콜백함수라 함.
  var 어레이파라미터 = [2,3,4];
  어레이파라미터.map(function(파라미터){
      console.log(파라미터)//2, 3, 4가 콘솔창에 출력됨
  }); */

  /* // 3.return 오른쪽에 뭐 적으면 array로 담아줌.
  // 그리고 map() 쓴 자리에 남겨줍니다. 변수에 담아서 출력하면 array에 담아주긴 함.
  var 어레이리턴 = [2,3,4];
  var newArray = 어레이리턴.map(function(a){
      return a * 10
  });
  console.log(newArray) //newArray는 [20, 30, 40] 출력됨 */

  return (
    <div>
      {
        //4. 리액트 중괄호안에서 html을 반복생성하고 싶으면 아까 배운 map을 이용해도 됩니다.
        // [1,2,3].map(function(){
        // return ( <div>안녕</div> )
        // })
      }
    </div>
  );
}

function App2() {
  let [제목배열, set제목배열] = useState(['제목배열0', '제목배열1', '제목배열2']);
  var 어레이 = [2, 3, 4];
  // 기능3. return 오른쪽에 뭐 적으면 array로 담아줍니다.
  //       그리고 map() 쓴 자리에 남겨줍니다.
  //       그래서 변수에 담아서 출력해봤더니 진짜로 array에 담아주긴 하는군요
  //       newArray는 [20, 30, 40] 이 출력됩니다.

  var newArray = 어레이.map(function (a) {
    return a * 10;
  });
  console.log(newArray);

  return (
    <div>
      {/* 기능 1. array에 들어있는 자료갯수만큼 그 안에 있는 코드를 반복실행해줍니다.*/}
      {어레이.map(function () {
        return console.log(1);
        //console.log(1) 3번 실행됨
      })}

      {/* 기능 2. 콜백함수에 파라미터 아무렇게나 작명하면 그 파라미터는 어레이 안에 있던 모든 자료를 하나씩 출력해줍니다.
        (그냥 소괄호안에 있는 함수를 콜백함수라고 합니다) */}
      {어레이.map(function (a) {
        console.log(a);
        //2, 3, 4가 콘솔창에 출력됨
      })}

      {/* JSX 안에서 html을 반복생성하고 싶으면
          리액트 중괄호안에서 html을 반복생성하고 싶으면 아까 배운 map을 이용해도 됩니다. */}
      {/* {[1, 2, 3].map(function () {
        return <div>안녕</div>;
      })} */}

      <div>
        {제목배열.map(function (a, i) {
          return (
            <div
              className='list'
              key={i}>
              {/* <h4>{제목배열[i]}</h4> */}
              <h4>{a}</h4>
              <p>2월 18일 발행</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
