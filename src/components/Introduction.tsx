import {Box, CardMedia, Typography} from "@mui/material";
import mountain from '../assets/mountain.jpg';

function Introduction() {
    return (
        <Box marginBottom={8}>
            <CardMedia className={'intro-image'} image={mountain}>
                <Typography variant={'h4'}>Dániel Szabó</Typography>
                <Typography variant={'h6'}>Junior Full Stack Developer</Typography>
            </CardMedia>
        </Box>
    );
}

export default Introduction;