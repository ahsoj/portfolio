import * as React from 'react';
import Head from 'next/head';
import { Navigation } from '../components/navbar';
import { ProjectsComponent } from '../components/home/projectComponents';
import { HeroComponent } from '../components/home/heroComponent';
import { FooterComponent } from '../components/home/footerComponent';
import { AboutComponent } from '../components/home/aboutComponent';
import { ContactComponent } from '../components/home/contactComponents';
import { Paper } from '@mui/material';
import { createPortal } from 'react-dom';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Eyasu | Front-End Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logo.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="A Front-End Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall products."
        />
        <meta name="author" content="Eyasu Chaka" />
        {/* <meta
          name="google-site-verification"
          content="wX2xdkxqjrC4rA2EM-9bbaVpiEEFG8ae5azgeZDd-oo"
        /> */}

        <meta property="og:title" content="Eyasu | Front-End Web Developer" />
        <meta property="og:site_name" content="Eyasu Chaka Portfolio Website" />
        {/* must be edited */}
        <meta property="og:url" content="https://eyasuc.vercel.app/" />
        <meta
          property="og:description"
          content="A Front-End Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall products."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://eyasuc.vercel.app/showcase.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'anonymous'}
        />
      </Head>
      <Navigation />
      <HeroComponent />
      <AboutComponent />
      <ProjectsComponent />
      {/* <ContactComponent /> */}
      <FooterComponent />
    </>
  );
}
