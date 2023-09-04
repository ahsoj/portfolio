import Head from 'next/head';
import {
  Stack,
  Typography,
  Box,
  Button,
  Paper,
  IconButton,
  Avatar,
  CardMedia,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Parallax } from 'react-scroll-parallax';

const heroStyle = {
  up: {
    fontSize: { md: '2.5em', xs: '1.5em' },
    fontWeight: 600,
    lineHeight: 1,
    fontFamily: "'Smooch Sans', sans-serif",
  },
  down: {
    lineHeight: 1,
    fontWeight: 900,
    fontSize: { md: '5em', xs: '3.5em' },
    fontFamily: "'Smooch Sans', sans-serif",
    display: 'inline-block',
    isolation: 'isolate',
    position: 'relative',
    '&:after': {
      content: `url(/image/icons/zig_line.svg)`,
      position: 'absolute',
      width: 300,
      height: 60,
      zIndex: -1,
      transform: {
        md: 'translate(-300px, 65px)',
        xs: 'translate(-300px, 50px)',
      },
    },
  },
};

const FullStack = () => {
  const traceRef1 = useRef<SVGGElement>(null);
  const svgAnimation = (
    delay: number,
    duration: number,
    strokeWidth: number,
    timingFunction: string,
    strokeColor: string,
    repeat: boolean
  ) => {
    if (traceRef1.current) {
      let paths1 = traceRef1.current.querySelectorAll('path');
      let mode = repeat ? 'infinite' : 'forwards';
      for (let i = 0; i < paths1.length; i++) {
        const path = paths1[i];
        const length = path.getTotalLength();
        path.style.strokeDashoffset = `${length}px`;
        path.style.strokeDasharray = `${length}px`;
        path.style.strokeWidth = `${strokeWidth}px`;
        path.style.stroke = `${strokeColor}`;
        path.style.animation = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style.animationDelay = `${i * delay}s`;
      }
    }
  };
  svgAnimation(0.1, 4.9, 1, 'ease-in-out', '#0099ff', true);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="56.424"
        viewBox="0 0 500 56.424"
      >
        <g
          id="svgGroup1"
          strokeLinecap="round"
          fillRule="evenodd"
          ref={traceRef1}
          fontSize="8pt"
          stroke="#0099ff"
          strokeWidth="0.25mm"
          fill="#0099ff"
          style={{
            stroke: '#0099ff',
            strokeWidth: '0.25mm',
            fill: '#0099ff',
          }}
        >
          <path
            d="M 32.27 55.443 L 0 55.443 L 0 43.963 L 3.5 43.963 L 3.5 12.463 L 0 12.463 L 0 0.983 L 41.86 0.983 L 41.86 19.113 L 29.47 19.113 L 29.47 12.463 L 23.1 12.463 L 23.1 24.083 L 33.67 24.083 L 33.67 32.063 L 23.1 32.063 L 23.1 43.963 L 32.27 43.963 L 32.27 55.443 Z"
            id="0"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 47.46 35.913 L 47.46 12.463 L 43.96 12.463 L 43.96 0.983 L 69.86 0.983 L 69.86 12.463 L 67.06 12.463 L 67.06 39.483 A 8.335 8.335 0 0 0 67.145 40.716 Q 67.353 42.107 68.075 42.878 A 3.199 3.199 0 0 0 69.476 43.737 Q 70.192 43.963 71.12 43.963 Q 72.539 43.963 73.461 43.434 A 3.007 3.007 0 0 0 74.165 42.878 Q 74.914 42.078 75.11 40.61 A 8.52 8.52 0 0 0 75.18 39.483 L 75.18 12.463 L 72.38 12.463 L 72.38 0.983 L 96.39 0.983 L 96.39 12.463 L 92.89 12.463 L 92.89 35.913 Q 92.89 42.786 90.559 47.243 A 14.05 14.05 0 0 1 87.08 51.593 A 18.977 18.977 0 0 1 80.653 55.02 Q 76.269 56.423 70.42 56.423 A 40.207 40.207 0 0 1 63.893 55.928 Q 57.513 54.876 53.445 51.593 A 14.831 14.831 0 0 1 48.775 44.762 Q 47.912 42.293 47.615 39.254 A 34.411 34.411 0 0 1 47.46 35.913 Z"
            id="1"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 142.24 55.443 L 98.91 55.443 L 98.91 43.963 L 102.41 43.963 L 102.41 12.463 L 98.91 12.463 L 98.91 0.983 L 128.45 0.983 L 128.45 12.463 L 122.01 12.463 L 122.01 43.963 L 128.31 43.963 L 128.31 37.523 L 142.24 37.523 L 142.24 55.443 Z"
            id="2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 187.95 55.443 L 144.62 55.443 L 144.62 43.963 L 148.12 43.963 L 148.12 12.463 L 144.62 12.463 L 144.62 0.983 L 174.16 0.983 L 174.16 12.463 L 167.72 12.463 L 167.72 43.963 L 174.02 43.963 L 174.02 37.523 L 187.95 37.523 L 187.95 55.443 Z"
            id="3"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 213.78 41.513 L 191.31 41.513 L 191.31 30.033 L 213.78 30.033 L 213.78 41.513 Z"
            id="4"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 217.35 52.643 L 217.35 38.783 L 232.75 38.783 A 7.606 7.606 0 0 0 232.828 39.91 Q 233.026 41.229 233.73 41.933 A 2.657 2.657 0 0 0 234.594 42.491 Q 235.417 42.837 236.705 42.899 A 12.23 12.23 0 0 0 237.3 42.913 Q 239.128 42.913 240.086 42.442 A 2.448 2.448 0 0 0 240.415 42.248 A 2.162 2.162 0 0 0 241.329 40.71 A 3.286 3.286 0 0 0 241.36 40.253 Q 241.36 39.133 240.45 38.328 A 4.874 4.874 0 0 0 239.833 37.873 Q 238.91 37.287 237.3 36.683 L 231.28 34.583 A 44.031 44.031 0 0 1 226.851 32.643 Q 224.788 31.59 223.179 30.428 A 17.269 17.269 0 0 1 220.115 27.653 A 13.557 13.557 0 0 1 217.37 22.279 Q 216.842 20.3 216.743 17.968 A 25.823 25.823 0 0 1 216.72 16.873 A 19.991 19.991 0 0 1 217.347 11.716 A 13.696 13.696 0 0 1 222.145 4.308 A 15.877 15.877 0 0 1 226.669 1.879 Q 231.876 0.003 240.24 0.003 A 53.797 53.797 0 0 1 248.266 0.582 A 46.258 46.258 0 0 1 251.685 1.228 Q 255.778 2.165 258.664 3.571 A 19.12 19.12 0 0 1 260.33 4.483 L 260.33 17.013 L 246.33 17.013 A 3.988 3.988 0 0 0 246.059 15.482 Q 245.245 13.513 241.99 13.513 A 13.394 13.394 0 0 0 241.017 13.546 Q 240.058 13.616 239.449 13.837 A 2.486 2.486 0 0 0 239.015 14.038 A 1.705 1.705 0 0 0 238.239 15.091 Q 238.14 15.447 238.14 15.893 A 2.225 2.225 0 0 0 238.386 16.946 Q 238.608 17.368 239.03 17.692 A 2.975 2.975 0 0 0 239.155 17.783 A 6.438 6.438 0 0 0 239.828 18.183 Q 240.587 18.579 241.738 18.996 A 30.26 30.26 0 0 0 242.48 19.253 L 248.57 21.353 Q 255.99 23.873 259.385 27.898 A 13.966 13.966 0 0 1 262.303 33.9 A 20.356 20.356 0 0 1 262.78 38.433 Q 262.78 47.323 256.795 51.873 Q 252.392 55.22 244.979 56.105 A 48.347 48.347 0 0 1 239.26 56.423 A 69.818 69.818 0 0 1 229.98 55.827 A 60.498 60.498 0 0 1 226.555 55.268 A 72.206 72.206 0 0 1 223.094 54.518 Q 219.939 53.746 217.832 52.855 A 18.782 18.782 0 0 1 217.35 52.643 Z"
            id="5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 316.96 0.983 L 316.96 17.923 L 304.92 17.923 L 304.92 12.463 L 300.44 12.463 L 300.44 43.963 L 305.34 43.963 L 305.34 55.443 L 275.94 55.443 L 275.94 43.963 L 280.84 43.963 L 280.84 12.463 L 276.36 12.463 L 276.36 17.923 L 264.32 17.923 L 264.32 0.983 L 316.96 0.983 Z"
            id="6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 351.19 0.983 L 363.02 43.963 L 365.82 43.963 L 365.82 55.443 L 338.38 55.443 L 338.38 43.963 L 342.58 43.963 L 341.46 38.363 L 331.94 38.363 L 330.82 43.963 L 335.02 43.963 L 335.02 55.443 L 311.08 55.443 L 311.08 43.963 L 313.88 43.963 L 325.71 0.983 L 351.19 0.983 Z M 336.35 17.013 L 333.48 30.943 L 339.92 30.943 L 337.05 17.013 L 336.35 17.013 Z"
            id="7"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 413.84 5.183 L 413.84 22.683 L 397.04 22.683 L 397.04 17.643 A 9.448 9.448 0 0 0 396.941 16.222 Q 396.83 15.496 396.595 14.915 A 3.76 3.76 0 0 0 395.85 13.723 A 3.741 3.741 0 0 0 394.25 12.74 Q 393.396 12.463 392.28 12.463 Q 390.624 12.463 389.545 13.073 A 3.522 3.522 0 0 0 388.71 13.723 A 3.847 3.847 0 0 0 387.902 15.079 Q 387.52 16.137 387.52 17.643 L 387.52 38.783 A 9.448 9.448 0 0 0 387.619 40.204 Q 387.73 40.931 387.965 41.512 A 3.76 3.76 0 0 0 388.71 42.703 A 3.741 3.741 0 0 0 390.31 43.686 Q 391.164 43.963 392.28 43.963 Q 393.936 43.963 395.015 43.354 A 3.522 3.522 0 0 0 395.85 42.703 A 3.847 3.847 0 0 0 396.658 41.347 Q 397.04 40.29 397.04 38.783 L 397.04 33.113 L 413.84 33.113 L 413.84 51.243 A 17.47 17.47 0 0 1 411.659 52.492 Q 409.29 53.649 405.832 54.669 A 60.85 60.85 0 0 1 405.335 54.813 Q 399.7 56.423 393.12 56.423 A 41.763 41.763 0 0 1 385.09 55.7 Q 377.536 54.218 372.715 49.703 Q 367.141 44.483 365.897 34.406 A 50.626 50.626 0 0 1 365.54 28.213 A 41.921 41.921 0 0 1 366.853 17.221 Q 371.543 0.003 392.98 0.003 Q 399.63 0.003 405.335 1.613 A 50.613 50.613 0 0 1 408.466 2.6 Q 411.871 3.805 413.84 5.183 Z"
            id="8"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 456.89 22.123 L 468.93 43.963 L 472.43 43.963 L 472.43 55.443 L 453.32 55.443 L 442.82 33.743 L 439.6 36.403 L 439.6 43.963 L 442.96 43.963 L 442.96 55.443 L 416.5 55.443 L 416.5 43.963 L 420 43.963 L 420 12.463 L 416.5 12.463 L 416.5 0.983 L 442.96 0.983 L 442.96 12.463 L 439.6 12.463 L 439.6 21.703 L 450.45 12.463 L 446.04 12.463 L 446.04 0.983 L 472.08 0.983 L 472.08 12.463 L 468.58 12.463 L 456.89 22.123 Z"
            id="9"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
    </>
  );
};

