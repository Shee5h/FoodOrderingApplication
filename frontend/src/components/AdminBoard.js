import React from "react";
import AuthService from "../services/AuthService";

export default function AdminBoard() {

    const user = AuthService.getCurrentUser();
    console.log(user);
    // console.log(AuthService.localStorage.getItem("user"));

    return (
        <>
            <div><strong>Email: </strong>{user.email}</div>
            <div><strong>Id: </strong>{user.id}</div>
            <div>{user.username}</div>
        </>
    )
}