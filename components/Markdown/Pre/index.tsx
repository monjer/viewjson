import { ComponentProps } from "react";
import Copy from "../Copy";

export default function Pre({
  children,
  raw,
  ...rest
}: ComponentProps<"pre"> & { raw?: string }) {
  return (
    <div className="my-5 relative w-full">
      <div className="relative ">
        <pre {...rest}>{children}</pre>
      </div>
      <div className="absolute top-3 right-2.5 z-4 sm:block hidden">
        <Copy content={raw!} />
      </div>
    </div>
  );
}
