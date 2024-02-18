import React from "react";

const CopyrightIcon = ({ height, width, className }) => {
  return (
    <svg
      width={width ? width : "24"}
      height={height ? height : "24"}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 486 512.4"
    >
      <path
        fillRule="nonzero"
        d="M342.53 294.28c0 34.7-8.87 61.22-26.75 79.68-17.99 18.46-42.99 27.69-75.23 27.69-32.83 0-59.23-12.27-79.33-36.8-20.09-24.42-30.14-56.78-30.14-96.85v-25.7c0-39.37 10.16-71.27 30.49-95.68 20.33-24.42 46.61-36.57 78.98-36.57 32.71 0 57.94 9.34 75.7 28.16 17.76 18.81 26.63 45.09 26.63 78.85h-17.75c0-29.79-7.25-52.1-21.85-66.82-14.6-14.61-35.52-21.96-62.73-21.96-27.11 0-48.96 10.51-65.66 31.54-16.71 21.03-25 49.18-25 84.58v25.35c0 34 8.29 61.45 24.77 82.36 16.58 20.91 38.55 31.31 65.89 31.31 56.19 0 84.23-29.67 84.23-89.14h17.75zM19.16 255.73c0 42.99 10.05 82.95 30.26 119.87 20.21 36.91 47.66 66 82.13 87.03 34.58 21.03 71.73 31.54 111.45 31.54 40.19 0 77.57-10.74 112.27-32.24s61.92-50.59 81.78-87.38c19.86-36.69 29.79-76.29 29.79-118.82 0-42.87-9.93-82.48-29.79-118.93s-47.2-65.42-82.02-86.68c-34.69-21.26-72.08-31.9-112.03-31.9-39.49 0-76.52 10.4-111.22 31.2-34.7 20.79-62.15 49.65-82.36 86.33s-30.26 76.64-30.26 119.98zm-19.16 0c0-46.14 10.63-88.9 32.01-128.39 21.38-39.49 50.82-70.56 88.67-93.23C158.42 11.33 199.19 0 243 0c43.81 0 84.58 11.33 122.32 34.11 37.85 22.67 67.41 53.74 88.67 93.23C475.37 166.83 486 209.59 486 255.73c0 45.33-10.4 87.74-31.08 126.99-20.79 39.26-50.12 70.68-87.85 94.28-37.74 23.6-79.09 35.4-124.07 35.4-44.98 0-86.33-11.8-124.07-35.4-37.73-23.6-67.06-55.02-87.74-94.28C10.4 343.47 0 301.06 0 255.73z"
      />
    </svg>
  );
};

export default CopyrightIcon;
