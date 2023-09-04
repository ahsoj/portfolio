import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Stack,
  Toolbar,
  AppBar,
  IconButton,
  Button,
  Container,
  Tabs,
  Typography,
  Tab,
} from '@mui/material';
import { ColorModeContext } from '../pages/_app';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import zigLine from '../public/image/icons/zig_line.svg';

export const navLink = [
  'home',
  // "services",
  'projects',
  // "skills",
  'about',
  'Contact',
];

export const Navigation = ({ ...props }) => {
  const {} = props;
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const [value, setValue] = React.useState<number>(0);

  return (
    <>
      <AppBar position="fixed" elevation={0} color="inherit">
        <Container maxWidth="xl">
          <Toolbar>
            <Link href="/">
              <Image
                priority
                src="/image/logo.png"
                width={80}
                height={50}
                alt="allIn-logo"
              />
            </Link>

            <Stack
              direction="row"
              justifyContent="flex-end"
              sx={{ alignItems: 'center', flex: 1, gap: 3 }}
            >
              <IconButton
                aria-label=""
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === 'dark' ? (
                  <Brightness4Icon />
                ) : (
                  <Brightness7Icon />
                )}
              </IconButton>
              <Typography
                sx={{
                  fontStyle: 'italic',
                  fontWeight: 900,
                  textDecoration: 'none',
                  '&:before': {
                    content: `url(/image/icons/zig_line.svg)`,
                    position: 'absolute',
                    width: 80,
                    height: 60,
                    transform: 'translate(-20px, 20px)',
                  },
                }}
                variant="body1"
                component="a"
                href="https://github.com/ahsoj"
                target="_blank"
                color="inherit"
              >
                github
              </Typography>
              <Link href="mailto:eyasucc@gmail.com">
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    textTrandform: 'capitalize',
                    bgcolor: '#d97706',
                    borderRadius: 6,
                    '&:hover': {
                      color: '#d97706',
                      bgcolor: 'transparent',
                      border: '0.1px solid #d97706',
                    },
                  }}
                  // color="primary"
                >
                  hire-me
                </Button>
              </Link>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
