import React from "react";
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";

interface Props {
    title: string;
    year: number;
    description: string;
}


const ProjectCard: React.FC<Props> = ({title,year,description}) => {
    return (
        <Card sx={{m: 2,width: 300}}>
            <CardMedia
                sx={{height:140}}
                image="https://source.unsplash.com/random"
                title={title}
            />
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
                <Button size={"small"} title={'Megnéz'}>Megnéz</Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard;