import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";

const CheckOrder = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [userInput, setUserInput] = useState({
        email: "",
    })
    const [editId, setEditId] = useState(-1);
    const [status, setStatus] = useState("Pending");

    useEffect(() => {

    }, []);

    const get_user_input = (e) => {
        const { value, name } = e.target;
        setUserInput(() => {
            return {
                ...userInput,
                [name]: value
            }
        })
    }

    const check_orders = () => {
        const { email } = userInput;
        if (email === "") {
            alert('Please enter your email id !');
            return;
        }
        else {
            let isMounted = true;
            document.title = "Orders";

            if (isMounted) {
                isMounted = true;
                setOrders([1, 2, 3, 4]);
                setLoading(false);
            }

            return () => {
                isMounted = false;
            };
        }
    }

    const handleEdit = (id) => {
        // Get status from db for this id and set to status.
        setStatus(status); //temporary
        setEditId(id.item);
    }

    const handleUpdate = (id) => {
        alert("Status Updated to - " + status);
        // Call put api to update the status in db.
        setStatus(status); //temporary
        setEditId(-1);
    }

    return (
        <Layout>
            <Container sx={{ color: "black" }}>
                <Box sx={{ display: "flex", width: "max-content" }}>
                    <Typography variant="h4" sx={{ mt: 3, mb: 3, fontWeight: "bold" }}>Check Orders:</Typography>
                </Box>
                <Box sx={{ display: "flex", width: "max-content" }}>
                    <TextField name="email" label='Your Email Id:' placeholder="Your Email Id" sx={{ mb: 3 }} onChange={get_user_input} fullWidth required />
                    <Button onClick={check_orders} type="submit" variant="contained" sx={{ ml: 5, mb: 3, fontSize: 10, fontWeight: "bold", bgcolor: "goldenrod", ":hover": { bgcolor: "green" } }}>Submit</Button>
                </Box>
                {(loading) ? <Box sx={{ mt: "57vh" }}></Box> :
                    <Box sx={{ pb: 5 }}>
                        <TableContainer component={Paper} sx={{ maxHeight: "60vh" }}>
                            <Table stickyHeader aria-label="order table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "bold", p: 1, bgcolor: "goldenrod" }}>
                                            Order Id
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold", p: 0, textAlign: "left", bgcolor: "goldenrod" }}>
                                            Item Name - Qty - Item Amount
                                        </TableCell>

                                        <TableCell sx={{ fontWeight: "bold", p: 1, textAlign: "center", bgcolor: "goldenrod" }}>
                                            Order Amount
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold", p: 1, textAlign: "center", bgcolor: "goldenrod" }}>
                                            Address
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold", p: 1, textAlign: "center", bgcolor: "goldenrod" }}>
                                            Status
                                        </TableCell>
                                        <TableCell sx={{ fontWeight: "bold", p: 1, textAlign: "center", bgcolor: "goldenrod" }}>
                                            Order Placed On:
                                        </TableCell>
                                        {userInput.email === "admin" ?
                                            <TableCell sx={{ fontWeight: "bold", p: 1, textAlign: "center", bgcolor: "goldenrod" }}>
                                                Action:
                                            </TableCell>
                                            :
                                            ''
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        orders.map((item) => {
                                            return (
                                                <TableRow key={item}>
                                                    <TableCell>
                                                        {item}
                                                    </TableCell>
                                                    <TableCell sx={{ p: 0 }}>
                                                        {["Tomato 250gm", "Potato 500gm", "Onion 1kg"].map((desc) => {
                                                            return (
                                                                <TableRow key={desc}>
                                                                    <TableCell sx={{ p: 1, textAlign: "center" }}>
                                                                        {desc}
                                                                    </TableCell>
                                                                    <TableCell sx={{ p: 1, textAlign: "center" }}>
                                                                        1
                                                                    </TableCell>
                                                                    <TableCell sx={{ p: 1, textAlign: "center" }}>
                                                                        Rs. 30
                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        })}
                                                    </TableCell>
                                                    <TableCell sx={{ textAlign: "center" }}>
                                                        Rs. 90
                                                    </TableCell>
                                                    <TableCell sx={{ textAlign: "center" }} >
                                                        Flat No 007, ABC Building, Near Main Bazaar, Hadapsar Gadital Bus Stop, 412307, Pune
                                                    </TableCell>
                                                    {item === editId ?
                                                        <TableCell sx={{ p: 0, textAlign: "center" }} >
                                                            <TextField name="status" value={status} label='Status' sx={{ width: "100px" }} placeholder="Status" onChange={e => setStatus(e.target.value)} />
                                                        </TableCell>
                                                        :
                                                        <TableCell sx={{ p: 0, textAlign: "center" }} >
                                                            {status}
                                                            {/* temporary use loop value which is coming from db. */}
                                                        </TableCell>
                                                    }
                                                    <TableCell sx={{ p: 1, textAlign: "center" }} >
                                                        28-05-2023
                                                    </TableCell>
                                                    {userInput.email === "admin" ?
                                                        <TableCell sx={{ p: 1, textAlign: "center" }} >
                                                            {item === editId ?
                                                                <Button color="primary" size="small" variant="text" onClick={() => handleUpdate({ item })}
                                                                    sx={{
                                                                        color: "black",
                                                                        bgcolor: "goldenrod",
                                                                        ":hover": {
                                                                            bgcolor: "green"
                                                                        }
                                                                    }} >
                                                                    Update
                                                                </Button>
                                                                :
                                                                <Button color="primary" size="small" variant="text" onClick={() => handleEdit({ item })}
                                                                    sx={{
                                                                        color: "black",
                                                                        bgcolor: "goldenrod"
                                                                    }} >
                                                                    Edit
                                                                </Button>
                                                            }
                                                        </TableCell>
                                                        :
                                                        ''
                                                    }
                                                </TableRow>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                }
            </Container>
        </Layout>
    )
}

export default CheckOrder;