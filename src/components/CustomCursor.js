"use client";

import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const solidCircleRef = useRef(null);
  const hollowCircleRef = useRef(null);

  const solidCirclePos = useRef({ x: 0, y: 0 });
  const hollowCirclePos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (solidCircleRef.current) {
        solidCircleRef.current.style.left = `${mousePos.current.x}px`;
        solidCircleRef.current.style.top = `${mousePos.current.y}px`;
      }

      // Update the solidCirclePos to the mouse position for the hollow circle to follow
      solidCirclePos.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      hollowCirclePos.current.x += (solidCirclePos.current.x - hollowCirclePos.current.x) * 0.6;
      hollowCirclePos.current.y += (solidCirclePos.current.y - hollowCirclePos.current.y) * 0.6;

      if (hollowCircleRef.current) {
        hollowCircleRef.current.style.left = `${hollowCirclePos.current.x}px`;
        hollowCircleRef.current.style.top = `${hollowCirclePos.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'a') {
        solidCircleRef.current.classList.add('hovered');
        hollowCircleRef.current.classList.add('hovered');
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'BUTTON'|| e.target.tagName === 'a') {
        solidCircleRef.current.classList.remove('hovered');
        hollowCircleRef.current.classList.remove('hovered');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="solidCircle" ref={solidCircleRef} />
      <div className="hollowCircle" ref={hollowCircleRef} />
    </>
  );
};

export default CustomCursor;
