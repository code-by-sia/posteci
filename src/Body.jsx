import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Editor from "@monaco-editor/react";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PropertiesTable } from "@/components/properties-table";

const params = [
  { name: "param1", value: "value1", description: "Description for param1" },
  { name: "param2", value: "value2", description: "Description for param2" },
];

export default function Body() {
  return (
    <Tabs defaultValue="params" className="w-full">
      <TabsList variant="line" className="flex">
        <TabsTrigger value="params">Params</TabsTrigger>
        <TabsTrigger value="auth">Auth</TabsTrigger>
        <TabsTrigger value="headers">
          Headers
          <Badge>2</Badge>
        </TabsTrigger>
        <TabsTrigger value="body">Body</TabsTrigger>
        <TabsTrigger value="pre-req">Pre-Req</TabsTrigger>
      </TabsList>
      <TabsContent value="params">
        <PropertiesTable data={params} />
      </TabsContent>
      <TabsContent value="auth">
        <div className="flex h-full w-full bg-white border rounded-lg shadow-sm">
          <div className="p-3 min-w-2xs">
            <Field className="w-2/3 m-3">
              <FieldLabel>Auth Type</FieldLabel>
              <Select value="bearer">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No auth</SelectItem>
                  <SelectItem value="api">API key</SelectItem>
                  <SelectItem value="bearer">Bearer token</SelectItem>
                  <SelectItem value="jwt">JWT bearer</SelectItem>
                  <SelectItem value="basic">Basic auth</SelectItem>
                  <SelectItem value="oauth">OAuth</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Separator orientation="vertical" />
          <div className="p-3">TODO: Implement auth details</div>
        </div>
      </TabsContent>
      <TabsContent value="headers">
        <PropertiesTable data={params} />
      </TabsContent>
      <TabsContent value="body">
        <Editor
          className="shadow-sm rounded-lg overflow-hidden"
          height="100%"
          defaultLanguage="json"
          defaultValue={JSON.stringify(
            {
              name: "shadcn",
              version: "1.0.0",
              info: {
                first_name: "shadcn",
                last_name: "Asdasd",
              },
              list: [1, 2, 3, 4],
            },
            null,
            2,
          )}
          options={{
            fontSize: 16,
          }}
        />
      </TabsContent>
      <TabsContent value="pre-req"></TabsContent>
    </Tabs>
  );
}
