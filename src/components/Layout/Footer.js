import { Box, Typography } from "@mui/material";
import { Instagram } from "@mui/icons-material";
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
return (
    <>
    <Box sx={{color:"white",bgcolor:"black",textAlign:"center",p:3}}>
        <Box sx={{
            my:3,
            "& svg":{
                fontSize:"60px",
                mr:2,
                cursor:"pointer",
                },
            "& svg:hover":{
                color:"goldenrod",
                transform:"translateX(5px)",
                transition:"all 400ms"
            }
        }}>
            <Instagram />
            <YouTubeIcon />

        </Box>
        <Typography variant="h5" sx={{
            "@media (max-width):600px": {
                fontSize : "1 rem",
            }, 
            }}>
            All Rights Reserved &copy; Mohit
        </Typography>
    </Box>
    </>
)

};

export default Footer;