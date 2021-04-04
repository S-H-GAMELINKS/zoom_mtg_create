import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {
  const postReserve = () => {
    axios.post("/zoom/mtg").then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <div className="reserve-btn" onClick={postReserve}>
        ZoomのMTGを作成
      </div>
    </div>
  )

}

export default App;
