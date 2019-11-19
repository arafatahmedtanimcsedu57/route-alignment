import React from 'react'
import { useHistory } from "react-router-dom"

import EditImg from './../assets/ic_edit.svg'

function EditButton(props) {
    let history = useHistory();

    function handleClick() {
        history.push(props.path);
    }

    return (
        <button
            className="edit"
            type="button"
            onClick={handleClick}
        >
            <img src={EditImg} alt="edit button" /> এডিট করুন
        </button>
    );
}

export default EditButton