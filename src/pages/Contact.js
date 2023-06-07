import { Box, Card, CardMedia, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";
import CallIcon from '@mui/icons-material/Call';
import StoreIcon from '@mui/icons-material/Store';
import shop_img_1 from "../images/shop1.jpg"
import shop_img_2 from "../images/shop2.jpg"
import shop_img_3 from "../images/shop3.jpg"

const Contact = () => {
    return (
        <Layout>
            <Box sx={{
                ml: 10,
                my: 5,
                color:"black",
                "& h4": {
                    fontWeight: "bold", mb: 2
                },
                textAlign: "justify",
                mr: 5,
                "@media (max-width:600px)": {
                    ml: 5,
                    textAlign: "justify",
                    mr: 5

                }
            }}>
                <Typography variant="h4">
                    Contact Us
                </Typography>

                <Container sx={{ml:""}}>
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner">
                            <div class="item active">
                                <CardMedia sx={{ maxHeight: "50vh", width: "100%",objectFit: "contain"  }} component={'img'} src={shop_img_1} alt="IMG1"></CardMedia>
                            </div>

                            <div class="item">
                                <CardMedia sx={{ maxHeight: "50vh", width: "100%",objectFit: "contain"  }} component={'img'} src={shop_img_2} alt="IMG1"></CardMedia>
                            </div>

                            <div class="item">
                                <CardMedia sx={{ maxHeight: "50vh", width: "100%",objectFit: "contain   " }} component={'img'} src={shop_img_3} alt="IMG1"></CardMedia>
                            </div>
                        </div>

                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </Container>
                <Typography sx={{ mt: 2,ml:"auto" }} >
                    A vegetable shop is a business that prepares and serves food and drinks to customers.[1] Meals are generally served and eaten on the premises
                </Typography>
            </Box>
            <Box sx={{
                m: 3,
                ml: 10,
                pb:15,
                width: "600px",
                "@media (max-width:600px)": {
                    width: "300px",
                    ml: 5,
                    pb:25
                }
            }}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: "black", color: "white" }} align="center">
                                    Contact Details:
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ pt: 1 }} /> +91 9891870274
                                </TableCell>
                            </TableRow>
                           
                            <TableRow>
                                <TableCell>
                                    <StoreIcon /> Mahadev Nagar, Manjri ( Hadapsar ) 412307
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    );
};

export default Contact;