import '../App.css';

function App() {
  /**
   * *JSX 문법 1. html에 class 넣을 땐 className
   * *JSX 문법 2. 변수를 html에 꽂아넣을 때는 {중괄호}
   * *JSX 문법 3. html에 style속성 넣고싶으면
   */

  let post = '가가가';
  return (
    <div className='App'>
      <div style={{ color: 'blue', fontSize: '30px' }}> {post} </div>
    </div>
  );
}
export default App;
