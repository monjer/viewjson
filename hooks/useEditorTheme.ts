import React from "react";
import { coolGlow, clouds } from 'thememirror';

export default function useEditorTheme() {
  const [themeConfig, setThemeConfig] = React.useState(clouds);
  React.useEffect(() => {
    const targetNode = document.documentElement;
    // 配置观察选项
    const config = { attributes: true, attributeFilter: ['class'] };
    const onChange = () => {
      if (targetNode.classList.contains('dark')) {
        setThemeConfig(coolGlow);
      } else {
        setThemeConfig(clouds);
      }
    };
    // 创建一个MutationObserver实例，并传入回调函数
    const observer = new MutationObserver((mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes') {
          onChange();
        }
      }
    });
    observer.observe(targetNode, config);
    onChange();
    return () => {
      observer.disconnect();
    };
  }, []);
  return themeConfig;
}