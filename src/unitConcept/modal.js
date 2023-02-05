import { useState } from 'react';
import '../App.css';
/**
 * ! 리액트에서 동적인 UI 만드는 step
 * *동적인 UI가 뭐냐면 유저가 조작시 형태가 바뀌는
 * *모달창 탭 서브메뉴 툴팁 경고문 등 그런 UI들을 의미합니다.
 * ? 1. html css로 미리 UI 디자인을 다 해놓고
 * ? 2. UI의 현재 상태를 state로 저장해두고
 * ? 3. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성
 */

function App() {
  let [modal, setModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setModal(!modal);
        }}>
        모달나와랑
      </button>
      {modal == true ? <Modal></Modal> : null}
    </div>
  );
}
function Modal(props) {
  return (
    <div className='modal'>
      <h5>모달</h5>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
