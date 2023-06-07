import { Box} from "@mui/material";
import Layout from "../components/Layout/Layout";
import { MenuList } from "../data/data";
import MenuItem from "../components/MenuItem";

const Menu = () => {
return(
    <Layout>
        <Box sx={{pb:25,display:"flex", flexWrap:"wrap",justifyContent:"center"}}>
            { MenuList.map(menu => (
                <MenuItem menuitem={menu} key={menu.id} />
                ))
            }
        </Box>
    </Layout>
);
};

export default Menu;