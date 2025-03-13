import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full mx-auto">
      <video
        ref={videoRef}
        src="/videos/RGISKLVideo.mp4"
        className="w-full"
        onEnded={() => setIsPlaying(false)}
        controls={false}
      />
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <button
          onClick={togglePlayPause}
          className="bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-all duration-200"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
