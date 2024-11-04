import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
  text: string;
}

const Tooltip = ({ children, text }: Props) => {
  const [visible, setVisible] = useState(false);
  let cls = 'absolute z-10 px-6 py-2 whitespace-nowrap rounded border border-gray-50 shadow-lg bg-white text-black dark:bg-gray-800  dark:border-gray-600 dark:text-white transition duration-300 ease-in-out ';
  if (visible) {
    cls += 'opacity-100';
  } else {
    cls += 'opacity-0';
  }
  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  return (
    <div className="relative">
      <span
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
      {visible && (
        <div
          className={cls}
          style={{
            bottom: "100%",
            left: "50%",
            transform: "translate(-50%, -8px)",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;