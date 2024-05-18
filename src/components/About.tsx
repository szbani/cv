import {Box, CardMedia, Container, Typography} from "@mui/material";


function About() {
  return (
        <Container component={'section'} className={'about-section'}>
            <Box display={"flex"}>
                <CardMedia image={"https://source.unsplash.com/random"} sx={{width:'50rem', height:'320px'}}></CardMedia>
                <Box>
                    <Typography variant={'h5'} sx={{textDecoration:'underline'}}>About Me</Typography>
                    <Typography variant={'h4'}>Hello, I'm Dani</Typography>
                    <Typography variant={'h6'}>I'm a Junior Software Engineer</Typography>
                    <Typography>
                        I am a junior software engineer with a passion for web development and a strong desire to learn new
                        technologies. I have a background in computer science, and I am currently studying for my BProf at the
                        University of Pannonia. I am looking for new opportunities to grow and develop my skills as a developer.
                    </Typography>
                </Box>
            </Box>
        </Container>
  );
}

export default About;