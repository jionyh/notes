import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const NoteSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-4 w-[200px]" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-[200px] my-2" />
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <Skeleton className="h-4 w-[200px]" />
      </CardFooter>
    </Card>
  );
};
