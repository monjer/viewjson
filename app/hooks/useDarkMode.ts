'use client'

import { useState, useEffect } from 'react';

function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
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

  return isDarkMode;
}

export default useTheme;