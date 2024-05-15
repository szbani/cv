import {
    Toolbar,
    AppBar,
    Button,
    Link,
    Box,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText, Drawer, IconButton, MenuItem
} from "@mui/material";
import {useState} from "react";

function NavBar() {

    const navItems = ['About', 'Projects', 'Education', 'Contact'];

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Dani
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuItem/>
                    </IconButton>
                    <Typography variant={"h5"} component={"div"}
                                sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
                        Dani
                    </Typography>
                    <Box sx={{display: {xs: "none", sm: 'block'}, mr: {md: "4rem"}}}>
                        {navItems.map((item) => {
                            return (
                                <Button key={item} sx={{marginRight: {md: '1rem'}}} component={Link}>
                                    {item}
                                </Button>
                            );
                        })}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    anchor="top"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    );
}

export default NavBar;