import React, { useRef, useState } from "react";

// 3d tilt effect for bento cards
// eslint-disable-next-line react/prop-types
const TiltFast = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");

    const itemRef = useRef();

    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 100;
        const tiltY = (relativeX - 0.5) * -100;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        if (itemRef.current) {
            itemRef.current.style.transition = "transform 0.8s ease";
            setTransformStyle("perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
        }
    };

    return (
        <div
            className={className}
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

export default TiltFast;
