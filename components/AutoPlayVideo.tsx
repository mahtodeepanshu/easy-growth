import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const AutoPlayVideo = ({ url }: { url: string }) => {
  const [play, setPlay] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Update play state based on visibility
        setPlay(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.disconnect();
      }
    };
  }, [ref]);

  return (
    <div ref={setRef} className={'rounded-lg border border-gray-200 overflow-hidden'}>
      <ReactPlayer
        url={url}
        playing={play}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default AutoPlayVideo;
