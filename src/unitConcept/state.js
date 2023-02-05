import { useState } from 'react';
import './_test.css';
/** JSX에서는 이렇게 합니다.
 * *1. Click이 대문자인거
 * *2. {} 중괄호 사용하는거
 * *3. 그냥 코드가 아니라 함수를 넣어야 잘 동작한다는거 를 기억해주십시오.
 * *<div onClick={ function(){ 실행할코드 } }>
 * *<div onClick={ () => { 실행할코드 } }>
 * @param consoleFun {함수}
 *
 * ! let [ 따봉, 따봉변경 ] = useState(0);
 * ? 따봉변경(새로운state)
 *
 * ! 오늘 배운 내용 정리하면
 * ? 1. 클릭시 뭔가 실행하고 싶으면 onClick={함수} 이렇게 이벤트 핸들러를 달아서 사용합니다.
 * ? 2. state를 변경하시려면 state 변경함수를 꼭 이용하십시오.
 * ? state변경함수는 ( ) 안에 입력한걸로 기존 state를 갈아치워줍니다.
 * */

function App() {
  let [modal, setModal] = useState(false);
  let state란 = 'let[초기값을가지고있는공간, useState에서 받은값을 처리해서 저장하는공간] = useState(초기값//실행후 변한값)';

  let posts = '강남우동맛집';
  let [title] = useState('타이틀출력');
  let [제목배열, set제목배열] = useState(['제목배열0', '제목배열1', '제목배열2']);
  let consoleFun = () => {
    console.log('버튼클릭');
  };
  let [따봉, 따봉변경] = useState(0);
  let 따 = '{따봉}';
  return (
    <div className='mainArea'>
      <div>
        <h5 className='this'>{state란}</h5>
        <h5>배열그대로 출력 : {posts}</h5>
        <h5>useState 초기값만 셋팅 : {title}</h5>
        <h5>useState 배열출력 : {제목배열}</h5>
        <h5>useState 특정 idx 출력 : {제목배열[0]}</h5>
        <h5>
          버튼을 함수 선언식으로
          <button onClick={consoleFun}> 버튼</button>
        </h5>
      </div>

      <div>
        <h5
          onClick={() => {
            따봉변경(따봉 + 1);
          }}>
          클릭시 따봉 카운트 올라감 ❤️
          <p>
            {따} = 따봉카운트 {따봉}
          </p>
        </h5>
      </div>

      <div>
        <p>{제목배열[0]}</p>
        <button
          onClick={() => {
            set제목배열(['바뀐제목배열0', '바뀐제목배열1', '바뀐제목배열2']);
          }}>
          수정버튼
        </button>

        <button
          onClick={() => {
            let 제목배열Copy = [...제목배열];
            제목배열Copy[0] = '0 제목배열바꾸기';
            set제목배열(제목배열Copy);
          }}>
          특정배열값 변경
        </button>

        <button
          onClick={e => {
            e.stopPropagation();
            console.log('글삭제');
            let deleteTItle = [...제목배열];
            // deleteTItle.shift();
            deleteTItle.splice(0, 1); //몇번쨰항목중에, 몇개
            set제목배열(deleteTItle);
          }}>
          글삭제
        </button>

        <div>
          <br /> let data1 = [1,2,3];
          <br /> let data2 = data1; //복사
          <br /> data2[0] = 1000; //data2 내부 변경
          <br /> console.log(data2 === data1) //true 나올듯
        </div>
      </div>

      <div>
        <ol>
          <li>html css로 미리 UI 디자인을 다 해놓고</li>
          <li>UI의 현재 상태를 state로 저장해두고</li>
          <li>state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성.</li>
          <li>
            <b>onClick= setModal(!modal);</b>
          </li>
        </ol>

        <h5
          onClick={() => {
            // setModal(true);
            setModal(!modal);
            console.log(modal);
          }}>
          누르면 모달이뿅
        </h5>

        <button
          onClick={() => {
            // setModal(true);
            setModal(!modal);
            console.log(modal);
          }}>
          모달토글
        </button>

        {modal === true ? <Modal /> : null}
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
