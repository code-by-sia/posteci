import {
  useCallback,
  useContext,
  createContext,
  useState,
  useMemo,
} from "react";

const TEMPLATE = {
  method: "POST",
  url: "http://localhost:3000/api/users?user=John",
  headers: [
    {
      key: "Content-Type",
      value: "application/json",
      active: true,
    },
    {
      key: "Authorization",
      value: "Bearer token",
      active: true,
    },
  ],
  body: JSON.stringify(
    {
      name: "John Doe",
      email: "john@example.com",
    },
    null,
    2,
  ),
};

export const RequestContext = createContext();

export function RequestProvider({ children }) {
  const [request, setRequest] = useState({
    method: "GET",
    url: "",
    headers: [],
    body: "",
    auth: {
      type: "none",
      data: null,
    },
    ...TEMPLATE,
  });
  const activeHeaders = useMemo(
    () => request.headers.filter((header) => header.active),
    [request.headers],
  );

  const params = useMemo(() => {
    try {
      const params = new URL(request.url).searchParams;

      const newParams = [];
      for (const [key, value] of params.entries()) {
        newParams.push({ key, value, active: true });
      }

      return newParams;
    } catch {
      return [];
    }
  }, [request]);

  const setParams = useCallback(
    (params) => {
      const url = new URL(request.url.split("?")[0]);

      for (const { key, value, active } of params) {
        if (active) url.searchParams.append(key, value);
      }

      setRequest({ ...request, url: url.toString() });
    },
    [request, setRequest],
  );

  return (
    <RequestContext.Provider
      value={{
        hasBody: request.method !== "GET" && request.method !== "HEAD",
        activeHeaders,
        url: request.url,
        method: request.method,
        auth: request.auth,
        headers: request.headers,
        body: request.body,
        setHeaders: (headers) => setRequest({ ...request, headers }),
        setBody: (body) => setRequest({ ...request, body }),
        setAuth: (auth) => setRequest({ ...request, auth }),
        setUrl: (url) => setRequest({ ...request, url }),
        setMethod: (method) => setRequest({ ...request, method }),
        params: params,
        setParams: setParams,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}

export const useRequest = () => useContext(RequestContext);
