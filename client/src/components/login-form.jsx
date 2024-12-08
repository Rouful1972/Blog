import React from 'react';
import {Toaster} from "react-hot-toast";
//import Loading from "./loading.jsx";
import {useState} from "react";
//import {UserLoginRequest} from "../APIRequest/APIRequest.jsx";

const LoginForm = () => {
    let [loading, setLoading] = useState("d-none");
    const submitForm=async (event)=>{
        event.preventDefault();
        let formData=new FormData(event.target);
        let email=formData.get('email');
        setIsLoading("");
        let data=  await UserLoginRequest(email);
        setIsLoading("d-none");
        toast.success(data)
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-5">
                    <div className="card shadow-sm rounded-3 border-0 p-5">
                        <h3>Enter Your Email</h3>
                        <form onSubmit={submitForm}>
                            <input type="email" name="email" className="form-control mt-5"
                                   placeholder="Enter Your Email"/>
                            <button type="submit" className="btn w-100 mb-4 mt-3 btn-dark">Next</button>
                        </form>
                    </div>
                </div>
            </div>
            <div><Toaster position="bottom-center"/></div>
        </div>
    );
};

export default LoginForm;