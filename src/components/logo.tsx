import React from 'react'

interface LogoProps {
  width?: number
  height?: number
}

export default function Logo({ width = 80, height = 80 }: LogoProps = {}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C6FF" />
          <stop offset="100%" stopColor="#0078FF" />
        </linearGradient>
      </defs>
      
      {/* Main bubble shape */}
      <path
        d="M40 4C19.6 4 4 18.8 4 38C4 49.4 9.4 59.6 18.2 66.2C19 66.8 19.6 67.8 19.4 68.8L17.8 76.6C17.6 78 19 79.2 20.4 78.6L29 75.4C29.8 75 30.8 75 31.6 75.2C34.4 76 37.2 76.4 40 76.4C60.4 76.4 76 61.6 76 42.4C76 23.2 60.4 4 40 4Z"
        fill="url(#gradient)"
      />
      
      {/* Lightning bolt */}
      <path
        d="M50 30L34 46H46L30 62L46 46H34L50 30Z"
        fill="white"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}