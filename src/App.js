import logo from './logo.svg';
import './App.css';
import HandIcon from './HandIcon';

function App() { 

  const TOY1="보지";
  const TOY2="가슴";
  const TOY3="입보지";

  //const MindSet = <h1>여자는 구멍이다. 여자 반응에 무던하게 굴고 내 가치를 입증하며 잘하면 칭찬,헌신해줘서 내 좃을 핥아서 이쁨받고 싶은 욕구들게해라 </h1>

  function getResult(me,other){
    console.log('섹스')
  }

  function handleClick() {
    console.log('가위바위보지')
    alert('앗... 너무좋아요.. 우월한 성진오빠 사랑해요♥')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="title"> 만져줄 곳 </h1>
        <HandIcon value={0} />
        <h2 onClick={getResult}> 승리 </h2>
        <button onClick={handleClick} class="hand">{TOY1}</button>
        <button onClick={handleClick} class="hand">{TOY2}</button>
        <button onClick={handleClick} class="hand">{TOY3}</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
