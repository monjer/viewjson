'use client';

import React from 'react';

function useDarkMode(): [boolean, () => void] {

  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleColorSchemeChange = (e) => {
      setDarkMode(e.matches);
    };

    handleColorSchemeChange(colorSchemeQuery);
    colorSchemeQuery.addListener(handleColorSchemeChange);
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(darkMode);
    // 清理函数
    return () => {
      colorSchemeQuery.removeListener(handleColorSchemeChange);
    };
  }, []);

  React.useEffect(() => {
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
    document.body.classList.add(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return [darkMode, () => {
    setDarkMode((pre) => !pre);
  }];

}

export default useDarkMode;