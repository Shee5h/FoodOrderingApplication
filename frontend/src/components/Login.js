import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import AuthService from "../services/AuthService";
// import { RenderContext } from './RenderContext';
import "./Login.css";
import logo from "../images/Cibus_logo.png"
import { Link } from "react-router-dom";

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
    const [passwordShown, setPasswordShown] = useState(false);
    const [message, setMessage] = useState("");
    // const { render, setRender } = useContext(RenderContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        AuthService.login(data.email, data.password)
            .then(() => {
                fetch(`http://localhost:8080/api/user/${data.email}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.roles.some(role => role.name === "ROLE_ADMIN")) {
                            navigate("/adminBoard");
                        } else {
                            navigate("/mainPage");
                        }
                        console.log("something");
                    });
            })
            .catch(() => setMessage("El. paštas arba slaptažodis yra neteisingas"));
    };

    // password visibility toggle
    const togglePassword = (e) => {
        setPasswordShown(!passwordShown);
        e.preventDefault();
    }

    return (
        <>
            <div className="container-fluid login_bg_color">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-8 col-xs-8">
                        <div className="form-container">
                            <img src={logo} alt="cibus logo" className="logo_config"></img>

                            <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>

                                <h4 className="form_name">Prisijungimas</h4>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                                    <input {...register("email", { required: true })} type="email" className="form-control" placeholder="El. paštas" />
                                    {errors?.email?.type === "required" && <p className="login_error_message">Įveskite el. paštą</p>}
                                </div>
                                <div className="form-group">
                                    <FontAwesomeIcon icon={faLock} className="input-icon" />
                                    <button onClick={togglePassword} className="password-show-icon btn">{passwordShown ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</button>

                                    <input {...register("password", { required: true })} type={passwordShown ? "text" : "password"} className="form-control" placeholder="Slaptažodis" />
                                    {errors?.password?.type === "required" && <p className="login_error_message">Įveskite slaptažodį</p>}
                                    {message && message}

                                    <span className="forgot">Naujas vartotojas? <Link to={"/register"}>Registruokites</Link></span>
                                </div>
                                <button type="submit" className="btn signin">Prisijungti</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

}