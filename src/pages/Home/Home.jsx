import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import { MainHeader } from "./components/MainHeader/MainHeader";
import ProductList from "./components/ProductList/ProductList";
import { SidebarCheckout } from "./components/SidebarCheckout/SidebarCheckout";

const Home = () => {

    const API_URL = 'https://vending-machine-test.vercel.app/api/products';

    const [ products, setProducts ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(API_URL)
                .then(res => {
                    if(!res.ok){
                        throw Error('Request error!');
                    };
                    return res.json();
                }).then(res => {
                    setIsLoading(false);
                    setError(null);
                    return setProducts(res.data);
                }).catch(err => {
                    setIsLoading(false);
                    return setError(err.message);
                })
        }, 1000)
    }, []);

    return(
        <Box display={ 'flex' } overflow={ 'hidden' }>
            <Box height={ '100vh' } width={ '85%' }>
                {/* HEADER SECTION */}
                <Box height={ '10vh' }>
                    <MainHeader />
                </Box>
                {/* PRODUCT LIST SECTION */}
                <Box height={'90vh'} sx={{ overflowY: 'scroll' }}>
                    <ProductList
                        products={ products }
                        isLoading={ isLoading }
                        error={ error } />
                </Box>
            </Box>

            {/* ORDERS SECTION */}
            <Box width={'15%'}>
                <SidebarCheckout />
            </Box>
        </Box>
    );
};

export default Home;