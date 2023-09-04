import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';
import { CardMedia, IconButton } from '@mui/material';
// import {
//   PDFViewer,
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
// } from '@react-pdf/renderer';
import { File } from 'buffer';
// import ReactPDF from '@react-pdf/renderer';

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const style = {
  position: 'absolute' as 'absolute',
  transform: { lg: 'translateX(50%)', md: 'translateX(0)' },
  marginInline: 'auto',
  display: 'flex',
  flexDirection: 'column',
  // justifySelf: 'center',
  alignItems: 'center',
  width: '97vw',
  height: 'fit-content',
  minHeight: '99vh',
  maxWidth: '50em',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  px: 2,
};

interface SpringModalProps {
  handleModalToggle: (ev: React.MouseEvent) => void;
  openModal: boolean;
}

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

// // Create Document Component
// const PdfDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

const SpringModal: React.FC<SpringModalProps> = ({
  handleModalToggle,
  openModal,
}) => {
  const onDownload = () => {
    fetch('/resume.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = '/resume.pdf';
        alink.click();
      });
    });
  };
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={openModal}
      onClose={handleModalToggle}
      closeAfterTransition
      style={{
        minHeight: '100vh',
        height: 'fit-content',
        overflowY: 'scroll',
      }}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <Fade in={openModal}>
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              py: 2,
            }}
          >
            <h3 style={{ fontSize: '1.1em', fontWeight: 800 }}>
              You can preview before downloading.
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Button
                onClick={onDownload}
                variant="outlined"
                color="primary"
                size="small"
              >
                Download
              </Button>
              <IconButton
                onClick={handleModalToggle}
                aria-label=""
                color="inherit"
              >
                X
              </IconButton>
            </div>
          </Box>
          {/* <PDFViewer>
            <PdfDocument />
          </PDFViewer> */}
          <CardMedia
            component="img"
            sx={{ objectFit: 'contain' }}
            image="/resume.png"
            alt="about-me"
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default SpringModal;
