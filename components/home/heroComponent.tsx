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
            d="M 32.27 55.441 L 0 55.441 L 0 43.961 L 3.5 43.961 L 3.5 12.461 L 0 12.461 L 0 0.981 L 41.86 0.981 L 41.86 19.111 L 29.47 19.111 L 29.47 12.461 L 23.1 12.461 L 23.1 24.081 L 33.67 24.081 L 33.67 32.061 L 23.1 32.061 L 23.1 43.961 L 32.27 43.961 L 32.27 55.441 Z"
            id="0"
            vector-effect="non-scaling-stroke"
          />
          <path
            d="M 44.24 55.441 L 44.24 43.961 L 47.74 43.961 L 47.74 12.461 L 44.24 12.461 L 44.24 0.981 L 76.37 0.981 A 35.217 35.217 0 0 1 81.567 1.339 Q 84.222 1.736 86.371 2.574 A 14.965 14.965 0 0 1 90.16 4.691 A 11.511 11.511 0 0 1 94.009 10.327 Q 94.66 12.3 94.846 14.724 A 26.288 26.288 0 0 1 94.92 16.731 A 19.59 19.59 0 0 1 94.532 20.723 A 14.698 14.698 0 0 1 93.03 24.851 Q 91.14 28.281 87.64 29.611 L 87.71 30.311 A 9.527 9.527 0 0 1 90.787 31.293 Q 93.462 32.739 94.173 35.986 A 12.101 12.101 0 0 1 94.43 38.571 L 94.43 43.961 L 97.72 43.961 L 97.72 55.441 L 75.53 55.441 L 75.53 38.991 Q 75.53 36.261 74.725 34.861 A 3.942 3.942 0 0 0 72.644 33.117 A 5.287 5.287 0 0 0 72.205 32.971 A 10.084 10.084 0 0 0 70.993 32.713 Q 69.506 32.481 67.34 32.481 L 67.34 43.961 L 71.96 43.961 L 71.96 55.441 L 44.24 55.441 Z M 67.34 23.941 L 71.12 23.941 Q 72.539 23.941 73.461 23.411 A 3.007 3.007 0 0 0 74.165 22.856 Q 74.914 22.055 75.11 20.587 A 8.52 8.52 0 0 0 75.18 19.461 L 75.18 16.941 A 8.335 8.335 0 0 0 75.095 15.708 Q 74.887 14.317 74.165 13.546 A 3.199 3.199 0 0 0 72.764 12.688 Q 72.048 12.461 71.12 12.461 L 67.34 12.461 L 67.34 23.941 Z"
            id="1"
            vector-effect="non-scaling-stroke"
          />
          <path
            d="M 118.783 55.697 A 39.221 39.221 0 0 0 126.56 56.421 A 45.753 45.753 0 0 0 128.961 56.359 Q 133.153 56.139 136.66 55.132 A 22.675 22.675 0 0 0 146.335 49.701 A 19.721 19.721 0 0 0 150.758 43.119 Q 153.3 37.134 153.3 28.211 A 51.304 51.304 0 0 0 152.89 21.516 Q 151.61 11.81 146.335 6.721 A 21.155 21.155 0 0 0 142.629 3.867 Q 139.025 1.673 134.337 0.724 A 39.221 39.221 0 0 0 126.56 0.001 A 45.753 45.753 0 0 0 124.159 0.063 Q 119.967 0.283 116.46 1.29 A 22.675 22.675 0 0 0 106.785 6.721 A 19.721 19.721 0 0 0 102.362 13.303 Q 99.82 19.288 99.82 28.211 A 51.304 51.304 0 0 0 100.23 34.906 Q 101.51 44.612 106.785 49.701 A 21.155 21.155 0 0 0 110.491 52.555 Q 114.095 54.749 118.783 55.697 Z M 131.32 38.781 L 131.32 17.641 A 9.448 9.448 0 0 0 131.221 16.22 Q 131.11 15.494 130.875 14.912 A 3.76 3.76 0 0 0 130.13 13.721 A 3.741 3.741 0 0 0 128.53 12.738 Q 127.676 12.461 126.56 12.461 Q 124.904 12.461 123.825 13.071 A 3.522 3.522 0 0 0 122.99 13.721 A 3.847 3.847 0 0 0 122.182 15.077 Q 121.8 16.134 121.8 17.641 L 121.8 38.781 A 9.895 9.895 0 0 0 121.894 40.198 Q 121.997 40.91 122.214 41.479 A 3.634 3.634 0 0 0 122.99 42.736 A 3.737 3.737 0 0 0 124.534 43.674 Q 125.407 43.961 126.56 43.961 Q 128.216 43.961 129.295 43.351 A 3.522 3.522 0 0 0 130.13 42.701 A 3.847 3.847 0 0 0 130.938 41.345 Q 131.32 40.288 131.32 38.781 Z"
            id="2"
            vector-effect="non-scaling-stroke"
          />
          <path
            d="M 196 12.461 L 196 0.981 L 218.96 0.981 L 218.96 12.461 L 215.46 12.461 L 215.46 55.441 L 195.79 55.441 L 175.28 23.871 L 175.28 43.961 L 178.64 43.961 L 178.64 55.441 L 155.68 55.441 L 155.68 43.961 L 159.18 43.961 L 159.18 12.461 L 155.68 12.461 L 155.68 0.981 L 180.95 0.981 L 199.36 29.051 L 199.36 12.461 L 196 12.461 Z"
            id="3"
            vector-effect="non-scaling-stroke"
          />
          <path
            d="M 273.84 0.981 L 273.84 17.921 L 261.8 17.921 L 261.8 12.461 L 257.32 12.461 L 257.32 43.961 L 262.22 43.961 L 262.22 55.441 L 232.82 55.441 L 232.82 43.961 L 237.72 43.961 L 237.72 12.461 L 233.24 12.461 L 233.24 17.921 L 221.2 17.921 L 221.2 0.981 L 273.84 0.981 Z"
            id="4"
            vector-effect="non-scaling-stroke"
          />
          <path
            d="M 299.67 41.511 L 277.2 41.511 L 277.2 30.031 L 299.67 30.031 L 299.67 41.511 Z"
            id="5"
            vector-effect="non-scaling-stroke"
          />
          <path
            d="M 350.7 55.441 L 303.45 55.441 L 303.45 43.961 L 306.95 43.961 L 306.95 12.461 L 303.45 12.461 L 303.45 0.981 L 350.7 0.981 L 350.7 22.121 L 335.02 22.121 L 335.02 12.461 L 326.55 12.461 L 326.55 23.521 L 332.71 23.521 L 332.71 31.501 L 326.55 31.501 L 326.55 43.961 L 335.02 43.961 L 335.02 32.901 L 350.7 32.901 L 350.7 55.441 Z"
            id="6"
            vector-effect="non-scaling-stroke"
          />
          <path
            d="M 393.68 12.461 L 393.68 0.981 L 416.64 0.981 L 416.64 12.461 L 413.14 12.461 L 413.14 55.441 L 393.47 55.441 L 372.96 23.871 L 372.96 43.961 L 376.32 43.961 L 376.32 55.441 L 353.36 55.441 L 353.36 43.961 L 356.86 43.961 L 356.86 12.461 L 353.36 12.461 L 353.36 0.981 L 378.63 0.981 L 397.04 29.051 L 397.04 12.461 L 393.68 12.461 Z"
            id="7"
            vector-effect="non-scaling-stroke"
          />
          <path
            d="M 419.3 55.441 L 419.3 43.961 L 422.8 43.961 L 422.8 12.531 L 419.3 12.531 L 419.3 0.981 L 447.72 0.981 A 34.563 34.563 0 0 1 455.503 1.808 Q 461.738 3.248 466.097 7.195 A 22.217 22.217 0 0 1 466.305 7.386 A 19.129 19.129 0 0 1 471.108 14.758 Q 472.285 17.858 472.8 21.727 A 49.269 49.269 0 0 1 473.2 28.211 A 47.626 47.626 0 0 1 472.655 35.688 Q 472.034 39.582 470.707 42.655 A 18.674 18.674 0 0 1 466.305 49.036 A 23.201 23.201 0 0 1 455.542 54.605 A 34.526 34.526 0 0 1 447.72 55.441 L 419.3 55.441 Z M 442.4 43.961 L 446.46 43.961 Q 448.116 43.961 449.195 43.351 A 3.522 3.522 0 0 0 450.03 42.701 A 3.847 3.847 0 0 0 450.838 41.345 Q 451.22 40.288 451.22 38.781 L 451.22 17.641 A 8.172 8.172 0 0 0 451 15.654 Q 450.197 12.461 446.46 12.461 L 442.4 12.461 L 442.4 43.961 Z"
            id="8"
            vector-effect="non-scaling-stroke"
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
                // 'bootstrap.svg',
                // 'jwt.svg',
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
