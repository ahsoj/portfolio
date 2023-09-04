import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Stack,
  Button,
} from '@mui/material';
export const ContactComponent = () => {
  return (
    <Container id="contact" sx={{ my: 6 }}>
      <Stack direction={'column'} sx={{ gap: 4, alignItems: 'center' }}>
        <Box sx={{ maxWidth: { md: 1 / 2, xs: 1 / 1 } }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 500, lineHeight: '30px', my: 3 }}
            color="inherit"
          >
            If you want to cantact <br /> me about any thing ?
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: 2,
            width: 1 / 1,
            '.MuiTextField-root': {
              flex: 1,
              width: 1 / 1,
            },
          }}
        >
          <TextField
            type="text"
            size="small"
            id="outlined-basic"
            label="Type your name ..."
            variant="filled"
          />
          <TextField
            type="email"
            size="small"
            id="outlined-basics"
            label="Type your email ..."
            variant="filled"
          />
          <TextField
            id="outlined-multiline-static"
            label="Tell me litte about your project ..."
            multiline
            variant="filled"
            rows={4}
            // defaultValue="Default Value"
          />
          <Button color="primary" variant="contained">
            Send
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};
