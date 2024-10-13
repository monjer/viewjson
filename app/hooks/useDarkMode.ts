'use client'

import React from 'react';

function useDarkMode() {

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleColorSchemeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    // 初始检查
    handleColorSchemeChange(colorSchemeQuery);

    // 添加监听器
    colorSchemeQuery.addListener(handleColorSchemeChange);

    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(darkMode);
    // 清理函数
    return () => {
      colorSchemeQuery.removeListener(handleColorSchemeChange);
    };
  }, []);

  React.useEffect(() => {
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
    document.body.classList.add(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];

}

export default useDarkMode;