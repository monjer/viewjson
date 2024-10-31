import React from 'react';

interface FlexProps {
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse';
  justify?: 'center' | 'start' | 'end' | 'stretch' | 'between' | 'around' | 'evenly';
  align?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
  wrap?: 'wrap' | 'nowrap';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  gap?: number | string
}

const Flex: React.FC<FlexProps> = (props: FlexProps) => {
  const {
    direction = 'column',
    justify = 'start',
    align = 'start',
    wrap = 'nowrap',
    children,
    className = '',
    style = {},
    ...rest
  } = props;
  // 根据 props 生成 Tailwind CSS 类
  const flexDirection = `flex-${direction}`; // row, column
  const justifyContent = `justify-${justify}`; // center, start, end, space-x
  const alignItems = `items-${align}`; // center, start, end, stretch
  const flexWrap = wrap === 'wrap' ? 'flex-wrap' : 'flex-nowrap'; // wrap, nowrap
  const gap = typeof props.gap !== 'undefined' ? `gap-x-${props.gap}` : '';
  return (
    <div className={`flex gap-x-1 ${flexDirection} ${justifyContent} ${alignItems} ${flexWrap} ${gap} ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
