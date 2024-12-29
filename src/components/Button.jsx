import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
        >
            {leftIcon}

            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div>{title}</div>
                <div className="bg-violet-300 ease-in-out h-[1.5px] w-0 absolute  bottom-0 right-0 group-hover:w-full transition-all duration-500"></div>
            </span>
        </button>
    );
};

export default Button;
