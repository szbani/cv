import {Box, Container, Tab, Tabs, Typography} from "@mui/material";
// import ProjectCard from "./ProjectCard.tsx";
import {SyntheticEvent, useState} from "react";
import ProjectCard from "./ProjectCard.tsx";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            className={'tab-panel'}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                    {/*<ProjectCard>{children}</ProjectCard>*/}
                </Box>
            )}
        </div>
    );
}

const Projects = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    const a11yProps = (index: number) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    return (
        <Container className={'project-section'}>
            <Box component={'section'} display={"flex"} height={368}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label={"My Projects"}
                    sx={{
                        borderRight: 1,
                        borderColor: 'primary.main',
                        width: '200px',
                    }}
                >
                    <Tab label={'CV'} {...a11yProps(0)} />
                    <Tab label={'Uni Project: Redmine'} {...a11yProps(1)} />
                    <Tab label={'Truth Or Dare'} {...a11yProps(2)} />
                    <Tab label={'Uni Project: Szoftech2'} {...a11yProps(3)} />
                    <Tab label={'ScooterCity'} {...a11yProps(4)} />
                    <Tab label={'Uni Project: TrainSystem'} {...a11yProps(5)} />
                    <Tab label={'Uni Project: Szoftech'} {...a11yProps(6)} />
                    <Tab label={'School Project: szskonyveles'} {...a11yProps(7)} />
                </Tabs>
                <TabPanel value={value} index={0}><ProjectCard /></TabPanel>
                <TabPanel value={value} index={1}>asd2</TabPanel>
                <TabPanel value={value} index={2}>asd3</TabPanel>
                <TabPanel value={value} index={3}>asd3</TabPanel>
                <TabPanel value={value} index={4}>asd3</TabPanel>
                <TabPanel value={value} index={5}>asd3</TabPanel>
                <TabPanel value={value} index={6}>asd3</TabPanel>
                <TabPanel value={value} index={7}>asd3</TabPanel>
            </Box>
        </Container>
    )


    // return (
    //     <Box sx={{backgroundColor: 'secondary.main'}}>
    //         <Typography>My Projects</Typography>
    //         <Box component={'section'} display={"flex"} justifyItems={"center"} sx={{m: 2}}>
    //             <ProjectCard title={"Truth Or Dare"} year={2023} description={"Desc"}/>
    //             <ProjectCard title={"School Project: Redmine"} year={2024} description={"Desc"}/>
    //             <ProjectCard title={"CV"} year={2024} description={"Desc"}/>
    //         </Box>
    //     </Box>
    // );
}

export default Projects;