import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/data-table";

export function PropertiesTable({ data = [] }) {
  const columns = [
    {
      accessorKey: "name",
      header: "Key",
      cell: ({ row }) => (
        <div className="flex gap-2 items-center py-1">
          <Checkbox /> {row.original.name}
        </div>
      ),
    },
    { accessorKey: "value", header: "Value" },
    { accessorKey: "description", header: "Description" },
  ];

  return <DataTable columns={columns} data={data} />;
}
