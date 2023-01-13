import './App.css';
import {useState} from 'react';

function App() {

  const [name,setname] = useState('CDMI');
  const [a,seta] = useState(0);
  const [b,setb] = useState(0);
  const [ans,setans] = useState();

  const answer = () => {
      setans(parseInt(a)+parseInt(b))
  }

  return (
    <div className="App">
        <h1>{name}</h1>
        <input type="button" value="Click" onClick={()=>{setname("Hello")}} />

        <input type="text" placeholder='Enter A' onChange={(e)=>{seta(e.target.value)}}/>
        <input type="text" placeholder='Enter B' onChange={(e)=>{setb(e.target.value)}}/>
        <input type="button" value="Click" onClick={answer} />
        <input type="text" value={ans} />
    </div>
  );
}

export default App;
