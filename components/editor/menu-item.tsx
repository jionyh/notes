import React from "react";
import { Button } from "../ui/button";

interface MenuItemProps {
  icon?: JSX.Element;
  title?: string;
  action?: () => boolean;
  isActive?: () => boolean;
  isDisabled?: boolean;
}
export default function MenuItem({
  icon,
  title,
  action,
  isActive,
  isDisabled,
}: MenuItemProps) {
  const activeClass = isActive && isActive();
  return (
    <Button
      variant="outline"
      size="icon"
      disabled={isDisabled}
      className={`menu-item ${
        activeClass
          ? "bg-primary text-foreground hover:bg-primary/80 hover:text-foreground"
          : "bg-transparent"
      } p-1`}
      onClick={action}
      title={title}
    >
      {icon}
    </Button>
  );
}
