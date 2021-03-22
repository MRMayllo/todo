import React from 'react'



const Notes = ({ notes, onRemove }) => {

   

    return (
        <>
            <ul className="list-group">
                {notes.map(note => (
                    <li className={'list-group-item note note-enter-active'}>
                        <div className>
                            <strong>{note.title}</strong>
                            <small> {new Date().toLocaleDateString()}  {new Date().toLocaleTimeString()}</small>
                        </div>

                        <button
                            type="button"
                            className="btn btn-outline-danger btn-sm "
                            onClick={() => { onRemove(note.id)}}>
                            Delete
                             </button>

                    </li>
                ))}
            </ul>
        </>
    )
}

export default Notes
