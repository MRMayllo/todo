import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/Alert/alertContext'
import { FirebaseContext } from '../context/Firebase/firebaseContext'

const Form = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()
        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Noted', 'success')
           }).catch(() => {
            alert.show('Smt went wrong', 'danger')
            })
            setValue('')
        } else  {
            alert.show('Enter text please')
        }

    }


    return (
        <form onSubmit={submitHandler}>
            <div className="form-group mt-3" >
                <input
                    type="text"
                    className="form-control"
                    placeholder="Write something in me please"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </div>
        </form>
    )
}

export default Form
