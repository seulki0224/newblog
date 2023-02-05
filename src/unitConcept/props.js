import { useState } from 'react';
import '../App.css';

/**
 * ! props
 * ! style props
 */

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [글제목idx, set글제목idx] = useState(0);
  let [modal, setModal] = useState(false);
  let [popup, setPopup] = useState(false);
  return (
    <div>
      <Modal
        color={'skyblue'}
        글제목={글제목}
      />

      {/* popup set 1 */}
      {글제목.map(function (a, i) {
        return (
          <div
            className='list'
            key={i}>
            <h4
              onClick={() => {
                setPopup(!popup);
                set글제목idx(i);
              }}>
              {글제목[i]}
            </h4>
            <p>2월 18일 발행</p>
          </div>
        );
      })}

      {/* popup set 2 조건문 */}
      {popup === true ? (
        <Popup
          글제목={글제목}
          글제목idx={글제목idx}
        />
      ) : null}
    </div>
  );
}

//component
function Modal(props) {
  return (
    <div
      className='modal'
      style={{ background: props.color }}>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

// popup set 3 컴포넌트
// !글제목idx
function Popup(props) {
  return (
    <div
      className='popup'
      style={{ background: 'green' }}>
      <h4>{props.글제목[props.글제목idx]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
