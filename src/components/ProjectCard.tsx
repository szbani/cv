import React from "react";
import {Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

interface Props {
    title: string;
    year: number;
    description: string;
    img: string;
    link: string;
}


const ProjectCard: React.FC<Props> = ({title,year,description,link}) => {
    return (
        <Card variant={'outlined'} sx={{ m: 2,display:'flex', flexWrap:{xs: 'wrap', md:'nowrap'}}}>
            <CardMedia
                sx={{width: '40.0rem', }}
                image="https://source.unsplash.com/random"
                title={title}
            />
            <Box>
                <CardHeader
                    title={title}
                    subheader={year}
                />
                <CardContent>
                    <Typography>
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size={"small"} title={'Megnéz'} href={link}>View</Button>
                </CardActions>
            </Box>
        </Card>
    )
}

export default ProjectCard;