const Developer = () => {
  const traceRef2 = useRef<SVGGElement>(null);
  const svgAnimation = (
    delay: number,
    duration: number,
    strokeWidth: number,
    timingFunction: string,
    strokeColor: string,
    repeat: boolean
  ) => {
    if (traceRef2.current) {
      let paths2 = traceRef2.current.querySelectorAll('path');
      let mode = repeat ? 'infinite' : 'forwards';
      for (let i = 0; i < paths2.length; i++) {
        const path = paths2[i];
        const length = path.getTotalLength();
        path.style.strokeDashoffset = `${length}px`;
        path.style.strokeDasharray = `${length}px`;
        path.style.strokeWidth = `${strokeWidth}px`;
        path.style.stroke = `${strokeColor}`;
        path.style.animation = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style.animationDelay = `${i * delay}s`;
      }
    }
  };
  svgAnimation(0.1, 4.9, 1, 'ease-in-out', '#0099ff', true);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="56.424"
      viewBox="0 0 700 56.424"
    >
      <g
        id="svgGroup"
        strokeLinecap="round"
        fillRule="evenodd"
        ref={traceRef2}
        fontSize="8pt"
        stroke="#0099ff"
        strokeWidth="0.25mm"
        fill="#0099ff"
        style={{
          stroke: '#0099ff',
          strokeWidth: '0.25mm',
          fill: '#0099ff',
        }}
      >
        <path
          d="M 60.41 12.461 L 60.41 0.981 L 82.81 0.981 L 82.81 12.461 L 80.01 12.461 L 69.58 55.441 L 48.65 55.441 L 42.28 25.201 L 41.58 25.201 L 34.86 55.441 L 13.93 55.441 L 2.8 12.461 L 0 12.461 L 0 0.981 L 25.9 0.981 L 25.9 12.461 L 23.24 12.461 L 25.97 30.311 L 26.67 30.311 L 33.32 0.981 L 53.48 0.981 L 59.64 30.311 L 60.34 30.311 L 63.07 12.461 L 60.41 12.461 Z"
          id="0"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 132.3 55.441 L 85.05 55.441 L 85.05 43.961 L 88.55 43.961 L 88.55 12.461 L 85.05 12.461 L 85.05 0.981 L 132.3 0.981 L 132.3 22.121 L 116.62 22.121 L 116.62 12.461 L 108.15 12.461 L 108.15 23.521 L 114.31 23.521 L 114.31 31.501 L 108.15 31.501 L 108.15 43.961 L 116.62 43.961 L 116.62 32.901 L 132.3 32.901 L 132.3 55.441 Z"
          id="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 134.96 55.441 L 134.96 43.961 L 138.46 43.961 L 138.46 12.461 L 134.96 12.461 L 134.96 0.981 L 167.09 0.981 Q 175.84 0.981 180.74 4.551 A 11.516 11.516 0 0 1 185.543 12.962 A 16.422 16.422 0 0 1 185.64 14.771 A 14.454 14.454 0 0 1 185.291 18.025 A 10.676 10.676 0 0 1 183.68 21.736 A 15.083 15.083 0 0 1 181.482 24.287 A 12.135 12.135 0 0 1 179.095 26.006 A 20.692 20.692 0 0 1 176.514 27.205 A 15.739 15.739 0 0 1 174.02 27.931 L 174.02 28.631 Q 178.99 29.121 182.98 31.781 A 8.22 8.22 0 0 1 186.151 35.946 Q 186.97 38.193 186.97 41.301 A 15.315 15.315 0 0 1 186.389 45.651 A 10.924 10.924 0 0 1 181.44 52.046 A 21.253 21.253 0 0 1 175.533 54.483 Q 171.776 55.441 167.09 55.441 L 134.96 55.441 Z M 158.06 43.961 L 162.33 43.961 Q 163.749 43.961 164.671 43.431 A 3.007 3.007 0 0 0 165.375 42.876 Q 166.124 42.075 166.32 40.607 A 8.52 8.52 0 0 0 166.39 39.481 L 166.39 36.401 A 8.335 8.335 0 0 0 166.305 35.168 Q 166.097 33.777 165.375 33.006 A 3.199 3.199 0 0 0 163.974 32.148 Q 163.258 31.921 162.33 31.921 L 158.06 31.921 L 158.06 43.961 Z M 158.06 23.941 L 161.84 23.941 Q 163.259 23.941 164.181 23.411 A 3.007 3.007 0 0 0 164.885 22.856 Q 165.634 22.055 165.83 20.587 A 8.52 8.52 0 0 0 165.9 19.461 L 165.9 16.941 A 8.335 8.335 0 0 0 165.815 15.708 Q 165.607 14.317 164.885 13.546 A 3.199 3.199 0 0 0 163.484 12.688 Q 162.768 12.461 161.84 12.461 L 158.06 12.461 L 158.06 23.941 Z"
          id="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 210.21 55.441 L 210.21 43.961 L 213.71 43.961 L 213.71 12.531 L 210.21 12.531 L 210.21 0.981 L 238.63 0.981 A 34.563 34.563 0 0 1 246.413 1.808 Q 252.648 3.248 257.007 7.195 A 22.217 22.217 0 0 1 257.215 7.386 A 19.129 19.129 0 0 1 262.018 14.758 Q 263.195 17.858 263.71 21.727 A 49.269 49.269 0 0 1 264.11 28.211 A 47.626 47.626 0 0 1 263.565 35.688 Q 262.944 39.582 261.617 42.655 A 18.674 18.674 0 0 1 257.215 49.036 A 23.201 23.201 0 0 1 246.452 54.605 A 34.526 34.526 0 0 1 238.63 55.441 L 210.21 55.441 Z M 233.31 43.961 L 237.37 43.961 Q 239.026 43.961 240.105 43.351 A 3.522 3.522 0 0 0 240.94 42.701 A 3.847 3.847 0 0 0 241.748 41.345 Q 242.13 40.288 242.13 38.781 L 242.13 17.641 A 8.172 8.172 0 0 0 241.91 15.654 Q 241.107 12.461 237.37 12.461 L 233.31 12.461 L 233.31 43.961 Z"
          id="4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 313.74 55.441 L 266.49 55.441 L 266.49 43.961 L 269.99 43.961 L 269.99 12.461 L 266.49 12.461 L 266.49 0.981 L 313.74 0.981 L 313.74 22.121 L 298.06 22.121 L 298.06 12.461 L 289.59 12.461 L 289.59 23.521 L 295.75 23.521 L 295.75 31.501 L 289.59 31.501 L 289.59 43.961 L 298.06 43.961 L 298.06 32.901 L 313.74 32.901 L 313.74 55.441 Z"
          id="5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 345.8 12.461 L 345.8 0.981 L 369.18 0.981 L 369.18 12.461 L 366.38 12.461 L 353.85 55.441 L 331.17 55.441 L 318.64 12.461 L 315.84 12.461 L 315.84 0.981 L 342.72 0.981 L 342.72 12.461 L 339.08 12.461 L 343.91 35.911 L 344.61 35.911 L 349.44 12.461 L 345.8 12.461 Z"
          id="6"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 418.67 55.441 L 371.42 55.441 L 371.42 43.961 L 374.92 43.961 L 374.92 12.461 L 371.42 12.461 L 371.42 0.981 L 418.67 0.981 L 418.67 22.121 L 402.99 22.121 L 402.99 12.461 L 394.52 12.461 L 394.52 23.521 L 400.68 23.521 L 400.68 31.501 L 394.52 31.501 L 394.52 43.961 L 402.99 43.961 L 402.99 32.901 L 418.67 32.901 L 418.67 55.441 Z"
          id="7"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 464.66 55.441 L 421.33 55.441 L 421.33 43.961 L 424.83 43.961 L 424.83 12.461 L 421.33 12.461 L 421.33 0.981 L 450.87 0.981 L 450.87 12.461 L 444.43 12.461 L 444.43 43.961 L 450.73 43.961 L 450.73 37.521 L 464.66 37.521 L 464.66 55.441 Z"
          id="8"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 485.583 55.697 A 39.221 39.221 0 0 0 493.36 56.421 A 45.753 45.753 0 0 0 495.761 56.359 Q 499.953 56.139 503.46 55.132 A 22.675 22.675 0 0 0 513.135 49.701 A 19.721 19.721 0 0 0 517.558 43.119 Q 520.1 37.134 520.1 28.211 A 51.304 51.304 0 0 0 519.69 21.516 Q 518.41 11.81 513.135 6.721 A 21.155 21.155 0 0 0 509.429 3.867 Q 505.825 1.673 501.137 0.724 A 39.221 39.221 0 0 0 493.36 0.001 A 45.753 45.753 0 0 0 490.959 0.063 Q 486.767 0.283 483.26 1.29 A 22.675 22.675 0 0 0 473.585 6.721 A 19.721 19.721 0 0 0 469.162 13.303 Q 466.62 19.288 466.62 28.211 A 51.304 51.304 0 0 0 467.03 34.906 Q 468.31 44.612 473.585 49.701 A 21.155 21.155 0 0 0 477.291 52.555 Q 480.895 54.749 485.583 55.697 Z M 498.12 38.781 L 498.12 17.641 A 9.448 9.448 0 0 0 498.021 16.22 Q 497.91 15.494 497.675 14.912 A 3.76 3.76 0 0 0 496.93 13.721 A 3.741 3.741 0 0 0 495.33 12.738 Q 494.476 12.461 493.36 12.461 Q 491.704 12.461 490.625 13.071 A 3.522 3.522 0 0 0 489.79 13.721 A 3.847 3.847 0 0 0 488.982 15.077 Q 488.6 16.134 488.6 17.641 L 488.6 38.781 A 9.895 9.895 0 0 0 488.694 40.198 Q 488.797 40.91 489.014 41.479 A 3.634 3.634 0 0 0 489.79 42.736 A 3.737 3.737 0 0 0 491.334 43.674 Q 492.207 43.961 493.36 43.961 Q 495.016 43.961 496.095 43.351 A 3.522 3.522 0 0 0 496.93 42.701 A 3.847 3.847 0 0 0 497.738 41.345 Q 498.12 40.288 498.12 38.781 Z"
          id="9"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 522.48 55.441 L 522.48 43.961 L 525.98 43.961 L 525.98 12.461 L 522.48 12.461 L 522.48 0.981 L 553.21 0.981 A 33.612 33.612 0 0 1 558.437 1.36 Q 561.165 1.791 563.356 2.709 A 14.718 14.718 0 0 1 567 4.866 Q 571.76 8.751 571.76 17.431 Q 571.76 22.977 569.817 26.566 A 11.351 11.351 0 0 1 567 29.996 A 15.487 15.487 0 0 1 561.914 32.686 Q 559.72 33.395 557.063 33.684 A 35.76 35.76 0 0 1 553.21 33.881 L 545.58 33.881 L 545.58 43.961 L 552.3 43.961 L 552.3 55.441 L 522.48 55.441 Z M 545.58 23.941 L 547.96 23.941 Q 552.02 23.941 552.02 19.461 L 552.02 16.941 A 8.335 8.335 0 0 0 551.935 15.708 Q 551.727 14.317 551.005 13.546 A 3.199 3.199 0 0 0 549.604 12.688 Q 548.888 12.461 547.96 12.461 L 545.58 12.461 L 545.58 23.941 Z"
          id="10"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 621.39 55.441 L 574.14 55.441 L 574.14 43.961 L 577.64 43.961 L 577.64 12.461 L 574.14 12.461 L 574.14 0.981 L 621.39 0.981 L 621.39 22.121 L 605.71 22.121 L 605.71 12.461 L 597.24 12.461 L 597.24 23.521 L 603.4 23.521 L 603.4 31.501 L 597.24 31.501 L 597.24 43.961 L 605.71 43.961 L 605.71 32.901 L 621.39 32.901 L 621.39 55.441 Z"
          id="11"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 624.05 55.441 L 624.05 43.961 L 627.55 43.961 L 627.55 12.461 L 624.05 12.461 L 624.05 0.981 L 656.18 0.981 A 35.217 35.217 0 0 1 661.377 1.339 Q 664.032 1.736 666.181 2.574 A 14.965 14.965 0 0 1 669.97 4.691 A 11.511 11.511 0 0 1 673.819 10.327 Q 674.47 12.3 674.656 14.724 A 26.288 26.288 0 0 1 674.73 16.731 A 19.59 19.59 0 0 1 674.342 20.723 A 14.698 14.698 0 0 1 672.84 24.851 Q 670.95 28.281 667.45 29.611 L 667.52 30.311 A 9.527 9.527 0 0 1 670.597 31.293 Q 673.272 32.739 673.983 35.986 A 12.101 12.101 0 0 1 674.24 38.571 L 674.24 43.961 L 677.53 43.961 L 677.53 55.441 L 655.34 55.441 L 655.34 38.991 Q 655.34 36.261 654.535 34.861 A 3.942 3.942 0 0 0 652.454 33.117 A 5.287 5.287 0 0 0 652.015 32.971 A 10.084 10.084 0 0 0 650.803 32.713 Q 649.316 32.481 647.15 32.481 L 647.15 43.961 L 651.77 43.961 L 651.77 55.441 L 624.05 55.441 Z M 647.15 23.941 L 650.93 23.941 Q 652.349 23.941 653.271 23.411 A 3.007 3.007 0 0 0 653.975 22.856 Q 654.724 22.055 654.92 20.587 A 8.52 8.52 0 0 0 654.99 19.461 L 654.99 16.941 A 8.335 8.335 0 0 0 654.905 15.708 Q 654.697 14.317 653.975 13.546 A 3.199 3.199 0 0 0 652.574 12.688 Q 651.858 12.461 650.93 12.461 L 647.15 12.461 L 647.15 23.941 Z"
          id="12"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
};

