import './App.scss';
import logo from './static/logo.png';
import {Add, Note, FormatListBulleted, PublicOutlined, DeleteOutline} from '@material-ui/icons';
import {grey} from "@material-ui/core/colors";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function App() {

  const [notes, setNotes] = useState([]);
  const [pxv, setPxv] = useState("0px")
  const history = useHistory();

  useEffect(()=>{
    getnotes();
  },[])

  function getnotes(){
    setNotes(JSON.parse(localStorage.getItem("notes")));
  }

  function addNote(){
    history.push("/createNote");
  }

  function deleteNote(id){
    let newNotes = notes.filter(note=> note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("notes",JSON.stringify(newNotes));
  }

  function renderNotes(){
    if(notes===null) return <>No Notes Created</>
    return notes.map(note=>{
      return(
        <div key={note.id} className="rendered-note" style={{background:note.color || "#ffff00"}}>
          <div className="r-note-a">
            <div className="r-note-title" style={{textDecoration:"underline", marginBottom:"3px"}}>{note.title}</div>
            <DeleteOutline onClick={()=>deleteNote(note.id)}/>
          </div>
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
          <button id="add-btn" onClick={addNote}><Add style={{ fontSize: 30 }}/></button>
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
