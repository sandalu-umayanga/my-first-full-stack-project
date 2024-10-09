import React from "react"
import "../styles/Notes.css"


function Notes({note, onDelete}) {
    const formatDate = new Date(note.created_at).toLocaleDateString("en-US");

    return (
        <div className="note-container">
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formatDate}</p>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    )
}

export default Notes;