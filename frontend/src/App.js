import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    console.log("ZoomのMTGを作成しました");
  }, [meetings])

  const postReserve = () => {
    axios.post("/zoom/mtg").then((res) => {
      setMeetings([...meetings, res.data.zoom_mtg_url]);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <div className="reserve-btn" onClick={postReserve}>
        ZoomのMTGを作成
      </div>

      <ul>
        {meetings.map((mtg, key) => (
          <li id={key}>
            <a href={mtg}>Roomに入る</a>  
          </li>
        ))}
      </ul>
    </div>
  )

}

export default App;
