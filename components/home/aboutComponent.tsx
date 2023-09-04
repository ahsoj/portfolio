import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  CardMedia,
  ButtonGroup,
  Button,
} from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';
import SpringModal from '../modal';
export const AboutComponent = () => {
  const [openModal, setOpen] = useState(false);
  // const mage = useParallax<HTMLDivElement>({
  //   scale: [0.5, 1, 'easeInQuad'],
  // });

  const handleModalToggle = () => setOpen(!openModal);

  return (
    <Box>
      {/* <Parallax speed={30}> */}
      {/* <div style={{ justifyContent: 'center', display: 'flex' }}>
        <Typography variant="h4" color="inherit">
          AboutMe
        </Typography>
      </div> */}
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        sx={{
          alignItems: 'start',
          gap: 2,
          maxWidth: { md: 3 / 4 },
          justifyContent: 'center',
          m: 'auto',
        }}
      >
        <Box
          sx={{
            width: 400,
            height: 400,
            position: 'relative',
            overflow: 'hidden',
            isolation: 'isolate',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              border: '5px solid #0099ff',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              border: '5px solid #ff4747',
              transform: 'translate(-20px, -20px)',
            },
          }}
          // ref={mage.ref}
        >
          <CardMedia
            width={200}
            height={400}
            component="img"
            sx={{ objectFit: 'contain' }}
            image="/image/about-me.png"
            alt="about-me"
          />
        </Box>
        <Box sx={{ width: { md: 1 / 2, xs: 1 / 1 } }}>
          <Stack
            direction="column"
            sx={{
              gap: 3,
              '.MuiTypography-body1': {
                color: '#666',
                textAlign: 'justify',
                a: {
                  textDecoration: 'none',
                  color: '#0099ff',
                },
              },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600 }} color="inherit">
              Why hire me for your next project ?
            </Typography>
            {/* <Typography variant="body1" color="inherit">
              My name is Eyasu & i am a Full-stack Developer & UI/UX Designer
            </Typography> */}
            <Typography variant="body1" color="inherit">
              I am a <strong>Full-Stack Developer</strong> building the frontend
              and backend Websites and web applications that leads to the
              success of the overall product. Check out some of my work in the{' '}
              <a href="#projects-section">
                <strong>Project</strong>
              </a>{' '}
              section.
            </Typography>
            <Typography variant="body1" color="inherit">
              I am open to <strong>Job</strong> opportunities where i can
              contribute, learn and grow if you have a good opportinity that
              matches my skills and expreience then dont&#39;t hesitate to{' '}
              <a href="#contacts-section">
                <strong>Contact</strong>
              </a>{' '}
              me.
            </Typography>
          </Stack>
          <ButtonGroup
            variant="outlined"
            color="primary"
            sx={{ mt: 4 }}
            aria-label=""
          >
            <Button>Hire me</Button>
            <Button onClick={handleModalToggle}>Download CV</Button>
          </ButtonGroup>
        </Box>
      </Stack>
      {/* </Parallax> */}
      <SpringModal
        openModal={openModal}
        handleModalToggle={handleModalToggle}
      />
    </Box>
  );
};
