import { useState } from 'react';
import './App.css';
import './unitConcept/_test.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [modal, setModal] = useState(false);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [글제목Idx, set글제목Idx] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let 날짜 = new Date().toLocaleTimeString();

  return (
    <div className='app'>
      <div className='navArea'>
        <div className='black-nav'>
          <div
            onClick={() => {
              window.location.reload();
            }}>
            개발 blog
          </div>
        </div>
        <div className='buttonArea nav_menu'>
          <button
            onClick={() => {
              let titleSort = [...글제목];
              titleSort.sort();
              글제목변경(titleSort);
            }}>
            정렬버튼
          </button>
          <button
            onClick={() => {
              let titleChange = [...글제목];
              titleChange[0] = ['종로우동맛집'];
              글제목변경(titleChange);
            }}>
            글제목변경
          </button>
          <button
            onClick={() => {
              let titleAdd = [...글제목];
              //unshift : 배열의 앞쪽에 요소 추가
              titleAdd.unshift('튀김우동추가');
              글제목변경(titleAdd);
            }}>
            글추가
          </button>
          <button
            onClick={() => {
              console.log('Create');
            }}>
            Create
          </button>
          <button
            onClick={() => {
              console.log('Read');
            }}>
            Read
          </button>
          <button
            onClick={() => {
              console.log('Update');
            }}>
            Update
          </button>
          <button
            onClick={() => {
              console.log('Delete');
            }}>
            Delete
          </button>
        </div>
      </div>

      <div className='editArea edit'>
        <h5>{글제목 + ' ,'}</h5>

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
        <h5>입력값예정실시간 : {입력값}</h5>
        <h5>
          지금 map의 idx : {글제목[글제목Idx]} [{글제목Idx}]
        </h5>
        <h5>글제목리스트 : {글제목 + ', '}</h5>
      </div>

      <div className='listArea'>
        <List
          글제목={글제목}
          글제목변경={글제목변경}
          modal={modal}
          setModal={setModal}
          따봉={따봉}
          따봉변경={따봉변경}
          set글제목Idx={set글제목Idx}
          날짜={날짜}
        />
      </div>

      <div className='modalArea'>
        {modal === true ? (
          <Modal
            글제목={글제목}
            글제목Idx={글제목Idx}
          />
        ) : null}
      </div>
    </div>
  );
}

function List(props) {
  return (
    <div>
      {props.글제목.map(function (a, i) {
        return (
          <div
            className='list'
            key={i}>
            <h4
              onClick={() => {
                props.setModal(!props.modal);
                props.set글제목Idx(i);
              }}>
              {props.글제목[i]}
              <span
                onClick={e => {
                  e.stopPropagation(); //  상위 html로 퍼지는 이벤트 버블링 방지
                  let copy따봉 = [...props.따봉];
                  copy따봉[i] = copy따봉[i] + 1;
                  props.따봉변경(copy따봉);
                }}>
                👍{props.따봉[i]}
              </span>

              <button
                onClick={e => {
                  e.stopPropagation();
                  console.log('글삭제');
                  let deleteTItle = [...props.글제목];
                  // deleteTItle.shift();
                  deleteTItle.splice(i, 1); //몇번쨰항목중에, 몇개
                  props.글제목변경(deleteTItle);
                }}>
                글삭제
              </button>
            </h4>
            {/* <p>2월 2일 발행</p> */}
            {/* <p>{new Date().toString()}</p> */}
            <p>날짜 : {props.날짜}</p>
            <p> {props.날짜2}</p>
          </div>
        );
      })}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h5>{props.글제목[props.글제목Idx]}</h5>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {}}>글수정</button>
    </div>
  );
}

export default App;
