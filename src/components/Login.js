import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { creds } from "../data/data";
import { LoginContext } from "../utils/LoginContext";

const Login = () => {

    const [userInput, setUserInput] = useState({
        username: "",
        password: ""
    })

    const { isLoginSuccessfull, setIsLoginSuccessfull } = useContext(LoginContext);

    const get_user_input = (e) => {
        const { value, name } = e.target;
        setUserInput(() => {
            return {
                ...userInput,
                [name]: value
            }
        })
    }

    const submit_user_data = () => {
        const { username, password } = userInput;
        if (username === "") {
            alert('Please enter username!');
            return;
        }
        else if (password === "") {
            alert('Please enter password!');
            return;
        } else {
            if (creds.username === username && creds.password === password) {
                alert("Login Successfull!");
                setIsLoginSuccessfull(true);
            } else {
                alert("Invalid Username or Password!");
                return;
            }
        }
    }

    return (
        <Grid>
            <Paper elevation={10} sx={{ p: 5, height: "70vh", width: 380, m: "20px auto" }}>
                <Typography variant="h5">
                    Sign In
                </Typography>
                <TextField name="username" label='UserName' placeholder="UserName" fullWidth sx={{ mt: 5 }} onChange={get_user_input} required />
                <TextField name="password" label='Password' placeholder="Password" type="password" fullWidth sx={{ mt: 5 }} onChange={get_user_input} required />
                <Button onClick={submit_user_data} type="submit" color="primary" variant="contained" fullWidth sx={{ mt: 5,":hover":{bgcolor:"green"} }}>Sign In</Button>
                {/* <Typography sx={{ mt: 2, fontSize:16 }}>Don't have an account?
                    <Link to="/register"> Register now </Link>
                </Typography> */}
            </Paper>
        </Grid>

    )
}

export default Login;