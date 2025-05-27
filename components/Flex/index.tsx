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

  // Map alignment values to Tailwind classes
  const alignmentMap = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  // Map justify values to Tailwind classes
  const justifyMap = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    stretch: 'justify-stretch',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const flexDirection = `flex-${direction}`;
  const justifyContent = justifyMap[justify];
  const alignItems = alignmentMap[align];
  const flexWrap = wrap === 'wrap' ? 'flex-wrap' : 'flex-nowrap';
  const gap = typeof props.gap !== 'undefined' ? `gap-${props.gap}` : '';

  return (
    <div
      className={`flex gap-x-1 ${flexDirection} ${justifyContent} ${alignItems} ${flexWrap} ${gap} ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Flex;