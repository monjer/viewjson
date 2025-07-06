'use client';
import React, { useState } from 'react';
import Portal from '../Portal';
import { outsideClick } from '@/utils';
import position from 'position.js';
import Divider from '../Divider';

interface Props {
  content?: React.ReactNode;
  trigger?: 'click' | 'hover';
  children?: React.ReactElement;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  title?: string
};

const Popover: React.FC<Props> = (props: Props) => {
  const { content = '', trigger = 'click', title = "", children, onVisibleChange, visible = false } = props;
  const [isVisible, setIsVisible] = useState(visible);
  const triggerRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const showPopOver = () => {
    if (onVisibleChange) {
      onVisibleChange(true);
    } else {
      setIsVisible(true);
    }
  };

  React.useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const hidePopOver = () => {
    if ('visible' in props) {
      onVisibleChange(false);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    let destory = null;
    if (isVisible) {
      destory = outsideClick([popoverRef.current, triggerRef.current], () => {
        hidePopOver();
      });
    }
    return () => {
      destory?.();
    };
  }, [isVisible]);

  React.useEffect(() => {
    if (isVisible) {
      const { top, left } = position(popoverRef.current, triggerRef.current, 'bottom-left');
      const verticalOffset = 6;
      popoverRef.current.style.top = `${top + verticalOffset}px`;
      popoverRef.current.style.left = `${left}px`;
    }
  }, [isVisible]);

  const onClick = (e) => {
    if (children.props.onClick) {
      children.props.onClick(e);
    }
    if (trigger === 'click') {
      if (!isVisible) {
        showPopOver();
      } else {
        hidePopOver();
      }
    }
  };
  return (
    <>
      {React.cloneElement(children, {
        ref: triggerRef,
        onClick: onClick,
      })}
      <Portal>
        {isVisible && (
          <div className="fixed z-10 
          rounded
          border border-gray-300 dark:border-gray-800  dark:shadow-gray-100/10
          shadow-lg bg-white dark:bg-gray-900 "
            ref={popoverRef}>
            <div>
              <div className='m-0'>
                <h1 className="text-md font-semibold p-4 ">{title}</h1>
                <Divider className='mt-0 mb-0' />
              </div>
              <div className='px-4 py-6'>
                {content}
              </div>
            </div>
          </div>
        )}
      </Portal>
    </>
  );
};

export default Popover;
