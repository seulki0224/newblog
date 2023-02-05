/* eslint-disable */
import React from 'react';
import './_test.css';
/**
 * !class 컴포넌트에서 props는
 * ?부모가 보낸 props를 출력하고 싶으면
 * ?1. constructor, super에 props 파라미터 등록하고
 * ?2. this.props 쓰면 props 나옵니다.
 */
function App() {
  return (
    <div className='mainArea'>
      <Modal />
      <Modal2 />
      <Modal3 />
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <div>modal 안녕</div>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>modal2 안녕</div>;
  }
}

class Modal3 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'kim',
      age: 20,
    };
  }
  render() {
    return (
      <div>
        <p>modal3 안녕</p>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <button
          onClick={() => {
            this.setState({ age: '25' });
          }}>
          버튼 클릭시 나이 변경 됨
        </button>
      </div>
    );
  }
}

export default App;
