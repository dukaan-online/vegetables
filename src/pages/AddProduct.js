import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";
import { MenuList } from "../data/data";
import { useState } from "react";

const AddProduct = () => {
    const [userInput, setUserInput] = useState({
        id: 10,
        name: "",
        description: "",
        price: 0,
        image: ""
    })

    const get_user_input = (e) => {
        const { value, name } = e.target;
        setUserInput(() => {
            return {
                ...userInput,
                [name]: value
            }
        })
    }

    const get_image = (e) => {
        let image_file = e.target.files[0];
        setUserInput(() => {
            return {
                ...userInput,
                ["image"]: image_file
            }
        })
    }

    const submit_user_data = () => {
        const { id, name, description, price, image } = userInput;
        let image_extension = "";
        if (image) {
            image_extension = image.name.split('.')[1].toLowerCase();
            console.log("image_extension", image_extension);
        }
        if (name === "") {
            alert('Please enter product name!');
            return;
        }
        else if (description === "") {
            alert('Please enter product description!');
            return;
        } else if (price === "") {
            alert('Please enter product price!');
            return;
        } else if (image == undefined) {
            alert('Please upload product images!');
            return;
        } else if (!(['jpg', 'jpeg', 'png'].includes(image_extension))) {
            alert('Invalid Image type. Please select jpg/png images!');
            return;
        } else {
            MenuList.push(userInput);
            console.log("menu list ", MenuList);
            alert("Product added successfully!");
        }
    }



    return (
        <>
            <Layout>
                <Grid>
                    <Paper elevation={10} sx={{ p: 5, height: "80vh", width: 380, mt: -5, mb: 20, ml: "auto", mr: "auto" }}>
                        <Typography variant="h5">
                            Add Product
                        </Typography>
                        <TextField name="name" label='Name' placeholder="Product Name" fullWidth sx={{ mt: 5 }} onChange={get_user_input} required />
                        <TextField name="description" label='Description' placeholder="Product Description" fullWidth sx={{ mt: 5 }} onChange={get_user_input} required />
                        <TextField name="price" label='Price' type="number" placeholder="Product Price" fullWidth sx={{ mt: 5, mb: 2 }} onChange={get_user_input} required />
                        <Typography variant="text">
                            Upload Product Photo
                        </Typography>
                        <Button variant="contained" component="label" fullWidth sx={{ mt: 0 }}>
                            <input type="file" name="image" onChange={get_image} />
                        </Button>
                        <Button onClick={submit_user_data} type="submit" color="primary" variant="contained" fullWidth sx={{ mt: 5 }}>Add Product</Button>
                        {/* <Typography sx={{ mt: 2, fontSize:16 }}>Don't have an account?
                    <Link to="/register"> Register now </Link>
                </Typography> */}
                    </Paper>
                </Grid>
            </Layout>
        </>
    )

}
export default AddProduct;