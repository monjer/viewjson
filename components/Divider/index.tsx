import React from 'react';

interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
  vertical?: boolean;
}

const Divider = (props: DividerProps) => {
  const { className = "", style = {}, vertical = false } = props;
  return (
    vertical ? <div className={`border-l dark:border-gray-600 mx-1 h-3/5 ${className}`} style={style}></div> :
      <div className={` border-b dark:border-gray-600 my-3.5 ${className}`} style={style}></div>
  );
};

export default Divider;
