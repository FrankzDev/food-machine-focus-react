import { Box } from "@mui/system";

import { MainHeader } from "./components/MainHeader/MainHeader";
import ProductList from "./components/ProductList/ProductList";
import { SidebarCheckout } from "./components/SidebarCheckout/SidebarCheckout";

const Home = () => {
    return(
        <Box display={ 'flex' } overflow={ 'hidden' }>
            <Box height={ '100vh' } width={ '80%' }>
                {/* HEADER SECTION */}
                <Box height={ '72px' }>
                    <MainHeader />
                </Box>
                {/* PRODUCT LIST SECTION */}
                <Box sx={{ overflowY: 'scroll' }}>
                    <ProductList />
                </Box>
            </Box>

            {/* ORDERS SECTION */}
            <Box width={'20%'}>
                <SidebarCheckout />
            </Box>
        </Box>
    );
};

export default Home;