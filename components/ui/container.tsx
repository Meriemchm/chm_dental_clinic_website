import { cn } from "@/lib/utils";
import * as React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={cn("mx-auto md:max-w-7xl max-w-xl px-4", className)}
      {...props}
    >
      {" "}
      {children}{" "}
    </div>
  );
};
