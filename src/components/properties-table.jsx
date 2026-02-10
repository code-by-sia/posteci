import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

function Property({ value, onChange, withDescription = false }) {
  return (
    <TableRow>
      <TableCell className="flex items-center gap-2">
        <Checkbox
          checked={value.active}
          onCheckedChange={(checked) => onChange({ ...value, active: checked })}
        />
        <Input
          className="w-full border-none shadow-none font-mono"
          value={value.key}
          onChange={(e) => onChange({ ...value, key: e.target.value })}
        />
      </TableCell>
      <TableCell>
        <Input
          className="w-full border-none shadow-none font-mono"
          value={value.value}
          onChange={(e) => onChange({ ...value, value: e.target.value })}
        />
      </TableCell>
      {(withDescription && (
        <TableCell>
          <Input
            className="w-full border-none shadow-none"
            value={value.description}
            onChange={(e) =>
              onChange({ ...value, description: e.target.value })
            }
          />
        </TableCell>
      )) ||
        ""}
    </TableRow>
  );
}

export function PropertiesTable({
  value = [],
  onChange = () => {},
  withDescription = false,
}) {
  return (
    <div className="border rounded-lg bg-white">
      <Table className="w-full rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Key</TableHead>
            <TableHead>Value</TableHead>
            {(withDescription && <TableHead>Description</TableHead>) || ""}
          </TableRow>
        </TableHeader>
        <TableBody>
          {value.map((item, index) => (
            <Property
              key={index}
              value={item}
              withDescription={withDescription}
              onChange={(v) => {
                const copy = [...value];
                copy[index] = v;
                onChange(copy);
              }}
            />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={withDescription ? 3 : 2}>
              <Button
                variant="ghost"
                size="xs"
                onClick={() =>
                  onChange([
                    ...value,
                    { key: "", value: "", description: "", active: true },
                  ])
                }
              >
                <PlusIcon /> Add New
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
