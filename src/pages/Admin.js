import { Box, FormControl, FormGroup, FormLabel, Input, InputLabel } from "@mui/material";
import Layout from "../components/Layout/Layout";
import Login from "../components/Login";
import { LoginContext } from "../utils/LoginContext";
import { useState } from "react";
import AddProduct from "./AddProduct";

const Admin = () => {
    const [isLoginSuccessfull, setIsLoginSuccessfull] = useState(false);
    return (
        <>
            <Layout>
                <LoginContext.Provider value={{ isLoginSuccessfull, setIsLoginSuccessfull }}>
                    {
                        (!isLoginSuccessfull)
                            ?
                            <Login />
                            :
                            <AddProduct />
                    }
                </LoginContext.Provider>
            </Layout>
        </>
    )
}

export default Admin;