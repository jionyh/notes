import React from "react";
import { Button } from "../ui/button";

interface MenuItemProps {
  icon?: JSX.Element;
  title?: string;
  action?: () => boolean;
  isActive?: () => boolean;
}
export default function MenuItem({
  icon,
  title,
  action,
  isActive,
}: MenuItemProps) {
  const activeClass = isActive && isActive();
  return (
    <Button
      variant="outline"
      size="icon"
      className={`menu-item ${
        activeClass
          ? "bg-primary text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground"
          : "bg-transparent"
      } p-1`}
      onClick={action}
      title={title}
    >
      {icon}
    </Button>
  );
}
