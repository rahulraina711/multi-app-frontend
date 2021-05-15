import React, { useState } from 'react';
import './note.scss';
import {TextField, Menu, MenuItem} from '@material-ui/core';
import PaletteIcon from '@material-ui/icons/Palette';
import { useHistory } from 'react-router-dom';


export default function Note() {

    const [color, setColor] = useState("#ffff00");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    const handleClose = (c) => {
        setColor(c);
        setAnchorEl(null);
      };
    


    const history = useHistory();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const createNote = () =>{
        if(!localStorage.getItem("notes")){
            localStorage.setItem("notes","[]");
            localStorage.setItem("last_note_id",0);
        };
        let notes = [...JSON.parse(localStorage.getItem("notes"))];
        console.log(notes);
        let id = localStorage.last_note_id
        notes.push({
            id,
            title,
            body,
            color
        })
        localStorage.setItem("notes", JSON.stringify(notes));
        localStorage.setItem("last_note_id",id+1);
        history.push("/");
    }

    const onClickHandler = (status) =>{
        status?createNote():history.push("/");
    }

    return(
        <div className="note-bb" style={{background:color}}>
            <TextField 
                className="note-title" 
                label="Title" 
                fullWidth 
                defaultValue={title} 
                onChange={(e)=>setTitle(e.target.value)} />

            <TextField
                className="note-body"
                multiline
                rows={10}
                defaultValue={body}
                variant="outlined"
                placeholder="Write your note here"
                fullWidth
                onChange={(e)=>setBody(e.target.value)}
                style={{background:"white"}}
            />
            <div className="options">
                <PaletteIcon className="cp" onClick={handleClick} />
                <div className="actions">
                    <button className="cancel" onClick={()=>onClickHandler(false)}>Discard</button>
                    <button className="create" onClick={()=>onClickHandler(true)}>Create</button>
                </div>
            </div>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={()=>handleClose("#9fff80")}><div style={{height:"20px",width:"20px",borderRadius:"50%",background:"#9fff80"}}></div></MenuItem>
              <MenuItem onClick={()=>handleClose("#cc99ff")}><div style={{height:"20px",width:"20px",borderRadius:"50%",background:"#cc99ff"}}></div></MenuItem>
              <MenuItem onClick={()=>handleClose("#66b3ff")}><div style={{height:"20px",width:"20px",borderRadius:"50%",background:"#66b3ff"}}></div></MenuItem>
              <MenuItem onClick={()=>handleClose("#ff4da6")}><div style={{height:"20px",width:"20px",borderRadius:"50%",background:"#ff4da6"}}></div></MenuItem>
              <MenuItem onClick={()=>handleClose("#ffff00")}><div style={{height:"20px",width:"20px",borderRadius:"50%",background:"#ffff00"}}></div></MenuItem>
            </Menu>
        </div>            

    )
}