export const HeroComponent = () => {
  const prefers = useTheme();
  return (
    <>
      {/* <Head>
        <title>Home | AllIn</title>
        <meta name="description" content="all in website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Box>
        <Box
          sx={{
            margin: 'auto',
            pt: 30,
          }}
        >
          <Parallax speed={30}>
            <div style={{ textAlign: 'center' }}>
              <Typography sx={heroStyle.up} variant="body2" color="inherit">
                Hi I am Eyasu 👋🏽.
              </Typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  paddingBlock: 10,
                  marginInline: 'auto',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <FullStack />
                <Developer />
              </div>
              <Typography sx={heroStyle.up} variant="body2" color="inherit">
                I make everything look as good as you want !
              </Typography>
              <div style={{ marginBlock: '2em' }}>
                <Link
                  style={{ textDecoration: 'none' }}
                  href="mailto:eyasucc@gmail.com"
                >
                  <Button
                    sx={{
                      overflow: 'hidden',
                      bgcolor: '#d97706',
                      borderRadius: 1,
                      py: 1,
                      fontSize: 20,
                      fontWeight: 700,
                      '.MuiButton-endIcon': {
                        color: '#d97706',
                        transform: 'translateX(30px)',
                        transition: '.3s ease-in-out',
                      },
                      '&:hover': {
                        color: '#d97706',
                        bgcolor: 'transparent',
                        border: '0.1px solid #d97706',
                        '.MuiButton-endIcon': {
                          transform: 'translateX(0)',
                          transition: '.3s ease-in-out',
                        },
                      },
                    }}
                    endIcon={<OpenInNewIcon />}
                    variant="contained"
                    disableElevation
                    // color="primary"
                  >
                    start your next project with me
                  </Button>
                </Link>
              </div>
            </div>
          </Parallax>
        </Box>
        <Services />
      </Box>
    </>
  );
};

export const Services = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <Image
        src="image/hero_image.svg"
        alt=""
        style={{ zIndex: 1 }}
        width={400}
        height={400}
      />

      <Box
        sx={{
          height: 400,
          width: 1 / 1,
          background:
            'linear-gradient(135.26deg,#1d4ed8 2.23%,#1d4ed8 100%),url(/image/square.svg) no-repeat top center / cover',
          backgroundBlendMode: 'saturation',
          transform: 'translateY(-110px)',
        }}
      />
      <Paper
        elevation={1}
        sx={{ transform: 'translateY(-200px)', pt: 1, width: '90%' }}
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
          Technologies & Tools
        </Typography>
        <Stack
          direction={'row'}
          flexWrap={'wrap'}
          sx={{
            justifyContent: 'space-evenly',
            justifySelf: 'center',
            gap: 2,
            '& > :not(style)': {
              m: 'auto',
              width: 350,
              height: 350,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <CardMedia
              title=""
              src="/image/icons/front_end.svg"
              component="img"
              sx={{ width: 70, height: 70 }}
            />
            <Typography fontWeight="bold" variant="h5" color="inherit">
              On Frontend Development
            </Typography>
            <Typography
              sx={{ width: '80%', textAlign: 'center' }}
              variant="body1"
              color="inherit"
            >
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </Typography>
            <Stack
              direction="row"
              sx={{
                gap: 2,
                '.MuiCardMedia-root': {
                  width: 50,
                  height: 50,
                  objectFit: 'contain',
                },
              }}
            >
              {['javascript.svg', 'react.svg', 'css3.svg', 'html.svg'].map(
                (image, index) => (
                  <CardMedia
                    key={index}
                    title=""
                    src={`/image/icons/${image}`}
                    component="img"
                  />
                )
              )}
            </Stack>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <CardMedia
              title=""
              src="/image/icons/libraries.svg"
              component="img"
              sx={{ width: 70, height: 70 }}
            />
            <Typography fontWeight="bold" variant="h5" color="inherit">
              Libraries For Both
            </Typography>
            <Typography
              sx={{ width: '80%', textAlign: 'center' }}
              variant="body1"
              color="inherit"
            >
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </Typography>
            <Stack
              direction="row"
              sx={{
                gap: 2,
                flexWrap: 'wrap',
                '.MuiCardMedia-root': {
                  width: 50,
                  height: 50,
                  objectFit: 'contain',
                },
              }}
            >
              {[
                'tailwind-css.svg',
                'material-ui.svg',
                'bootstrap.svg',
                'jwt.svg',
                'rest-api.png',
              ].map((image, index) => (
                <CardMedia
                  key={index}
                  title=""
                  src={`/image/icons/${image}`}
                  component="img"
                />
              ))}
            </Stack>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <CardMedia
              title=""
              src="/image/icons/back_end.svg"
              component="img"
              sx={{ width: 70, height: 70 }}
            />
            <Typography fontWeight="bold" variant="h5" color="inherit">
              On Backend Development
            </Typography>
            <Typography
              sx={{ width: '80%', textAlign: 'center' }}
              variant="body1"
              color="inherit"
            >
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </Typography>
            <Stack
              direction="row"
              sx={{
                gap: 2,
                '.MuiCardMedia-root': {
                  width: 50,
                  height: 50,
                  objectFit: 'contain',
                },
              }}
            >
              {['django.svg', 'node-js.svg', 'flask.svg'].map(
                (image, index) => (
                  <CardMedia
                    key={index}
                    title=""
                    src={`/image/icons/${image}`}
                    component="img"
                  />
                )
              )}
            </Stack>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
