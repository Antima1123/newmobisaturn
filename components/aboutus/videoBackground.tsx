import React from 'react'

export const VideoBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-purple-600" />
    </div>
  )
}

