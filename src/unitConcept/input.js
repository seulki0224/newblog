/* eslint-disable */
import { useState } from 'react';
import './_test.css';
function App() {
  let stopPropagation = '<input ' + "type='text' " + 'onChange={e => { ' + 'console.log(e.stopPropagation); ' + '}} ' + '/>';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [글제목Idx, set글제목Idx] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className='mainArea'>
      <div className='mainArea'>
        <h4>input 태그 종류</h4>
        <div>
          <h5>input type='text'</h5>
          <input type='text' />
        </div>
        <div>
          <h5>input type='range'</h5>
          <input type='range' />
        </div>
        <div>
          <h5>input type='date'</h5>
          <input type='date' />
        </div>
        <div>
          <h5>input type='number'</h5>
          <input type='number' />
        </div>
        <div>
          <h5>textarea</h5>
          <textarea></textarea>
        </div>
        <div>
          <h5>select</h5>
          <select></select>
        </div>
      </div>

      <div className='mainArea'>
        <h4>이벤트 핸들러 </h4>
        {/**
         * onMouseOver={ } 이건 이 요소에 마우스를 댔을 때 안의 코드를 실행해줍니다.
         * onScroll={ } 이건 이 요소를 스크롤했을 때 안의 코드를 실행해줍니다.
         * */}
        <div>
          <h5>Input에 뭔가 입력시 코드 실행 : onChange</h5>
          <input
            onChange={() => {
              console.log('onChange() 실행');
            }}
          />
        </div>
        <div>
          <h5>
            input에 입력한 값 가져오는 법 <br />
            input onChange= e = console.log(e.target.value);
          </h5>
          <input
            onChange={e => {
              console.log(e.target.value);
            }}
          />
          <p></p>
          <p>
            1.<strong> (e)</strong> 파라미터 추가 <br />
            2. <strong> e.target.value 적기 </strong>
            <br />
            3. 현재 input에 입력된 값을 가져올 수 있습니다.
          </p>
          <p>
            1. <strong>e.target</strong>이러면 현재 이벤트가 발생한 곳을 알려주고 <br />
            2. <strong>e.preventDefault()</strong>이러면 이벤트 기본 동작을 막아주고 <br />
            3. <strong>e.stopPropagation()</strong>이러면 이벤트 버블링도 막아줍니다. <br />
            이거 쓰면 좋아요버튼 누를 때 모달창도 떠버리는 버그 해결가능
          </p>
        </div>

        <div className='onChangeEvent'>
          <h5>input + onChange Event</h5>
          <input
            type='text'
            onChange={() => {
              console.log('🚀  App  this');
            }}
          />
        </div>
        <div className='입력한값가져오는법'>
          <h5>input + onChange Event + 입력한 값 가져오는법</h5>
          <input
            type='text'
            onChange={e => {
              // console.log(e.target.value);
              set입력값(e.target.value);
            }}
          />
        </div>
        <div className='이벤트버블링방지'>
          <h5>input + onChange Event</h5>
          <h5 className='color_b'>e.stopPropagation();</h5>
          <p>상위 html로 퍼지는 이벤트 버블링 방지</p>
          <p>test : </p>
          <input
            type='text'
            onChange={e => {
              console.log(e.stopPropagation);
            }}
          />
          <p>tag : </p>
          <input
            className='tag'
            type='textarea'
            placeholder={stopPropagation}
          />
        </div>
        <div className='StateThis'>
          <h5>input + onChange Event + State</h5>
          <h4 className='color_b'>
            <div>
              <input
                onChange={e => {
                  입력값변경(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  let titleCopy = [...글제목];
                  titleCopy.unshift(입력값); //unshift : 배열의 앞쪽에 요소 추가
                  글제목변경(titleCopy);
                }}>
                글발행
              </button>

              <h5>입력값실시간 : {입력값}</h5>
              <h5>지금 삽입된 값 : {글제목[글제목Idx]}</h5>
              <h5>배열 : {글제목}</h5>
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
}
export default App;
