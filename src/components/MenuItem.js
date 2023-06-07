import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../utils/CartContext";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MenuItem = ({ menuitem }) => {

    const [isAdding, setisAdding] = useState(false);

    const { cart, setCart } = useContext(CartContext);

    const addCart = (e, item_id) => {
        let _cart = { ...cart };
        if (!_cart.items) {
            _cart.items = {};
        }
        if (!_cart.items[item_id]) {
            _cart.items[item_id] = 1
        }
        else {
            _cart.items[item_id] += 1
        }

        if (!_cart.total_items) {
            _cart.total_items = 0
        }

        _cart.total_items += 1

        setCart(_cart);

        setisAdding(true);

        setTimeout(() => {
            setisAdding(false);
        }, 1000);
    }

    return (
        <>
            <Card key={menuitem.name} sx={{ maxWidth: "360px", m: 2 }}>

                <CardMedia sx={{ minHeight: "300px", maxHeight: "300px", minWidth: "360px" }} component={'img'} src={menuitem.image} alt={menuitem.name}></CardMedia>
                <CardContent>
                    <Box sx={{ display: "flex", alignItems: "center",textAlign:"center", justifyContent: "space-between" }}>
                        <Typography variant="h3" component={"div"} gutterBottom>{menuitem.name}</Typography>
                        <Typography variant="h3"  component={"div"} gutterBottom>{menuitem.description}</Typography>
                    </Box>
                    <Typography variant="h4" sx={{ mt: 1 }}>Rs. {menuitem.price}</Typography>
                </CardContent>
                <CardActions sx={{ display: "flex" }}>
                    <Button disabled={isAdding} color="primary" size="large" variant="text" onClick={(e) => addCart(e, menuitem.id)}
                        sx={{
                            color: "white",
                            bgcolor: "green",
                            fontWeight:"bold",
                            ":hover": {
                                color: "white", bgcolor: "darkgreen", transform: "translateX(5px)",
                                transition: "all 400ms"
                            },
                        }} >{isAdding ? 'ADDED' : 'ADD TO CART'}</Button>
                    <Box component={"div"}>
                        {(cart && cart.items && cart.items[menuitem.id]) ?
                            <Button color="primary" size="small" sx={{ justifyContent: "space-evenly" }}>
                                <CheckCircleIcon />
                            </Button>
                            :
                            <Typography variant="text"></Typography>
                        }
                    </Box>
                </CardActions>

            </Card >
        </>
    )
}

export default MenuItem;