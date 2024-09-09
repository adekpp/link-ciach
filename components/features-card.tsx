import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type FeaturesCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const FeaturesCard = ({
  title,
  description,
  icon: Icon,
}: FeaturesCardProps) => {
  return (
    <Card className="h-full flex flex-col border-[2px] drop-shadow-md">
      <CardHeader className="flex-grow-0">
        <div className="mx-auto">
          <Icon className="h-8 w-8 text-blue-500" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardTitle className="text-center w-full justify-center -mt-4 whitespace-nowrap text-[#121212] dark:text-white text-xl mb-2">
          {title}
        </CardTitle>
        <CardDescription className="w-full text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};