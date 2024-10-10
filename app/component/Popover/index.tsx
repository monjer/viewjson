'use client'
import React, { useState } from 'react';
import Portal from '../Portal';
import { outsideClick } from '@/utils';
import position from 'position.js';

interface Props {
  content?: React.ReactNode;
  trigger?: 'click' | 'hover';
  children?: React.ReactElement;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void
};

const Popover: React.FC<Props> = (props: Props) => {
  const { content = '', trigger = 'click', children, onVisibleChange, visible = false } = props;
  const [isVisible, setIsVisible] = useState(false);
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
    if (visible) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [visible]);

  const hidePopOver = () => {
    if (onVisibleChange) {
      onVisibleChange(false);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    let destory = null;
    if (popoverRef.current && triggerRef.current) {
      destory = outsideClick([popoverRef.current, triggerRef.current], () => {
        hidePopOver()
      });
      return () => {
        destory && destory();
      }
    }
  }, [popoverRef.current, triggerRef.current]);

  React.useEffect(() => {
    if (isVisible) {
      const { top, left } = position(popoverRef.current, triggerRef.current, 'bottom-left');
      const verticalOffset = 6
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
  }
  return (
    <>
      {React.cloneElement(children, {
        ref: triggerRef,
        onClick: onClick
      })}
      <Portal>
        {isVisible && (
          <div className="fixed z-10 border rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-gray-900 dark:border-gray-600 dark:shadow-gray-100/10" ref={popoverRef}>
            <div className="p-4">
              {content}
            </div>
          </div>
        )}
      </Portal>
    </>
  )
};

export default Popover;
