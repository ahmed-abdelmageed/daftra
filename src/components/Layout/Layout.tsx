import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.scss";

const Layout: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Box className={styles.layoutContainer}>
            <CssBaseline />
            <Navbar />

            <Box className={styles.contentWrapper}>
                <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

                <Box component="main" className={styles.mainContent}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;
