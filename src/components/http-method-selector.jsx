import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CLASSES = {
  OPTIONS: "font-bold text-gray-700 dark:text-gray-300",
  GET: "font-bold text-green-700 dark:text-green-300",
  POST: "font-bold text-blue-700 dark:text-blue-300",
  PUT: "font-bold text-sky-700 dark:text-sky-300",
  PATCH: "font-bold text-purple-700 dark:text-purple-300",
  DELETE: "font-bold text-red-700 dark:text-red-300",
  TRACE: "font-bold text-yellow-700 dark:text-yellow-300",
  CONNECT: "font-bold text-indigo-700 dark:text-indigo-300",
  HEAD: "font-bold text-gray-700 dark:text-gray-300",
};

export function HttpMethodSelector({ value, onChange }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full max-w-24">
        <SelectValue placeholder="Select a method" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Methods</SelectLabel>
          <SelectItem value="GET">
            <span className={CLASSES.GET}>GET</span>
          </SelectItem>
          <SelectItem value="POST">
            <span className={CLASSES.POST}>POST</span>
          </SelectItem>
          <SelectItem value="PUT">
            <span className={CLASSES.PUT}>PUT</span>
          </SelectItem>
          <SelectItem value="PATCH">
            <span className={CLASSES.PATCH}>PATCH</span>
          </SelectItem>
          <SelectItem value="DELETE">
            <span className={CLASSES.DELETE}>DELETE</span>
          </SelectItem>
          <SelectItem value="OPTIONS">
            <span className={CLASSES.OPTIONS}>OPTIONS</span>
          </SelectItem>
          <SelectItem value="HEAD">
            <span className={CLASSES.HEAD}>HEAD</span>
          </SelectItem>
          <SelectItem value="TRACE">
            <span className={CLASSES.TRACE}>TRACE</span>
          </SelectItem>
          <SelectItem value="CONNECT">
            <span className={CLASSES.CONNECT}>CONNECT</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
