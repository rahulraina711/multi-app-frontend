import './App.scss';
import logo from './static/logo.png';
import {Add, Note, FormatListBulleted, PublicOutlined} from '@material-ui/icons';
import {grey} from "@material-ui/core/colors";
import React, { useEffect, useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);

  useEffect(()=>{
    getnotes();
  },[])

  function getnotes(){
    setNotes(JSON.parse(localStorage.getItem("notes")));
  }

  function renderNotes(){
    return notes.map(note=>{
      return(
        <div key={note.id} className="rendered-note">
          <div className="r-note-title">{note.title}</div>
          <div className="r-note-body">{note.body}</div>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="title-logo">
          <div id="app-logo"><img src={logo} alt="app-logo"/></div>
          <div id="app-title">My Notes</div>
        </div>
        <div className="content-box">
          {renderNotes()}
        </div>
      </header>
      <footer className="app-footer">
        <div id="add-btn-block">
          <button id="add-btn"><Add style={{ fontSize: 30 }}/></button>
        </div>
        <div className="more-optns">
          <div className="switches">
            <Note className="q" style={{ fontSize: 30, color:grey[600] }} />
            <FormatListBulleted className="q" style={{ fontSize: 30, color:grey[600] }} />
            <PublicOutlined className="q" style={{ fontSize: 30 , color:grey[600]}} />
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
