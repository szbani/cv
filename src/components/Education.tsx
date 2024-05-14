import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import Timeline from "@mui/lab/Timeline";
import {Box, Container, Link, Typography} from "@mui/material";


const Education = () => {
    return (
        <Container maxWidth={"lg"} sx={{alignContent:"center"}}>
            <Box component={'section'} textAlign={"center"} flexWrap={"wrap"} display={"flex"} justifyContent={"right"}>
                <Typography alignContent={"center"} variant={'h4'}>My Education</Typography>
                <Timeline sx={{width: "fit-content"}} position={'left'}>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{display: 'none'}}></TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant={'h6'}>2021-2025</Typography>
                            <Typography>
                                <Link variant={'subtitle1'} href="https://uni-pannon.hu/">University of Pannonia</Link>
                            </Typography>
                            <Typography variant={'subtitle2'}>BProf in Computer Science</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{display: 'none'}}></TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant={'h6'}>2023</Typography>
                            <Typography variant={'subtitle1'}>CCNA</Typography>
                            <Typography>
                                <Link variant={'subtitle2'}
                                      href="https://www.credly.com/badges/c2b2d855-6af9-4631-b8c8-0b4c5444401e/public_url">Enterprise
                                    Networking, Security, and Automation</Link>
                            </Typography>
                            <Typography>
                                <Link variant={'subtitle2'}
                                      href="https://www.credly.com/badges/5ec9f8cd-952c-40c2-bba4-da2659c2a4ec/public_url">Switching,
                                    Routing, and Wireless Essentials</Link>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{display: 'none'}}></TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant={'h6'}>2022</Typography>
                            <Typography variant={'subtitle1'}>CCNA</Typography>
                            <Typography>
                                <Link variant={'subtitle2'}
                                      href="https://www.credly.com/badges/4bf60c59-9c59-4fee-97ca-3abe1ae95a4e/public_url">Introduction
                                    to Networks</Link>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{display: 'none'}}></TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant={'h6'}>2016-2021</Typography>
                            <Typography variant={'subtitle1'}>
                                <Link href="https://technikum.radnoti-pecs.hu/">Baranya Vármegyei SzC Radnóti Miklós
                                    Közgazdasági Technikum</Link>
                            </Typography>
                            <Typography>IT Technician</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{display: 'none'}}></TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant={'h6'}>2021</Typography>
                            <Typography variant={'subtitle1'}>Qualification of Business IT specialist</Typography>
                            <Typography variant={'subtitle2'}>(OKJ 54-481-02)</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{display: 'none'}}></TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant={'h6'}>2020</Typography>
                            <Typography variant={'subtitle1'}>Information and communications technology user support
                                technician</Typography>
                            <Typography variant={'subtitle2'}>(3142/9 FEOR)</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{display: 'none'}}></TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant={'h6'}>2016</Typography>
                            <Typography variant={'subtitle1'}>ECDL</Typography>
                            <Typography variant={'subtitle2'}>European Computer Driving License</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </Container>

    );
}

export default Education;