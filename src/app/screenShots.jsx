import React, { useEffect, useRef, useState } from 'react';

const Screencards = ({ cardDetails }) => {
  const elementRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elementTop = elementRef.current.offsetTop;
      const elementHeight = elementRef.current.clientHeight;
      const windowHeight = window.innerHeight;

      const distanceFromTop = elementTop - scrollY;
      const visibilityPercentage = Math.min(
        Math.max(0, (windowHeight - distanceFromTop) / elementHeight),
        1
      );

      const maxRotation = 10;
      const newRotation = (1 - visibilityPercentage) * maxRotation;

      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} style={{ transform: `rotate(${rotation}deg)` }} className={`${cardDetails.classes} w-full lg:w-[70%] mt-20 border-x border-y border-gray-700 rounded-lg flex flex-col pb-4`}>
    <div className="flex gap-2 p-4">
      <div className="w-4 h-4 bg-red-600 rounded-full"></div>
      <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
      <div className="w-4 h-4 bg-green-600 rounded-full"></div>
    </div>
    <hr className="w-full border-t-1 border-gray-700" />
    <div className="p-4 mt-4">
      <h1 className="text-2xl font-mono text-blue-200">{cardDetails.title}</h1>
      <p className="text-lg font-mono tracking-wide mt-6 text-gray-400">
    {cardDetails.desc}
      </p>
    </div>
  </div>
  );
};

export default Screencards;
