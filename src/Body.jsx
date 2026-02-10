import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Editor from "@monaco-editor/react";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PropertiesTable } from "@/components/properties-table";
import { cn } from "@/lib/utils";
import { useRequest } from "./hooks/requset-context";

function ActiveHeadersBadge() {
  const { activeHeaders } = useRequest();
  return activeHeaders > 0 ? <Badge>{activeHeaders}</Badge> : "";
}

export default function Body() {
  const req = useRequest();

  return (
    <Tabs defaultValue="params" className="w-full">
      <TabsList variant="line" className="flex">
        <TabsTrigger value="params">Params</TabsTrigger>
        <TabsTrigger value="auth">Auth</TabsTrigger>
        <TabsTrigger value="headers">
          Headers
          <ActiveHeadersBadge />
        </TabsTrigger>
        <TabsTrigger value="body" disabled={!req.hasBody}>
          Body
        </TabsTrigger>
        <TabsTrigger value="pre-req">Pre-Req</TabsTrigger>
      </TabsList>
      <TabsContent value="params">
        <PropertiesTable value={req.params} onChange={req.setParams} />
      </TabsContent>
      <TabsContent value="auth">
        <div className="flex h-full w-full bg-white border rounded-lg shadow-sm">
          <div className="p-3 min-w-2xs">
            <Field className="w-2/3 m-3">
              <FieldLabel>Auth Type</FieldLabel>
              <Select
                value={req.auth.type}
                onValueChange={(value) =>
                  req.setAuth({ ...req.auth, type: value })
                }
              >
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
        <PropertiesTable
          value={req.headers}
          onChange={req.setHeaders}
          withDescription={true}
        />
      </TabsContent>

      <TabsContent value="body">
        <Editor
          className={cn(
            { hidden: !req.hasBody },
            "shadow-sm rounded-lg overflow-hidden",
          )}
          height="100%"
          defaultLanguage="json"
          value={req.body}
          onChange={req.setBody}
          options={{
            fontSize: 16,
          }}
        />
      </TabsContent>
    </Tabs>
  );
}
