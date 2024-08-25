import { DataType } from "../../App.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card.tsx";

export const Preview = ({ title, description, image }: DataType) => (
  <Card className="shadow-lg">
    <CardHeader>
      <CardTitle className="leading-8 border-b pb-2 mb-3">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>

    <CardContent>
      <img src={image} alt={title} className="object-cover w-full" />
    </CardContent>
  </Card>
);
