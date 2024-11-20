interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const GitHubIcon: React.FC<IconProps> = ({ width = 24, height = 24, fill = "#000" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
  >
    <path d="M10 0C4.478 0 0 4.59 0 10.253c0 4.53 2.865 8.374 6.839 9.731.506.101.686-.219.686-.492v-1.363c0-1.364.32-1.987.678-2.305C5.96 15.284 4.618 14.416 4.618 10.478c0-1.12.388-2.034 1.03-2.752-.104-.259-.447-1.302.098-2.714 0 0 .838-.275 2.747 1.051A7.965 7.965 0 0110 5.958c.85.004 1.705.118 2.503.345 1.909-1.326 2.747-1.051 2.747-1.051.546 1.412.202 2.455.098 2.714.642.718 1.03 1.632 1.03 2.752 0 3.93-2.337 4.806-4.558 5.064.286.256.545.708.635 1.371.57.262 2.018.715 2.91-.852 0 0 .529-.985 1.533-1.057 0 0 .975.013.068.649 0 0-.655.315-1.11 1.5 0 0-.587 1.83-3.369 1.21v1.243c0 .272-.183.589-.682.494C17.134 18.627 20 14.783 20 10.253 20 4.59 15.522 0 10 0z" />
  </svg>
);

const GmailIcon: React.FC<IconProps> = ({ width = 32, height = 32 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
      fill="white"
    />
    <path
      d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
      fill="#EA4335"
    />
    <path
      d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
      fill="#FBBC05"
    />
    <path
      d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
      fill="#34A853"
    />
    <path
      d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
      fill="#C5221F"
    />
    <path
      d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
      fill="#C5221F"
    />
    <path
      d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
      fill="#C5221F"
    />
    <path
      d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
      fill="#4285F4"
    />
  </svg>
);

const LinkedInIcon: React.FC<IconProps> = ({ width = 16, height = 16 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      fill="#0A66C2"
      d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
    />
  </svg>
);

import React from "react";

interface IconProps {
  width?: number;
  height?: number;
}

const MenuOpenIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuCloseIcon: React.FC<IconProps> = ({ width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6L18 18M18 6L6 18"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export {
  GitHubIcon,
  GmailIcon,
  LinkedInIcon,
  MenuCloseIcon,
  MenuOpenIcon
};