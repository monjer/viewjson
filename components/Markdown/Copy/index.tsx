"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export default function Copy({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <span
      className="border block border-gray-800 rounded-md p-1 hover:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer"
      onClick={handleCopy}
    >
      {isCopied ? (
        <CheckIcon className="w-4 h-4" color="#fff" />
      ) : (
        <CopyIcon className="w-4 h-4" color="#fff" />
      )}
    </span>
  );
}
