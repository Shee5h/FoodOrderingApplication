import React from "react";
import InstitutionService from "../../services/InstitutionService";

export default function DeleteInstitution(props) {

    function deleteInstitution() {
        InstitutionService.deleteInstitution(props.id);
        console.log(props.id);
        window.location.reload(false);
    }

    return (
        <>
            <button className="btn btn-danger mr-2" onClick={deleteInstitution}>Delete</button>
        </>
    )
}