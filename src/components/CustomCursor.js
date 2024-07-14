"use client"
import {useEffect, useRef } from 'react';
// import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const solidCircleRef = useRef(null);
  const hollowCircleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      if (solidCircleRef.current) {
        solidCircleRef.current.style.left = `${clientX}px`;
        solidCircleRef.current.style.top = `${clientY}px`;
      }

      if (hollowCircleRef.current) {
        hollowCircleRef.current.style.left = `${clientX}px`;
        hollowCircleRef.current.style.top = `${clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
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
