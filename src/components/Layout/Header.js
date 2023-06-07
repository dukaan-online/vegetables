import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import "../../styles/HeaderStyle.css";
import { useContext, useState } from 'react';
import cart from "../../images/cart.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../utils/CartContext';


const Header = () => {
    const { cart } = useContext(CartContext);

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography color={"goldenrod"} var="h6" component={"div"} sx={{ flexGrow: 1, my: 2, fontSize: "2rem" }}>
                <FastfoodIcon />
                My Vegetable Shop
            </Typography>
            <Divider />
            <ul className='mobile-navigation'>
                <li>
                    <NavLink activeclassname="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={"/checkorder"}>Check Your Order</NavLink>
                </li>
                <li>
                    <NavLink to={"/admin"}>Admin Panel</NavLink>
                </li>
            </ul>
        </Box>
    );


    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
                    <Toolbar>
                        <IconButton color='inherit' aria-label='open drawer' edge="start" sx={{ mr: 2, display: { sm: 'none' } }} onClick={handleDrawer}>
                            <MenuIcon sx={{fontSize:25}} />
                        </IconButton>
                        <Typography color={"goldenrod"} var="h6" component={"div"} sx={{ flexGrow: 1, fontSize: "2rem" }}>
                            <FastfoodIcon />
                            My Vegetable Shop
                        </Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <NavLink activeclassname="active" to={"/"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/menu"}>Menu</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"}>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/checkorder"}>Check Your Order</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/admin"}>Admin Panel</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/cart"}>
                                        <Box component={"div"} sx={{
                                            background: 'goldenrod',
                                            display: 'flex',
                                            padding: '0px 1px',
                                            borderRadius: '50px'
                                        }}>{
                                                cart
                                                    ?
                                                    <Typography component={"span"} sx={{ ml: 2, color: 'black', fontWeight: "bold", fontSize: "15px" }}>{cart.total_items ? cart.total_items : 0}</Typography>
                                                    :
                                                    <Typography component={"span"} sx={{ ml: 2, color: 'black', fontWeight: "bold", fontSize: "15px" }}>0</Typography>
                                            }
                                            <ShoppingCartIcon sx={{ mr: 1, ml: 1, mt: 0.5, color: 'black' }} />
                                        </Box>
                                    </NavLink>
                                </li>
                            </ul>
                        </Box>
                        <Box sx={{ display: { xs: "block", sm: "none" } }}>
                            <ul className='mobile-cart'>
                                <li >
                                    <NavLink to={"/cart"}>
                                        <Box component={"div"} sx={{
                                            background: 'goldenrod',
                                            display: 'flex',
                                            padding: '0px 1px',
                                            borderRadius: '50px'
                                        }}>{
                                                cart
                                                    ?
                                                    <Typography component={"span"} sx={{ ml: 2, color: 'black', fontWeight: "bold", fontSize: "15px" }}>{cart.total_items ? cart.total_items : 0}</Typography>
                                                    :
                                                    <Typography component={"span"} sx={{ ml: 2, color: 'black', fontWeight: "bold", fontSize: "15px" }}>0</Typography>
                                            }
                                            <ShoppingCartIcon sx={{ mr: 1, ml: 1, mt: 0.5, color: 'black' }} />
                                        </Box>
                                    </NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>

                </AppBar>

                <Box component="nav">
                    <Drawer variant="temporary" open={mobileOpen}
                        onClose={handleDrawer}
                        sx={{
                            display: { sx: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                width: "240px",
                                boxSizing: "border-box"
                            }
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box>
                    <Toolbar />
                </Box>
            </Box>
        </>
    );

};

export default Header;