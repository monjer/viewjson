import React from 'react';

type DividerProps = {
  className?: string;
  style?: React.CSSProperties;
};

const Divider = (props: DividerProps) => {
  const { className = "", style = {} } = props
  return (
    <div className={`flex-1 border-b dark:border-gray-600 my-3.5 ${className}`} style={style}></div>
  );
};

export default Divider;
