/* eslint-disable */
import './_test.css';

function App() {
  const date_toString = new Date().toString();
  const date_toLocaleTimeString = new Date().toLocaleTimeString();
  return (
    <div className='mainArea'>
      <div>
        <h5 className='title'>{date_toString}</h5>
        <p className='설명'></p>
        <p className='code'>{'new Date().toString()'}</p>
      </div>
      <div>
        <h5>{date_toLocaleTimeString}</h5>
        <p className='code'>{'new Date().toLocaleTimeString();'}</p>
      </div>
    </div>
  );
}
export default App;
