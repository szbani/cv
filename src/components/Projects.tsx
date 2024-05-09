import {Box, Typography} from "@mui/material";
import ProjectCard from "./ProjectCard.tsx";

const Projects = () => {
    return (
        <>
            <Typography>My Projects</Typography>
            <Box component={'section'} display={"flex"} justifyItems={"center"} sx={{m: 2}}>
                <ProjectCard title={"Truth Or Dare"} year={2023} description={"Desc"}/>
                <ProjectCard title={"School Project: Redmine"} year={2024} description={"Desc"}/>
            </Box>
        </>
    );
}

export default Projects;