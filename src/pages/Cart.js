import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { CartContext } from "../utils/CartContext";
import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import { MenuList } from "../data/data";
import empty_cart from "../images/empty-cart.png"
import DeleteIcon from '@mui/icons-material/Delete';
import UserContactPopup from "../components/UserContactPopup";
import UserContactForm from "../components/UserContactForm";

const Cart = () => {

    let grand_total = 0;
    const { cart, setCart } = useContext(CartContext);
    const [products, setProducts] = useState();
    const [openPopup, setOpenPopup] = useState(false);

    // const [priceFetched, togglePriceFetched] = useState(false);

    useEffect(() => {
        // console.log("cart items",cart.items);
        if (cart) {
            if (cart.items) {
                var products = [];
                const cart_items = Object.keys(cart.items);
                for (var c = 0, size = cart_items.length; c < size; c++) {
                    var cart_item_id = cart_items[c];
                    for (var i = 0, size = MenuList.length; i < size; i++) {
                        var menu_item = MenuList[i];
                        if (cart_item_id == menu_item.id) {
                            products.push(menu_item);
                        }
                    }
                }
                setProducts(products);
            }
        }
    }, [cart]);

    // console.log("products", products);
    // useEffect(()=>{
    //     if (!cart.items) {
    //         return ;
    //     }

    // if (priceFetched) {
    //     return ;
    // }

    //     // fetch('api/products/cart-items', {
    //     //     method: 'POST',
    //     //     headers:  {
    //     //         'Content-Type': 'application/json',
    //     //     },
    //     //     body: JSON.stringify({ids: Object.keys(cart.items)})
    //     // }).then(res => res.json())
    //     // .then(products => {
    //     //     setProducts(products);
    //            togglePriceFetched(true);
    //     // })

    // },[cart]);

    const incrementQty = (productId) => {
        // console.log("inside increment qty");
        const _cart = { ...cart }
        _cart.items[productId] += 1;
        _cart.total_items += 1;
        setCart(_cart);
    }


    const decrementQty = (productId) => {
        // console.log("inside decrement qty");
        const _cart = { ...cart }
        if (_cart.items[productId] == 1) {
            return;
        }
        _cart.items[productId] -= 1;
        _cart.total_items -= 1;
        setCart(_cart);
    }

    const getSum = (productId, price) => {
        const sum = price * getQty(productId);
        grand_total += sum;
        return sum;
    }

    const deleteItem = (productId) => {
        const _cart = { ...cart };
        _cart.total_items -= _cart.items[productId];
        delete _cart.items[productId];
        setCart(_cart);

        // const updatedProducts = Object.keys(products).filter((product) => product !== productId);
        // setProducts(updatedProducts);

    }

    const placeOrder = () => {
        // window.alert("Order Placed Successfully!!")
        if (cart.total_items > 0) {
            setOpenPopup(true);
        }
        else {
            alert("Please add atleast one item in the cart !");
        }
        // setProducts([]);
        // setCart({});

    }

    const getQty = (productId) => {
        return cart.items[productId];
    }



    return (

        !products
            ?

            <Layout>
                <Container sx={{ pb: 14 }}>
                    <CardMedia sx={{
                        mt: 10
                    }} component={'img'} src={empty_cart} alt="empty_cart"></CardMedia>
                </Container>
            </Layout>
            :
            <Layout>
                <Container sx={{ pb: 14 }}>
                    <Typography variant="h4" sx={{ mt: 6, mb: 6, fontWeight: "bold" }}>Cart Items</Typography>
                    <ul style={{ listStyle: "none" }}>
                        {products.map(item => {
                            return (
                                <li key={item.id} style={{ marginBottom: 12 }}>
                                    <Box component={"div"} sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        "@media (max-width:600px)": {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            ml: -2,
                                            mr: 2,
                                            border: 2,
                                            borderRadius: 4,
                                            borderColor: "goldenrod",
                                        }
                                    }}>
                                        <Box component={"div"} sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            width: "25%",
                                            "@media (max-width:600px)": {
                                                p: 2,
                                                width: "100%",
                                                alignItems: "center",
                                                ml: 5
                                            }
                                        }}>
                                            <CardMedia sx={{ minWidth: "100px", minHeight: "100px", maxHeight: "100px", maxWidth: "100px", objectFit: "cover" }} component={'img'} src={item.image} alt={item.name}></CardMedia>
                                            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                                            <Typography variant="text" sx={{
                                                fontWeight: "bold", px: 4,
                                                "@media (max-width:600px)": {
                                                    fontSize: 20,
                                                    fontWeight: "bold",
                                                    px: 4
                                                }
                                            }}>
                                                {item.name}
                                            </Typography>
                                            <Typography variant="text" sx={{
                                                fontWeight: "bold", px: 4,
                                                "@media (max-width:600px)": {
                                                    fontSize: 20,
                                                    fontWeight: "bold",
                                                    px: 4
                                                }
                                            }}>
                                                ({item.description})
                                            </Typography>
                                            </Box>
                                        </Box>
                                        <Box component={"div"} sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            "@media (max-width:600px)": {
                                                display: "flex",
                                                alignItems: "center",
                                                mt: -2,
                                            }
                                        }}>
                                            <Button onClick={() => { decrementQty(item.id) }} size="small" variant="text" sx={{
                                                px: 1, m: 4, bgcolor: "goldenrod", color: "black", ":hover": { bgcolor: "red" },
                                                "@media (max-width:600px)": {
                                                    height: 30,
                                                    fontSize: 35,
                                                }
                                            }}>-</Button>
                                            <Typography variant="text" sx={{
                                                fontWeight: "bold",
                                                "@media (max-width:600px)": {
                                                    fontSize: 20,
                                                    color: "black",
                                                    p: 1
                                                }
                                            }}>
                                                {getQty(item.id)}
                                            </Typography>
                                            <Button onClick={() => { incrementQty(item.id) }} size="small" variant="text" sx={{
                                                px: 1, m: 4, bgcolor: "goldenrod", color: "black", ":hover": { bgcolor: "green" },
                                                "@media (max-width:600px)": {
                                                    height: 30,
                                                    fontSize: 25
                                                }
                                            }}>+</Button>
                                        </Box>

                                        <Typography variant="text" sx={{
                                            fontWeight: "bold",
                                            "@media (max-width:600px)": {
                                                fontSize: 20,
                                                fontWeight: "bold",
                                                mt: -1
                                            }
                                        }}>Rs.{getSum(item.id, item.price)}</Typography>

                                        <DeleteIcon onClick={() => { deleteItem(item.id) }} sx={{
                                            p: 1, fontSize: 50,
                                            ":hover": { bgcolor: "white", color: "red", border: "1px solid black", borderRadius: 3 },
                                            "@media (max-width:600px)": {
                                                fontSize: 50,
                                                mt: 1,
                                                ":hover": { bgcolor: "white", color:"red" , border: "1px solid black", borderRadius: 3 }
                                            }
                                        }} />

                                    </Box>
                                </li>
                            )
                        }
                        )}
                    </ul>

                    <Box component={"hr"} sx={{ my: 3 }}></Box>

                    <Box component={"div"} sx={{
                        textAlign: "right", fontWeight: "bold",
                        "@media (max-width:600px)": {
                            fontSize: 20
                        }
                    }}>
                        Grand Total: Rs. {grand_total}
                    </Box>

                    <Box component={"div"} sx={{ textAlign: "right", my: 3 }}>
                        <Button onClick={placeOrder} size="small" variant="text" sx={{
                            px: 2, color: "white", bgcolor: "green", borderRadius: 0, fontWeight: "bold", ":hover": { bgcolor: "darkgreen" },
                            "@media (max-width:600px)": {
                                fontSize: 20
                            }
                        }}>Check Out</Button>
                    </Box>
                    <UserContactPopup title="Contact Details" openPopup={openPopup} setOpenPopup={setOpenPopup}>
                        <UserContactForm setCart={setCart} setProducts={setProducts} setOpenPopup={setOpenPopup} />
                    </UserContactPopup>
                </Container>
            </Layout>
    )
}

export default Cart;