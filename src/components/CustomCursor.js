"use client"
import {useEffect, useRef } from 'react';
// import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const solidCircleRef = useRef(null);
  const hollowCircleRef = useRef(null);

  const solidCirclePos = useRef({ x: 0, y: 0 });
  const hollowCirclePos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      solidCirclePos.current.x += (mousePos.current.x - solidCirclePos.current.x) * 0.15;
      solidCirclePos.current.y += (mousePos.current.y - solidCirclePos.current.y) * 0.15;

      hollowCirclePos.current.x += (solidCirclePos.current.x - hollowCirclePos.current.x) * 0.2;
      hollowCirclePos.current.y += (solidCirclePos.current.y - hollowCirclePos.current.y) * 0.2;

      if (solidCircleRef.current) {
        solidCircleRef.current.style.left = `${solidCirclePos.current.x}px`;
        solidCircleRef.current.style.top = `${solidCirclePos.current.y}px`;
      }

      if (hollowCircleRef.current) {
        hollowCircleRef.current.style.left = `${hollowCirclePos.current.x}px`;
        hollowCircleRef.current.style.top = `${hollowCirclePos.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);


//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;

//       if (solidCircleRef.current) {
//         solidCircleRef.current.style.left = `${clientX}px`;
//         solidCircleRef.current.style.top = `${clientY}px`;
//       }

//       if (hollowCircleRef.current) {
//         hollowCircleRef.current.style.left = `${clientX}px`;
//         hollowCircleRef.current.style.top = `${clientY}px`;
//       }
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

  return (
    <>
      <div className="solidCircle" ref={solidCircleRef} />
      <div className="hollowCircle" ref={hollowCircleRef} />
    </>
  );
};

export default CustomCursor;
