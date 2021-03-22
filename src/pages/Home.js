import React, { useContext, useEffect } from 'react'
import Form from '../components/Form'
import Loader from '../components/Loader'
import Notes from '../components/Notes'
import { FirebaseContext } from '../context/Firebase/firebaseContext'

const Home = () => {
    const { notes, fetchNotes, removeNote } = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <Form />

            <hr />

            {notes.length === 0 ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}


        </>
    )
}

export default Home
