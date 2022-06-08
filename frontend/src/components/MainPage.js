import React, { useEffect, useState } from "react";
import AuthService from "../services/AuthService";

export default function MainPage() {

    const user = AuthService.getCurrentUser();
    const [noUser, setNoUser] = useState(true);

    useEffect(() => {
        if (user === null) {
            setNoUser(true);
        } else {
            setNoUser(false);
        }
    }, [])

    return (
        <>

            <div className="container mt-5">
                <div style={{ display: noUser ? "contents" : "none" }}><strong>You're signed out</strong></div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a short card.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}