import React, { useState } from 'react';
import './note.scss';
import {TextField} from '@material-ui/core';

import { useHistory } from 'react-router-dom';


export default function Note() {

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
            body
        })
        localStorage.setItem("notes", JSON.stringify(notes));
        localStorage.setItem("last_note_id",id+1);
        history.push("/");
    }

    const onClickHandler = (status) =>{
        status?createNote():history.push("/");
    }

    return(
        <div className="note-bb">
            <TextField 
                className="note-title" 
                label="Title" 
                fullWidth 
                defaultValue={title} 
                onChange={(e)=>setTitle(e.target.value)} />

            <TextField
                className="note-body"
                multiline
                rows={30}
                defaultValue={body}
                variant="outlined"
                placeholder="Write your note here"
                fullWidth
                onChange={(e)=>setBody(e.target.value)}
            />
            <div className="actions">
                <button className="cancel" onClick={()=>onClickHandler(false)}>Discard</button>
                <button className="create" onClick={()=>onClickHandler(true)}>Create</button>
            </div>
        </div>            

    )
}