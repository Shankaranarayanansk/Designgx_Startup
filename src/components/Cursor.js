import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none; /* Make sure cursor doesn't interfere with clicking */
  z-index: 9999; /* Ensure it's above other content */
  overflow: hidden;
`;

const Circle = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  pointer-events: none; /* Ensure it doesn’t interfere with other elements */
  z-index: -1; /* Ensure it's behind other elements */
  transition: transform 0.1s ease; /* Optional: for smoother scaling transitions */
`;

function Cursor() {
  const circleRefs = useRef([]);
  const coords = { x: 0, y: 0 };

  useLayoutEffect(() => {
    circleRefs.current = Array.from(document.querySelectorAll(".circle"));

    circleRefs.current.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
      animate();
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const animate = () => {
    requestAnimationFrame(() => {
      let x = coords.x;
      let y = coords.y;

      circleRefs.current.forEach((circle, index) => {
        circle.style.left = x - 20 + "px";
        circle.style.top = y - 20 + "px";
        circle.style.transform = `scale(${(circleRefs.current.length - index) / circleRefs.current.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circleRefs.current[index + 1] || circleRefs.current[0];

        x += (nextCircle.x - x) * 0.5;
        y += (nextCircle.y - y) * 0.5;
      });
    });
  };

  return (
    <CursorWrapper>
      {Array.from({ length: 18 }).map((_, index) => (
        <Circle className="circle" key={index} ref={(el) => circleRefs.current[index] = el}></Circle>
      ))}
    </CursorWrapper>
  );
}

export default Cursor;
