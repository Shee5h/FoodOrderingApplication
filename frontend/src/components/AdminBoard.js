import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import InstitutionService from "../services/InstitutionService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import logo from "../images/Cibus_logo.png";

export default function AdminBoard() {

    const [institutions, setInstitutions] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
    const user = AuthService.getCurrentUser();
    const navigate = useNavigate();

    // a function to check if the user is an administrator
    useEffect(() => {
        if (user !== null) {
            if (!(user.roles.includes("ROLE_ADMIN"))) {
                console.log(user)
                alert("You are not an administrator!")
                navigate("/mainPage")
            }
        } else {
            navigate("/")
        }
    })

    // function to get all institutions
    useEffect(() => {
        InstitutionService.getAllInstitutions().then((response) => {
            setInstitutions(response.data)
        })
    }, [])
    // submit function
    const onSubmit = data => {
        InstitutionService.saveInstitution(data);
        console.log(data);
    }

    return (
        <div>

            <div className="container-fluid">
                <div><strong>Email: </strong>{user.email}</div>
                <div><strong>Id: </strong>{user.id}</div>
                <div>{user.username}</div>
                <div>{user.roles}</div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                        <div className="form-container admin_form">
                            <img src={logo} alt="cibus logo" className="logo_config"></img>

                            <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>

                                <h4 className="form_name">Pridėti įstaigą:</h4>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faUser} className="input-icon" />

                                    <input {...register("codeName", { required: true })} type="number" className="form-control" placeholder="Įmonės kodas" />
                                    {errors?.codeName?.type === "required" && <p className="login_error_message">Įveskite įmonės kodą</p>}

                                </div>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faUser} className="input-icon" />

                                    <input {...register("businessName", { required: true })} type="text" className="form-control" placeholder="Pavadinimas" />
                                    {errors?.businessName?.type === "required" && <p className="login_error_message">Įveskite įst. pavadinimą</p>}

                                </div>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faLock} className="input-icon" />

                                    <input {...register("address", { required: true })} type="text" className="form-control" placeholder="Adresas" />
                                    {errors?.address?.type === "required" && <p className="login_error_message">Įveskite įst. adresą</p>}
                                    {/* {message && message} */}
                                </div>
                                <button type="submit" className="btn signin">Pridėti</button>
                            </form>
                        </div>
                    </div>
                </div>

                {institutions.map((institution) => {
                    return (
                        <>
                            <div key={institution.id}>
                                <div>{institution.id}</div>
                                <div>{institution.codeName}</div>
                                <div>{institution.businessName}</div>
                                <div>{institution.address}</div>
                            </div>
                        </>
                    )
                })}

            </div >

        </div>
    )
}