import { Box, Typography, CardMedia } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Link from 'next/link';
import Image from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';

// `/image/icons/${image}`;

const project_content = [
  {
    image: '/image/ecommerce-website.png',
    label: 'E-Commerce website.',
    slogan:
      'I built a Fully Functional Ecommerce website with the latest technologies.',
    repo: 'ecomm-django',
    live: '',
    icons: ['django.svg', 'material-ui.svg', 'nextjs.svg'],
  },
  {
    image: '/image/blog website.png',
    label: 'Blog website.',
    slogan:
      'I built a Fully Functional Blog websiet for programming communities like QA spots.',
    repo: 'weblog-cl',
    live: '',
    icons: [
      'prisma.svg',
      'nextjs.svg',
      'mongodb.png',
      // 'express.svg',
      'node-js.svg',
      'tailwind-css.svg',
    ],
  },
  {
    image: '/image/food delivery.png',
    label: 'Food Delivery website.',
    slogan: 'I built a Fully Functional Food Delivery website.',
    repo: 'FoodDelivery',
    live: '',
    icons: ['nextjs.svg', 'django.svg', 'drf.svg'],
  },
  {
    image: '/image/glosary_delivery.png',
    label: 'Glosary Delivery website.',
    slogan: 'I built a Fully Functional Food Delivery website.',
    repo: '',
    live: '',
    icons: ['nextjs.svg', 'django.svg', 'material-ui.svg'],
  },
];

const projectCardStyle = {
  borderRadius: 1,
  width: '30em',
  maxHeight: '30em',
  overflow: 'hidden',
  isolation: 'isolate',
  position: 'relative',
  transition: '0.3s ease-in-out',
  '.MuiCardMedia-root': {
    transition: '0.3s ease-in-out',
  },
  '.hoverTenssion': {
    position: 'absolute',
    p: 2,
    bottom: 0,
    placeContent: 'end',
    zIndex: 2,
    display: 'block',
    transition: '0.2s ease-in-out',
    background: 'linear-gradient(to top, #000, rgb(0,0,0, 0.0))',
    color: '#fff',
    insetInline: 0,
    '.MuiTypography-h4': {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        color: '#0099ff',
      },
    },
  },
  '&:hover': {
    '.MuiCardMedia-root': {
      transform: 'scale(1.2)',
      transition: '0.3s ease-in-out',
    },
    '.hoverTenssion': {
      // display: 'flex',
      transform: 'scale(1.0)',
      transition: '0.2s ease-in-out',
    },
  },
};

export const ProjectsComponent = () => {
  return (
    <Box
      id="projects-section"
      sx={{
        display: 'flex',
        marginInline: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 6,
        my: 12,
        maxWidth: '64em',
        px: 2,
      }}
    >
      <Typography
        sx={{
          textAlign: 'center',
          my: 1,
          '&:after': {
            content: `url(/image/icons/zig_line.svg)`,
            position: 'absolute',
            width: 200,
            height: 60,
            zIndex: -1,
            transform: 'translate(-270px, 40px)',
          },
        }}
        variant="h4"
        fontWeight="bold"
        color="inherit"
      >
        Some of my Projects
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1em',
        }}
      >
        {project_content.map((proj, idx) => (
          <Box sx={projectCardStyle} key={idx}>
            <Box className="hoverTenssion">
              <div>
                <Typography
                  variant="h4"
                  component="a"
                  href={`https://github.com/ahsoj/${proj.repo}`}
                  target="_blank"
                  fontWeight={900}
                  color="white"
                >
                  {proj.label}
                  <BiLinkExternal color="#0099ff" fontSize={20} />
                </Typography>
                <Typography
                  variant="body1"
                  style={{ opacity: 0.7 }}
                  color="white"
                >
                  {proj.slogan}
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    gap: 20,
                    alignItems: 'center',
                    justifyContent: 'start',
                  }}
                >
                  {proj.icons.map((icon, idx1) => (
                    <CardMedia
                      title=""
                      key={idx1}
                      style={{ objectFit: 'contain', width: 30 }}
                      image={`/image/icons/${icon}`}
                      component="img"
                    />
                  ))}
                </div>
              </div>
            </Box>
            <CardMedia title="" image={proj.image} component="img" />
          </Box>
        ))}
      </div>
    </Box>
  );
};
