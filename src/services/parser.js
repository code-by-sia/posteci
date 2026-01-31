class Tokenizer {
  constructor(code) {
    this.code = code;
    this.index = 0;
    this.tokens = [];
  }

  next() {
    if (this.index === this.code.length) return null;
    return this.code[++this.index];
  }
  current() {
    return this.code[this.index];
  }

  readValue() {
    let value = "";
    while (this.next() !== "\n") value += this.current();
    this.tokens.push({ type: "value", value: value.trim() });
  }

  readVariable() {
    let variable = "";
    while (this.next() !== "=") variable += this.current();
    this.tokens.push({ type: "variable", value: variable.trim() });
  }

  readComment() {
    let comment = "";
    while (this.next() !== "\n") comment += this.current();

    this.tokens.push({ type: "comment", value: comment });
  }

  readMethod() {
    var method = this.current();
    while (this.next().trim() !== "") method += this.current();
    this.tokens.push({ type: "method", value: method.trim() });
  }

  readUri() {
    let uri = "";
    while (this.next() !== "\n") uri += this.current();
    this.tokens.push({ type: "uri", value: uri.trim() });
  }

  readHeader() {
    let header = this.current();
    while (this.next() !== ":") header += this.current();
    this.tokens.push({ type: "header", value: header.trim() });
    this.readValue();
  }
  readBody() {
    let body = "";
    while (this.next() !== null && this.current()) body += this.current();
    if (body.trim() !== "") {
      this.tokens.push({ type: "body", value: body.trim() });
    }
  }

  readRequest() {
    this.readMethod();
    this.readUri();
    while (this.next() !== "\n") {
      this.readHeader();
    }

    this.readBody();
    this.index++;
  }

  start() {
    while (this.index < this.code.length) {
      const char = this.code[this.index];
      if (char.trim() === "") {
        this.index++;
        continue;
      }

      switch (char) {
        case "#":
          this.readComment();
          break;
        case "@":
          this.readVariable();
          this.readValue();
          break;
        default:
          this.readRequest();
      }
    }
  }

  tokenize() {
    this.start();

    return this.tokens;
  }
}

function getRequests(tokens) {
  let requests = [];

  let uri = "";
  let req = null;

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    let previousToken = tokens[i - 1] || {};
    let nextToken = tokens[i + 1] || {};

    switch (token.type) {
      case "comment":
        if (token.value.trim() === "###") {
          if (req !== null) requests.push(req);
          uri = "";
          req = null;
        }
        break;
      case "method":
        req = { method: token.value };
        break;
      case "uri":
        if (previousToken.type !== "method") {
          throw new Error("URI must follow a method");
        }
        uri = token.value;
        break;
      case "header":
        if (
          previousToken.type !== "value" &&
          previousToken.type !== "uri" &&
          previousToken.type !== "comment"
        ) {
          throw new Error(
            "Header must follow a URI, method, or another header, previous token type: " +
              previousToken.type,
          );
        }
        if (nextToken.type !== "value") {
          throw new Error("Header must be followed by a value");
        }
        req.headers = req.headers || {};
        req.headers[token.value] = tokens[i + 1].value;
        i++;
        break;
      case "body":
        if (req.method === "POST" || req.method === "PUT") {
          if (previousToken.type !== "header" && previousToken.type !== "uri") {
            throw new Error("Body must follow a header or URI");
          }
          req.body = token.value;
        } else {
          throw new Error("Body must follow a POST or PUT method");
        }
        break;
    }
  }
  if (req !== null) {
    requests.push({ uri, options: req });
  }

  return requests;
}

export default function parse(code) {
  const tokens = new Tokenizer(code).tokenize();
  const requests = getRequests(tokens);
  return requests;
}
