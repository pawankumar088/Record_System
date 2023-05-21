import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';
function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setnote] = useState({ title: "", description: "", tag: "" });

    const handleclick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag)
        setnote({ title: "", description: "", tag: "" });
    }
    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className="container my-3 ">
                <h2 className='text-center' color='pink'>Welcome To Record System</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label" color='MediumTurquoise'>Title</label>
                        <input type="text" className="form-control" my-10 id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label" color='MediumTurquoise'>Description</label>
                        <input type="text" className="form-control" id="description" rows="8" name="description" value={note.description} onChange={onchange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label" color='MediumTurquoise'>tag</label>
                        <input type="text" className="form-control" id="tag" rows="8" name="tag" value={note.tag} onChange={onchange} minLength={5} required />
                    </div>
                    <button type="button" class="btn btn-success" disabled={note.title.length < 5 || note.description.length < 5 || note.tag.length < 5} onClick={handleclick}> Add Note</button>
                </form>
            </div>
        </div >
    )
}
export default AddNote