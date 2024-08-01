import {Box, Container, Tab, Tabs, useMediaQuery, useTheme} from "@mui/material";
// import ProjectCard from "./ProjectCard.tsx";
import {SyntheticEvent, useState} from "react";
import ProjectCard from "./ProjectCard.tsx";

// import ProjectCard from "./ProjectCard.tsx";

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
                <Box height="inherit" sx={{m: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Projects = () => {

    const [value, setValue] = useState(0);

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    const a11yProps = (index: number) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('md'));

    return (
        <Box className={'project-section'} mb={4}>
            <Container>
                <Box
                    component={'section'}
                    display={"flex"}
                    height='inherit'
                    flexWrap={{xs: 'wrap', md: 'nowrap'}}>
                    <Tabs
                        orientation={isSmallScreen ? 'horizontal' : 'vertical'}
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label={"My Projects"}
                        sx={{
                            borderRight: 1,
                            borderColor: 'primary.main',
                            width: {xs: '100%', md: '30%'},
                            height: {xs: 'auto', md: '400px'}
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
                    <TabPanel value={value} index={0}>
                        <ProjectCard
                            title={'CV'}
                            year={2024}
                            description={"An interactive and comprehensive display of my professional" +
                                " experience, skills, education, and achievements. Built with react."}
                            img={'https://source.unsplash.com/random'}
                            link={'https://github.com/szbani/cv'}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <ProjectCard
                            title={'Uni Project: Redmine'}
                            year={2024}
                            description={"A small clone of the popular project management tool Redmine," +
                                " developed as a university project." +
                                " Built with React, it features task tracking, user management," +
                                " and project creation functionalities."}
                            img={'https://source.unsplash.com/random'}
                            link={'https://github.com/szbani/rendszerFejlBeadandok'}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <ProjectCard
                            title={'Truth Or Dare'}
                            year={2023}
                            description={"A fun and interactive mobile application for playing" +
                                " the classic party game Truth or Dare." +
                                " Developed in Java and connected to a MongoDB database" +
                                " for storing questions and dares, ensuring a dynamic and" +
                                " varied gameplay experience."}
                            img={'https://source.unsplash.com/random'}
                            link={'https://github.com/szbani/truth_or_dare'}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <ProjectCard
                            title={'Uni Project: Szoftech2'}
                            year={2023}
                            description={"A small clone of a bicycle rental system," +
                                " developed as a university project." +
                                " Built using C# with a command-line interface," +
                                " it manages bicycle rentals and returns," +
                                " tracking user information and rental durations."}
                            img={'https://source.unsplash.com/random'}
                            link={'https://github.com/szbani/Szoftech2'}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <ProjectCard
                            title={'ScooterCity'}
                            year={2023}
                            description={"A specialized webshop for scooters featuring" +
                                " an admin page for managing inventory." +
                                " Built using PHP and connected to a MySQL database for" +
                                " robust data management."}
                            img={'https://source.unsplash.com/random'}
                            link={'https://github.com/szbani/scootercity'}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <ProjectCard
                            title={'Uni Project: TrainSystem'}
                            year={2023}
                            description={"A small clone of a train ticket reservation" +
                                " system, developed as a university project." +
                                " Built with C# using its default GUI, and connected" +
                                " to a local SQL database for managing reservations" +
                                " and user data."}
                            img={'https://source.unsplash.com/random'}
                            link={'https://github.com/szbani/TrainSystem'}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        <ProjectCard
                            title={'Uni Project: Szoftech'}
                            year={2023}
                            description={"A small clone of a hall rental system," +
                                " developed as a university project. Built using Java" +
                                " with a command-line interface, it handles the booking" +
                                " and management of hall rentals efficiently."}
                            img={'https://source.unsplash.com/random'}
                            link={'https://github.com/szbani/szoftech'}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                        <ProjectCard
                            title={'School Project: szskonyveles'}
                            year={2023}
                            description={"A small webpage for an accountant, developed as" +
                                " a school project. Built using PHP, it serves as an" +
                                " advertisement platform showcasing services and" +
                                " contact information."}
                            img={'https://source.unsplash.com/random'}
                            link={'https://github.com/szbani/szskonyveles'}
                        />
                    </TabPanel>
                </Box>
            </Container>
        </Box>
    )
}

export default Projects;