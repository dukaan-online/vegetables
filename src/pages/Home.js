import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import BannerImage from "../images/banner8.jpg";
import "../styles/HomeStyle.css";

const Home = () => {
    return (
        <Layout>
            <div className="home" style={{
                backgroundImage: `url(${BannerImage})`, backgroundSize:"cover", backgroundPosition:"left bottom"}}>
                <div className="homeHeader">
                    <h1>
                        Fresh Vegetables Shop
                    </h1>
                    <p>
                        Clean Vegetables in Manjri
                    </p>
                    <p style={{ fontSize: "20px" }}>
                        * Currently serving only in Manjri , Pune *
                    </p>
                    <Link to="/menu">
                        <button>Order now</button>
                    </Link>

                </div>
            </div>
        </Layout>
    );
};

export default Home;