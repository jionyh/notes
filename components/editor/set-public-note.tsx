import { LiaLockOpenSolid, LiaLockSolid } from "react-icons/lia";
import { Label } from "../ui/label";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Dispatch, SetStateAction } from "react";

interface isPublicProps {
  isPublic: boolean;
  action: Dispatch<SetStateAction<boolean>>;
  isDisabled: boolean;
}
export const SetPublicNote = ({
  isPublic,
  action,
  isDisabled,
}: isPublicProps) => {
  return (
    <div className="flex  items-center justify-center">
      <Label>Visibilidade</Label>
      <div className="flex items-center space-x-1">
        <ToggleGroup
          type="single"
          value={isPublic ? "public" : "private"}
          asChild
        >
          <ToggleGroupItem
            onClick={() => action(true)}
            disabled={isDisabled}
            value="public"
            aria-label="Toggle public"
          >
            <LiaLockOpenSolid className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => action(false)}
            disabled={isDisabled}
            value="private"
            aria-label="Toggle private"
          >
            <LiaLockSolid className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};
