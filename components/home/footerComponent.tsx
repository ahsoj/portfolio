import {
  Box,
  Stack,
  IconButton,
  Divider,
  Typography,
  Button,
} from '@mui/material';
// import { useTheme } from "@mui/material/styles";
import Link from 'next/link';
import Image from 'next/image';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { TfiLinkedin, TfiEmail } from 'react-icons/tfi';
import { BsGithub } from 'react-icons/bs';

const FiverrIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 16 16"
    id="fiverr"
  >
    <path d="M13 13V5H5v-.5C5 3.673 5.673 3 6.5 3H8V0H6.5A4.505 4.505 0 0 0 2 4.5V5H0v3h2v5H0v3h7v-3H5V8h5.028v5H8v3h7v-3h-2z" />
    <circle cx="11.5" cy="1.5" r="1.5" />
  </svg>
);

export const FooterComponent = () => {
  // const theme = useTheme();
  // bgcolor: (theme.palette.mode === "dark" && "rgb(38,55,56)"),

  return (
    <Box
      id="contacts-section"
      sx={{
        mt: 8,
        bgcolor: '#1d4ed8',
        pb: 8,
      }}
    >
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        justifyContent={'space-between'}
        sx={{
          p: 4,
          mx: 4,
          gap: 2,
          maxWidth: '75em',
          marginInline: 'auto',
          justifySelf: 'center',
          borderRadius: 8,
          bgcolor: '#172554',
          alignItems: 'center',
          transform: 'translate(0, -50px)',
          '.MuiTypography-h2': {
            fontFamily: "'Smooch Sans', sans-serif",
          },
        }}
      >
        <Typography variant="h2" fontSize={30} fontWeight={600} color="white">
          Start a project
        </Typography>
        <Typography variant="subtitle1" color="white">
          Interested in working together? We should
          <br /> queue up a time to char. i&#39;ll buy the coffee🤙.
        </Typography>
        <Link href="https://www.fiverr.com/eyasucc">
          <Button
            variant="contained"
            disableElevation
            sx={{
              color: '#fff',
              borderRadius: 6,
              px: 2,
              fontSize: 16,
              bgcolor: '#22c55e',
              textTransform: 'initial',
              '&:hover': {
                bgcolor: 'transparent',
                border: '0.1px solid #22c55e',
                px: 1.9,
                color: '#22c55e',
                svg: {
                  fill: '#22c55e',
                },
              },
              svg: {
                fill: '#fff',
                mr: 1,
              },
            }}
          >
            {FiverrIcon} Check out my Gigs
          </Button>
        </Link>
      </Stack>
      <Stack
        direction="column"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 1 / 1,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Link href="/">
            <Image
              priority
              src="/image/logo.png"
              width={80}
              height={50}
              alt="allIn-logo"
            />
          </Link>
        </Box>

        <Stack
          direction="row"
          justifyContent="flex-end"
          sx={{
            textAlign: 'center',
            flex: 1,
            py: 2,
            gap: 2,
            '.MuiIconButton-root': {
              p: 1.5,
              border: 1,
              borderRadius: '100%',
              borderColor: '#fff',
            },
          }}
        >
          <Link target="_blank" href="https://github.com/ahsoj">
            <IconButton aria-label="">
              <BsGithub fontSize={16} color="#fff" />
            </IconButton>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/eyasuc/">
            <IconButton aria-label="">
              <TfiLinkedin fontSize={16} color="#fff" />
            </IconButton>
          </Link>
          <Link href="mailto:eyasucc@gmail.com">
            <IconButton aria-label="">
              <TfiEmail fontSize={16} color="#fff" />
            </IconButton>
          </Link>
        </Stack>
        <Typography
          sx={{
            opacity: '0.8',
            color: '#fff',
          }}
          variant="subtitle2"
        >
          Handcrafted by &copy; Eyasu Chaka 2023
        </Typography>
      </Stack>
    </Box>
  );
};
