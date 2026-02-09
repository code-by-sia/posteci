import { Badge } from "@/components/ui/badge";
const CLASSES = {
  OPTIONS: "bg-gray-50 text-gray-700 dark:bg-gray-950 dark:text-gray-300",
  GET: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  POST: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  PUT: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  PATCH: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  DELETE: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
};

export function HttpMethodBadge({ value }) {
  return (
    <Badge className={CLASSES[value.toUpperCase()]}>
      {value?.toUpperCase()}
    </Badge>
  );
}
