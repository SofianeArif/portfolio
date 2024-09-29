import * as React from 'react';
import Box from '@mui/material/Box';
import MessageIcon from '@mui/icons-material/Message';
import {AppProvider} from '@toolpad/core/AppProvider';
import {DashboardLayout} from '@toolpad/core/DashboardLayout';
import type {Navigation, Router} from '@toolpad/core';
import {StarRounded} from "@mui/icons-material";
import {ReviewsInterface} from "./ReviewsInterface";
import {ContactInterface} from "./ContactInterface";
import Navbar from "../layout/Navbar";

const NAVIGATION : Navigation = [
    {
        segment: 'reviews',
        title: 'Reviews',
        icon: <StarRounded/>,
    },
    {
        segment: 'contacts',
        title: 'Contacts',
        icon: <MessageIcon/>,
    },
];

function DashboardContent({pathname} : { pathname : string }) {
    return (
        <Box sx={{p: 2}}>
            <Box sx={{mt: 2}}>
                {pathname === '/reviews' ? <ReviewsInterface/> : <ContactInterface/>}
            </Box>
        </Box>
    )
}

const Dashboard : React.FC = () => {
    const [pathname, setPathname] = React.useState('/reviews');

    const router = React.useMemo<Router>(() => ({
        pathname,
        searchParams: new URLSearchParams(),
        navigate: (path) => setPathname(String(path)),
    }), [pathname]);

    return (
        <>
            <Navbar style={{zIndex: 1210}}/>
            <AppProvider navigation={NAVIGATION} router={router} branding={{title: 'Sofiane Arif', logo: ''}}>
                <DashboardLayout>
                    <DashboardContent pathname={pathname}/>
                </DashboardLayout>
            </AppProvider>
        </>
    );
};

export default Dashboard;
