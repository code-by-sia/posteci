import { Mail, StampIcon } from "lucide-react";
import Layout from "./layout";
import Body from "./Body";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HttpMethodSelector } from "@/components/http-method-selector";
import { useRequest } from "@/hooks/requset-context";

export function App() {
  const req = useRequest();

  return (
    <Layout className="p-3 bg-gray-50">
      <header className="flex flex-col w-full ">
        <h1 className="flex items-center gap-2 font-extralight text-xl py-3 ">
          <Mail size={20} />
          User Login
        </h1>
        <div className="p-4 flex w-full items-center  rounded border-2 bg-white gap-2 ">
          <HttpMethodSelector value={req.method} onChange={req.setMethod} />
          <Input
            className="font-mono"
            value={req.url}
            onChange={(e) => req.setUrl(e.target.value)}
          />
          <Button onClick={() => {}}>
            Send
            <StampIcon />
          </Button>
        </div>
      </header>
      <div className="flex-1 flex py-3 bg-bg-white rounded">
        <Body />
      </div>
    </Layout>
  );
}

export default App;
