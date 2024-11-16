import React from "react";

interface Props {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
}
export default function PageTitle({ title, className = '', style = {}, icon = null }: Props) {
  return (
    <div className={`flex my-5 items-center space-x-2 ${className}`} style={style}>
      {icon}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
    </div>
  );
}