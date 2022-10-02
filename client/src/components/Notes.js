import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import { useNavigate } from 'react-router-dom'
import Noteitem from './Noteitem';
import AddNote from './AddNote';
const Notes = () => {
  const [note, setnote] = useState({ id: " ", etitle: "", edescription: "", etag: "" });
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes()
    }
    else {
      navigate("/Login");
    }
    // eslint-disable-next-line
  }, [])
  const ref = useRef(null)
  const refclose = useRef(null)

  const updatenote = (currentNote) => {
    ref.current.click();
    setnote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  }
  const handleClick = () => {
    console.log("Handleclick was click", note);
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refclose.current.click();

  }
  return (
    <c>
      <AddNote />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel" color='pink' >Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label" color='MediumTurquoise'>Title</label>
                  <input type="text" className="form-control" my-10 id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onchange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label" color='MediumTurquoise'>Description</label>
                  <input type="text" className="form-control" id="edescription" rows="8" name="edescription" value={note.edescription} onChange={onchange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label" color='MediumTurquoise'>tag</label>
                  <input type="text" className="form-control" id="etag" rows="8" name="etag" value={note.etag} onChange={onchange} minLength={5} required />
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 5 || note.edescription.length < 5 || note.etag.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>

            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 text-center">
        <h2 color='MediumTurquoise'>Your Notes</h2>
        <div className="container ">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updatenote={updatenote} note={note} />
        })}
      </div>
    </c>
  )
}

export default Notes
