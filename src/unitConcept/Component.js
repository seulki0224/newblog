function App() {
  return (
    <div>
      <ol>
        <h4>Component 만드는법</h4>
        <li>App() 함수 밖 함수를 하나 만들어주고작명</li>
        <li>그함수 안 return() 안에 축약을 원하는 HTML을 담으면 됩니다.</li>
        <li>그럼 원하는 곳에서 컴포넌트명 사용하면 아까 축약한 HTML이등장합니다.</li>
      </ol>
      <ol>
        <h4>Component 만들 때 주의점</h4>
        <li>component 작명할 땐 영어대문자로 보통 작명합니다.</li>
        <li>return () 안엔 html 태그들이 평행하게 여러개 들어갈 수 없습니다.</li>
        <li>
          function App(){} 내부에서 만들면안됩니다. 왜냐면 function App(){} 이것도 다시보니 컴포넌트 생성문법이죠? component 안에 component 를 만들진
          않습니다.
        </li>
      </ol>

      <Modal />
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
