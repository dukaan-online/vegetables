import { Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";

const UserContactForm = (props) => {
    const [userInput, setUserInput] = useState({
        name: "",
        email_id: "",
        contact_no: 0,
        address: ""
    })

    const { setCart, setProducts, setOpenPopup } = props;

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
        const { name, email_id, contact_no, address } = userInput;
        if (name === "") {
            alert('Please enter your name !');
            return;
        }
        else if (email_id === "") {
            alert('Please enter your email id !');
            return;
        } else if (contact_no === 0) {
            alert('Please enter your mobile number !');
            return;
        } else if (address === "") {
            alert('Please enter your address !');
            return;
        } else {
            alert("Order Placed successfully!");
            setProducts([]);
            setCart({});
            setOpenPopup(false);
            window.open("/vegetables", "_self")
        }
    }



    return (
        <>
            <Grid>
                <Paper elevation={10} sx={{
                    p: 5, height: "85vh", width: 380, mt: -5, mr: "auto",
                    "@media (max-width:600px)": {
                        height: "100%",
                        width: "100%",
                    }
                }}>
                    <TextField name="name" label='Name' placeholder="Your Name" fullWidth sx={{ mt: 5 }} onChange={get_user_input} required />
                    <TextField name="email_id" label='Email' placeholder="Your Email Id" fullWidth sx={{ mt: 5 }} onChange={get_user_input} required />
                    <TextField name="contact_no" label='MobileNo' type="number" placeholder="Your Mobile Number" fullWidth sx={{ mt: 5, mb: 2 }} onChange={get_user_input} required />
                    <TextField name="address" label='Address' placeholder="Your Delievery Address" fullWidth sx={{ mt: 3, mb: 2 }} multiline rows={3} onChange={get_user_input} required />
                    <p style={{ fontSize: "10px" }}>
                        <i>* Currently serving only in Manjri , Pune *</i>
                    </p>
                    <Button onClick={submit_user_data} type="submit" color="success" variant="contained" fullWidth>Place Order</Button>
                </Paper>
            </Grid>
        </>
    )

}
export default UserContactForm;