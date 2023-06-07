import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";

const About = () => {
return(
    <Layout>
        <Box sx={{
            my:12,
            p:2,
            pb:25,
            textAlign:"center",
            color:"black",
            "& h4":{
                fontWeight:"bold",
            },
            "& p":{
                textAlign: "justify", 
                my:2,
            },
            "@media (max-width:600px)":{
                mt:0,
                "& h4":{
                    fontSize:"1.3rem",
                }
            }
            
        }}>
            <Typography variant="h4">
                Welcome to our shop
            </Typography>
            <p>
            A Vegetable shop i is a business that prepares and serves food.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.    
            </p>
            <br />
            <p>
            A Vegetable shop is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.
            </p>
        </Box>
    </Layout>
);
};

export default About;