import React from 'react'

const MyButton = ({ label, onClick }) => {
    return (
        <button type='submit' id='my-button' onClick={onClick} >{ label }</button>
    )
}

export default MyButton;
