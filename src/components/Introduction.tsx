import {Box, CardMedia, Typography} from "@mui/material";
import mountain from '../assets/mountain.jpg';

function Introduction() {
    return (
        <Box marginBottom={8}>
            <CardMedia className={'intro-image'} image={mountain}>
                <Box component={"div"} >
                    <Typography variant={'h4'}>Dániel Szabó</Typography>
                    <Typography variant={'h6'}>Junior Software Engineer</Typography>
                </Box>
            </CardMedia>
        </Box>
    );
}

export default Introduction;