import * as React from 'react';
import {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link, useNavigate} from "react-router-dom";

const pages = [
    {name: 'Accueil', href: '#hero'},
    {name: 'À propos', href: '#about'},
    {name: 'Compétences', href: '#skills'},
    {name: 'Projets', href: '#projects'},
    {name: 'Avis', href: '#reviews'},
    {name: 'Contact', href: '#contact'},
];

const Navbar = ({style} : { style : React.CSSProperties }) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [scrollingUp, setScrollingUp] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event : React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleSmoothScroll = (event : React.MouseEvent<HTMLElement>, href : string) => {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        } else {
            navigate(`/${href}`);
            const targetElement = document.querySelector(href);
            targetElement?.scrollIntoView({behavior: 'smooth'});
        }
        handleCloseNavMenu();
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > lastScrollTop) {
                setScrollingUp(false);
            } else {
                setScrollingUp(true);
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    return (
        <AppBar
            position="fixed"
            style={style}
            sx={{
                transform: scrollingUp ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease'
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Sofiane Arif
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={(event) => handleSmoothScroll(event, page.href)}>
                                    <Button color="inherit" href={page.href}>{page.name}</Button>
                                </MenuItem>
                            ))}
                            <MenuItem key={"Dashboard"}>
                                <Button color="inherit" href="/dashboard">Tableau de bord</Button>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Sofiane Arif
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'end'}}>
                        {pages.map((page) => (
                            <Link to={`/${page.href}`} key={page.name} style={{textDecoration: 'none'}}
                                  onClick={(event) => handleSmoothScroll(event, page.href)}>
                                <Button sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    textAlign: 'center',
                                    textTransform: 'none'
                                }} color="secondary"
                                        href={`/${page.href}`}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                        <MenuItem key={"Dashboard"}>
                            <Link to="/dashboard">
                                <Button color="inherit">Tableau de bord</Button>
                            </Link>
                        </MenuItem>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
