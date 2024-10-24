import React from "react";

type FormatLayoutProps = {
  children?: React.ReactNode
}
const FormatLayout: React.FC = (props: FormatLayoutProps) => {
  return (
    <div className="app-format-content h-[calc(100vh-80px)] overflow-hidden">
      {props.children}
    </div>
  )
}

export default FormatLayout;