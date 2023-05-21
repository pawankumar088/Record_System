import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updatenote} = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title text-center" color='pink'>{note.title}</h5>
                    <p className="card-text">{note.tag}</p>
                </div>
                <p className="card-text">{note.description}</p>
                <div className="container">
                    <i className="far fa-trash-alt mx-3" onClick={() => { deleteNote(note._id) }}></i>
                    <i className="far fa-edit mx-3" onClick={()=>{updatenote(note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
