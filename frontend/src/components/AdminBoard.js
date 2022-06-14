import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import InstitutionService from "../services/InstitutionService";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
// import logo from "../images/Cibus_logo.png";
// import { uuid } from "uuidv4";
import { v4 as uuid } from 'uuid';
import "./AdminBoard.css"

export default function AdminBoard() {

    const [institutions, setInstitutions] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
    // const value = useContext(institutions);
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

        // setForceRender(!forceRender)
    }

    function refreshPage() {
        window.location.reload(false);
      }

    return (
        <div>

            <ul>
                <li>Įstaigos</li>
                <li>Meniu</li>
                <li>Kategorijos</li>
            </ul>

            <div className="container-fluid">
                {/* <div><strong>Email: </strong>{user.email}</div>
                <div><strong>Id: </strong>{user.id}</div>
                <div>{user.username}</div>
                <div>{user.roles}</div> */}

                <h4 className="af_name container">Pridėti įstaigą:</h4>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-11 px-0 ">
                            <div className="form-container mt-0 px-0">
                                <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="form-group col-4">
                                            {/* <FontAwesomeIcon icon={faUser} className="cf-icon" /> */}
                                            <input {...register("codeName", { required: true })} type="number" className="form-control p-0" placeholder="Įmonės kodas" />
                                            {errors?.codeName?.type === "required" && <p className="login_error_message">Įveskite įmonės kodą</p>}

                                        </div>
                                        <div className="form-group col-4">
                                            {/* <FontAwesomeIcon icon={faUser} className="cf-icon" /> */}

                                            <input {...register("businessName", { required: true })} type="text" className="form-control p-0" placeholder="Pavadinimas" />
                                            {errors?.businessName?.type === "required" && <p className="login_error_message">Įveskite įst. pavadinimą</p>}

                                        </div>
                                        <div className="form-group col-4">
                                            {/* <FontAwesomeIcon icon={faLock} className="cf-icon" /> */}

                                            <input {...register("address", { required: true })} type="text" className="form-control p-0" placeholder="Adresas" />
                                            {errors?.address?.type === "required" && <p className="login_error_message">Įveskite įst. adresą</p>}
                                            {/* {message && message} */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button type="submit" className="btn signin" onClick={refreshPage}>Pridėti</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <table className="table table-striped container">
                    <tbody>
                        {institutions.map((institution) => {
                            return (
                                <tr key={institution.id + uuid()}>
                                    <td>{institution.id}</td>
                                    <td>{institution.codeName}</td>
                                    <td>{institution.businessName}</td>
                                    <td>{institution.address}</td>
                                    <td>
                                        <button className="btn btn-danger mr-2">Delete</button>
                                        <button className="btn btn-warning">Edit</button>
                                        </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div >

        </div>
    )
}